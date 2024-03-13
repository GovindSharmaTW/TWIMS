import { StyleSheet } from "react-native";
import { ms } from "../../utils/scaling-utils";
import { Colors, Fonts } from "../../constants";

export const styles = StyleSheet.create({
    textStyle:{
        color:Colors.primary,
        fontSize:Fonts.large,
        textAlign:'center',
        marginVertical:ms(10)
    },
    baseContainer:{
        justifyContent:'center',
        flex:1
    },
    activityContainer :{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})