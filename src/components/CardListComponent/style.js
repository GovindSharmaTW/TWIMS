import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../constants";
import { ms } from "../../utils/scaling-utils";

export const styles = StyleSheet.create({
    
    textTitle:{
        color:Colors.primary,
        fontSize:Fonts.large,
    },
    textNoDataFound:{
        color:Colors.primary,
        fontSize:Fonts.large,
        textAlign:'center',
        marginVertical:ms(20)
    },
    textSubTitle:{
        color:Colors.gray,
        fontSize:ms(20),
    },
    separatorStyle:{
        backgroundColor:Colors.primary,
        height:1,
        width:'100%',
        marginVertical:'5%'
    },
    cardContainer:{ 
        width: '100%', 
        justifyContent: 'space-between', 
        padding: '5%', 
        borderRadius:10,
        backgroundColor:Colors.white,
        marginVertical:ms(10)
    },
    cardRowContainer:{
        flexDirection:'row',
        width:'90%',
        paddingVertical:ms(10),
        alignItems:'center'
    },
    iconContainer:{
        alignSelf:'flex-end'
    }
    
})