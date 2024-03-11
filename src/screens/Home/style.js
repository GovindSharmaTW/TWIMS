import { StyleSheet } from "react-native";
import { ms } from "../../utils/scaling-utils";

export const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor:'#203060',
        padding :ms(20),
        borderRadius:10,
        marginHorizontal:'5%',
        marginVertical:'5%',
    },
    textStyle:{
        color:'#fff',
        fontSize:ms(22),
        textAlign:'center'
    },
    headerTextStyle:{
        color:'#203060',
        fontSize:ms(22),
        textAlign:'center',
        marginBottom:ms(10)
    },
    baseContainer:{
       flex:1
    },
    secondaryContainer :{
        alignContent:'center',
        justifyContent:'center',
        flex:1
    },
    separatorStyle:{
        backgroundColor:'#203060',
        height:1,
        width:'100%'
    }
})