import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "./style";

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text>Olá Arthur</Text>
                <View style={styles.boxFoto}></View>
            </View>
        </View>
    )
}