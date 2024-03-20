import { StyleSheet } from "react-native";
import { Colors } from "../../constants";
import { ms } from "../../utils/scaling-utils";

export const styles = StyleSheet.create({
      inputContainerStyle: {
        width: '100%',
        borderColor:Colors.primary,
        borderWidth:1,
        borderRadius: 10,
        height: ms(5),
        justifyContent: 'center',
        padding: ms(20),
        alignSelf:'center',
        marginVertical:ms(10)
      },
      inputText: {
        height: ms(50),
        color: Colors.primary,
        fontSize:ms(18)
      }
})