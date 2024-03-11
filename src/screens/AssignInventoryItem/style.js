import { StyleSheet } from "react-native";
import { ms } from "../../utils/scaling-utils";

export const styles = StyleSheet.create({
    headerTextStyle:{
        color:'#203060',
        fontSize:ms(22),
        textAlign:'center',
        marginBottom:ms(10)
    },
    selectItemTextStyle:{
        color:'#203060',
        fontSize:ms(22),
        textAlign:'center',
    },
    selectItemBrandNameTextStyle:{
        color:'#203060',
        fontSize:ms(22),
        textAlign:'center',
        width:'80%'
    },
    textTitle:{
        color:'#203060',
        fontSize:ms(22),
    },
    baseContainer:{
       flex:1,
    },
    secondaryContainer :{
        paddingTop:'7%'
    },
    separatorStyle:{
        backgroundColor:'#203060',
        height:1,
        width:'100%'
    },

    modalHeaderSeparator:{
        backgroundColor:'#203060',
        height:1,
        width:'100%',
        marginBottom:'2%'
    },
    itemContainer:{
        paddingHorizontal:'5%',
        paddingVertical:'2%',
        borderColor:'#203060',
        borderRadius:10,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    brandNameContainer:{
        paddingHorizontal:'2%',
        paddingVertical:'2%',
        borderColor:'#203060',
        borderRadius:10,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'50%'

    },
    modalContainer :{ 
        backgroundColor: '#fff', 
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
        width: '50%',
        borderColor:'#203060',
        borderWidth:1,
        borderRadius: 10,
        height: ms(5),
        justifyContent: 'center',
        padding: ms(20),
      },
      inputText: {
        height: ms(50),
        color: '#000',
        fontSize:ms(18)
      },
      saveBtn: {
        width: '100%',
        backgroundColor: '#203060',
        borderRadius: 10,
        height: ms(50),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ms(40),
        marginBottom: ms(10),
        alignSelf:'center'
      },
      saveText: {
        color: 'white',
        fontSize:ms(22)
      },
    
})