import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Paragraph>
      Um clique para proteger sua saúde
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Entrar
      </Button>
      <Button
        mode="outlined"
        labelStyle={{color: "#4CA2CD"}}
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Criar Conta
      </Button>
    </Background>
  )
}
