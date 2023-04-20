import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 20
   },
   titulo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   boxFoto: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#ccc'
   },
   banner: {
      marginTop: 20,
      height: 100,
      borderRadius: 20,
      backgroundColor: '#ccc'
   }
})

export default styles
