import { View } from "react-native";
import { Text, List } from "react-native-paper";
import styles from "./style";

export default function Vacina(){

    var vacinas = [{name: "H1N1", date: "12 de Novembro 2019"}, {name: "COVID-19 | 1ª Dose", date: "12 de Novembro 2019"}, {name: "Hepatite B", date: "12 de Novembro 2019"}];

    const ListaVacinas = () => (
        <>
        {vacinas.map(vacina => 
        <List.Item style={styles.lista}
        title={vacina.name}
        description={vacina.date}
        left={props => <List.Icon {...props} icon="needle" color='#4CA2CD' />}
      />
        )

        }
        </>
      );

    return(
        <View style={styles.container}>
            <ListaVacinas/>
        </View>
    )
}