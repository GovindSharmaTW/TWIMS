import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor:'#203060',
        padding :20,
        borderRadius:10,
        marginHorizontal:'5%',
        marginVertical:'5%',
    },
    textStyle:{
        color:'#fff',
        fontSize:22,
        textAlign:'center'
    },
    headerTextStyle:{
        color:'#203060',
        fontSize:22,
        textAlign:'center',
        marginBottom:10
    },
    selectItemTextStyle:{
        color:'#203060',
        fontSize:22,
        textAlign:'center',
    },
    textTitle:{
        color:'#203060',
        fontSize:22,
    },
    baseContainer:{
       flex:1,
    },
    secondaryContainer :{
        // paddingVertical:20
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
        paddingVertical:'7%',
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
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginTop: 10,
      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
        color: '#333',
      },
    
})