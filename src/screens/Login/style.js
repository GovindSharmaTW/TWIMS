import { StyleSheet } from "react-native";
import { ms } from "../../utils/scaling-utils";
import { Colors } from "../../constants";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      fontWeight: 'bold',
      fontSize: ms(32),
      color: Colors.primary,
      marginBottom: ms(40),
    },
    inputView: {
      width: '90%',
      backgroundColor: Colors.white,
      borderColor: Colors.primary,
      borderWidth: 1,
      borderRadius: 25,
      height: ms(50),
      marginBottom: ms(20),
      justifyContent: 'space-between',
      paddingHorizontal: ms(25),
      flexDirection:'row',
      alignItems:'center'
    },
    inputText: {
      height: ms(50),
      color: Colors.black,
    },
    loginBtn: {
      width: '90%',
      backgroundColor: Colors.primary,
      borderRadius: 25,
      height: ms(50),
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: ms(40),
      marginBottom: ms(10),
    },
    loginText: {
      color: Colors.white,
    },
  });