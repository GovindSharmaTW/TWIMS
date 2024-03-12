import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../constants";

export const styles = StyleSheet.create({
    
    textStyle:{
        color:Colors.primary,
        fontSize:Fonts.large,
        marginLeft:'5%'
    },
    separatorStyle:{
        backgroundColor:Colors.primary,
        height:1,
        width:'100%',
        marginVertical:'5%'
    },
    listItemContainer:{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '100%', 
        justifyContent: 'space-between', 
        paddingHorizontal: '5%' 
    }
    
})