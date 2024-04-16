import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../constants";
import { ms } from "../../utils/scaling-utils";

export const styles = StyleSheet.create({
    textStyle:{
        color:Colors.primary,
        fontSize:Fonts.medium,
        marginLeft:'5%'
    },
   separatorStyle:{
        backgroundColor:Colors.primary,
        height:1,
        width:'100%',
        marginVertical:'5%'
    },
    listItemContainer:{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '100%', 
        justifyContent: 'space-between', 
        paddingHorizontal: '5%' 
    },
    imageStyle:{
        height:ms(180),
    },
    imageContainerStyle:{
      // backgroundColor:'lime',
  },
    addBtn: {
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: ms(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: ms(10),
        alignSelf: 'center'
      },
      saveText: {
        color: Colors.white,
        fontSize: Fonts.medium
      },
      addImageBtn: {
        // width: '20%',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding:ms(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ms(10),
        marginLeft:ms(35),
        alignSelf:'flex-start'
      },
      imageContainer :{

      },
      textNoDataFound:{
        color:Colors.primary,
        fontSize:Fonts.large,
        textAlign:'center',
        marginVertical:ms(20)
    },
    loaderStyle:{ 
      position: 'absolute', 
      top: '50%', 
      left: '50%' 
    }
    
})