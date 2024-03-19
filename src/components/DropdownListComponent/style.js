import { StyleSheet } from "react-native";
import { Colors } from "../../constants";
import { ms } from "../../utils/scaling-utils";

export const styles = StyleSheet.create({
  dropdown: {
    height: ms(50),
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: ms(12),
  },
  placeholderStyle: {
    fontSize: ms(16),
    color: Colors.primary
  },
  selectedTextStyle: {
    fontSize: ms(20),
    color: Colors.primary
  },
  iconStyle: {
    width: ms(20),
    height: ms(20)
  },
  inputSearchStyle: {
    height: ms(40),
    fontSize: ms(16)
  },
  emptyDataContainer: {
    justifyContent: 'center'
  }

});