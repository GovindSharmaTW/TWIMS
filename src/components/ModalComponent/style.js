import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
  modalHeaderSeparator: {
    backgroundColor: Colors.primary,
    height: 1,
    width: '100%',
    marginBottom: '2%'
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: '5%'
  },
  modalHeaderContainer: {
    marginHorizontal: '4%',
    marginBottom: '4%'
  }
})