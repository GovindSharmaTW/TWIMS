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
        color:'#203060',
        fontSize:22,
        marginLeft:'5%'
    },
    headerTextStyle:{
        color:'#203060',
        fontSize:22,
        textAlign:'center',
        marginBottom:10
    },
    baseContainer:{
       flex:1
    },
    secondaryContainer :{
        flex:1,
        paddingHorizontal:10,
        paddingVertical:20
    },
    separatorStyle:{
        backgroundColor:'#203060',
        height:1,
        width:'100%',
        marginVertical:'5%'
    },
    itemContainer:{
        padding:10,
        borderColor:'#203060',
        borderRadius:10,
        borderWidth:1

    },
    listItemContainer:{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '100%', 
        justifyContent: 'space-between', 
        paddingHorizontal: '5%' 
    }
    
})