import { StyleSheet } from "react-native";
import { Colors } from "../../constants";
import { ms } from "../../utils/scaling-utils";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.white,
      padding: 16,
    },
    dropdown: {
      height: ms(50),
      borderColor: Colors.gray,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: ms(12),
    },
    icon: {
      marginRight: 20,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });