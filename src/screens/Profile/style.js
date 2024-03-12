import { StyleSheet } from "react-native";
import { ms, vs } from "../../utils/scaling-utils";
import { Colors, Fonts } from "../../constants";

export const styles = StyleSheet.create({
    headerTextStyle:{
        color:Colors.primary,
        fontSize:Fonts.large,
        textAlign:'center',
        marginBottom:ms(10)
    },
    profileTextStyle:{
        color:Colors.primary,
        fontSize:ms(24),
        textAlign:'center',
        marginVertical:ms(10)
    },
    selectItemTextStyle:{
        color:Colors.primary,
        fontSize:Fonts.large,
        textAlign:'center',
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
        paddingHorizontal:'2%',
        paddingVertical:'2%',
        borderColor:Colors.primary,
        borderRadius:10,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
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
        flex:1
    },
    inputView: {
        width: '50%',
        borderColor:Colors.primary,
        borderWidth:1,
        borderRadius: 10,
        height: ms(5),
        justifyContent: 'center',
        padding: ms(20),
      },
      inputText: {
        height: ms(50),
        color: Colors.primary,
        fontSize:ms(18)
      },
      logoutBtn: {
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        height: ms(50),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vs(300)
      },
      logoutText: {
        color: Colors.white,
        fontSize:Fonts.large
      },
      profileImageContainer:{
        width:ms(120),
        height:ms(120),
        borderRadius:ms(60),
        backgroundColor:'lime',
        alignSelf:'center'
      }
    
})