import { StyleSheet } from "react-native";
import { ms } from "../../utils/scaling-utils";
import { Colors, Fonts } from "../../constants";

export const styles = StyleSheet.create({
    headerTextStyle:{
        color:Colors.primary,
        fontSize:Fonts.large,
        textAlign:'center',
        marginBottom:ms(10)
    },
    selectItemTextStyle:{
        color:Colors.primary,
        fontSize:Fonts.large,
        textAlign:'center',
    },
    projOwnerTextStyle:{
      color:Colors.primary,
      fontSize:Fonts.large,
      marginVertical:ms(5)
  },
    selectItemBrandNameTextStyle:{
        color:Colors.primary,
        fontSize:Fonts.large,
        textAlign:'center',
        width:'80%'
    },
    textTitle:{
        color:Colors.primary,
        fontSize:Fonts.large,
    },
    baseContainer:{
       flex:1,
    },
    secondaryContainer :{
        paddingTop:'7%'
    },
    separatorStyle:{
        backgroundColor:Colors.primary,
        height:1,
        width:'100%'
    },

    modalHeaderSeparator:{
        backgroundColor:Colors.primary,
        height:1,
        width:'100%',
        marginBottom:'2%'
    },
    itemContainer:{
        paddingHorizontal:'5%',
        paddingVertical:'2%',
        borderColor:Colors.primary,
        borderRadius:10,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    brandNameContainer:{
        width:'45%'

    },
    modalContainer :{ 
        backgroundColor: Colors.white, 
        borderRadius: 10, 
        paddingVertical: '5%'
    },
    modalHeaderContainer:{ 
        marginHorizontal: '4%', 
        marginBottom: '4%' 
    },
    headerContainer :{ 
        flexDirection: 'row', 
        paddingHorizontal: '2%',
    },
    checkBoxContainer :{ 
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop:'7%',
        alignItems:'center',
    },

    inputContainer :{ 
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:'7%',
        alignItems:'center',
    },
    scrollViewStyle:{ 
        padding: '3%',
        paddingVertical:'5%',
        marginTop:'5%',
    },
    inputView: {
        width: '50%'
      },
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
      },
      saveBtn: {
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        height: ms(50),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ms(40),
        marginBottom: ms(10),
        alignSelf:'center'
      },
      addBtn: {
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: ms(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: ms(10),
        alignSelf:'center'
      },
      saveText: {
        color: Colors.white,
        fontSize:Fonts.large
      },
      container: {
        backgroundColor: 'white',
        padding: 16,
      },
      dropdown: {
        height: 50,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
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
      modalSecondaryContainer:{
        paddingHorizontal:'5%'
      }
    
})