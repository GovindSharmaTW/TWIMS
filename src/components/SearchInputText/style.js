import { StyleSheet } from "react-native";
import { Colors } from "../../constants";
import { ms } from "../../utils/scaling-utils";

export const styles = StyleSheet.create({
      inputContainerStyle: {
        width: '100%',
        borderColor:Colors.primary,
        borderWidth:1,
        borderRadius: 10,
        marginVertical:ms(10),
        flexDirection:'row',
        padding:ms(10),
        alignItems:'center'

      },
      inputText: {
        color: Colors.primary,
        fontSize:ms(18),
        marginLeft:ms(10),
        width:'80%'
        
      }
})