import { View } from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import styles from "./style";

export default function Home() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.titulo}>
                    <Text>Olá Arthur</Text>
                    <View style={styles.boxFoto}></View>
                </View>
                <View style={styles.banner}>
                    <Card>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    </Card>
                </View>
            </View>
        </>
    )
}