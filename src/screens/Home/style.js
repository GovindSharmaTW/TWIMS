import { StyleSheet } from "react-native";
import { ms } from "../../utils/scaling-utils";
import { Colors, Fonts } from "../../constants";

export const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor:Colors.primary,
        padding :ms(20),
        borderRadius:10,
        marginHorizontal:'5%',
        marginVertical:'5%',
    },
    textStyle:{
        color:Colors.white,
        fontSize:Fonts.large,
        textAlign:'center'
    },
    headerTextStyle:{
        color:Colors.primary,
        fontSize:Fonts.large,
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
        backgroundColor:Colors.primary,
        height:1,
        width:'100%'
    }
})