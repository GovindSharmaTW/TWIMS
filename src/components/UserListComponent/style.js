import { StyleSheet } from "react-native";
import { ms } from "../../utils/scaling-utils";

export const styles = StyleSheet.create({
    textStyle:{
        color:'#203060',
        fontSize:ms(22),
        marginLeft:'5%'
    },
    separatorStyle:{
        backgroundColor:'#203060',
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