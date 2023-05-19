import axios from "axios";
import React, { useState } from "react";
import CryptoJS from 'crypto-js';
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { cpfMask } from "../helpers/cpfMask";
import { cpfValidator } from "../helpers/cpfValidator";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";

export default function LoginScreen({ navigation }) {
  const [message, setMessage] = useState("");
  const [cpf, setCPF] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const cpfError = cpfValidator(cpf.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (cpfError || /*emailError ||*/ passwordError) {
      setCPF({ ...cpf, error: cpfError });
      //setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError });
      return;
    }

    axios.post(process.env.API_URL + '/login', {
      cpf: cpf.value.replace(/\D/g, ''),
      password: CryptoJS.SHA256(password.value).toString()
    })
    .then(function (response) {
      if(response.status === 200 && response.data.status == 'error') {
        setMessage(response.data.message);
      }

      if(response.status === 200 && response.data.id){
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Entrar na Conta</Header>
      {message && <Text style={{color: 'firebrick'}}>{message}</Text>}
      <TextInput
        label="CPF"
        returnKeyType="next"
        maxLength={14}
        value={cpf.value}
        onChangeText={(text) => setCPF({ value: cpfMask(text), error: "" })}
        error={!!cpf.error}
        errorText={cpf.error}
        autoCapitalize="none"
        autoCompleteType="none"
        textContentType="none"
        keyboardType="numeric"
      />
      {/*
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      */}
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Entrar
      </Button>
      <View style={styles.row}>
        <Text>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
