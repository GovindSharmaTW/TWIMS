import { StyleSheet } from "react-native";
import { ms } from "../../utils/scaling-utils";

export const styles = StyleSheet.create({
    headerTextStyle:{
        color:'#203060',
        fontSize: ms(22),
        textAlign:'center',
        marginBottom:ms(10)
    },
    selectItemTextStyle:{
        color:'#203060',
        fontSize:ms(22),
        textAlign:'center',
    },
    textTitle:{
        color:'#203060',
        fontSize:ms(22),
    },
    baseContainer:{
       flex:1,
    },
    secondaryContainer :{
        marginTop:'7%'
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
    scrollViewStyle:{ 
        padding: '3%',
        paddingVertical:'5%' 
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        borderColor:'#203060',
        borderWidth:1,
        paddingHorizontal: ms(10),
        marginTop: ms(10),
      },
      icon: {
        marginRight: ms(10),
      },
      input: {
        flex: 1,
        paddingVertical: ms(10),
        fontSize: ms(16),
        color: '#333',
      },
      inputContainer :{ 
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:'7%',
        alignItems:'center',
    },
    inputView: {
        width: '60%',
        borderColor:'#203060',
        borderWidth:1,
        borderRadius: 10,
        height: ms(5),
        justifyContent: 'center',
        padding: ms(20),
      },
      inputText: {
        color: '#203060',
        fontSize:ms(20)
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
    selectItemBrandNameTextStyle:{
        color:'#203060',
        fontSize:ms(22),
        textAlign:'center',
        width:'80%'
    },
    userListContainer:{ 
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10, 
        maxHeight: ms(160), 
        borderWidth: 1, 
        borderColor: '#203060', 
        position: 'absolute', 
        zIndex: 1000, 
        top: ms(50), 
        backgroundColor: '#fff', 
        paddingVertical:ms(10),
        width:'100%'
    }
    
})