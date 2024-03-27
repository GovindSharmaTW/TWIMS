import { StyleSheet } from "react-native";
import { ms } from "../../utils/scaling-utils";
import { Colors, Fonts } from "../../constants";

export const styles = StyleSheet.create({
    headerTextStyle:{
        color:Colors.primary,
        fontSize: Fonts.large,
        textAlign:'center',
        marginVertical:ms(10)
    },
    selectItemTextStyle:{
        color:Colors.primary,
        fontSize:ms(20),
        textAlign:'center',
    },
    textTitle:{
        color:Colors.primary,
        fontSize:Fonts.large,
        textAlign: 'center'
    },
    baseContainer:{
        flex:1,
    },
    secondaryContainer :{
        marginTop:'7%'
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
        justifyContent:'center',
        alignItems:'flex-start',
        height: ms(50),
        borderColor: Colors.gray,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: ms(12)
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
    scrollViewStyle:{
        padding: '3%',
        paddingVertical:'5%'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        borderColor:Colors.primary,
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
        width: '50%',
        borderColor:Colors.gray,
        borderWidth:1,
        borderRadius: 10,
        height: ms(5),
        justifyContent: 'center',
        padding: ms(20),
    },
    inputText: {
        color: Colors.primary,
        fontSize:ms(20)
    },
    brandNameContainer:{
        paddingVertical:'2%',
        borderColor:Colors.gray,
        borderRadius:10,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'45%',
        paddingHorizontal: ms(12)
    },
    selectItemBrandNameTextStyle:{
        color:Colors.primary,
        fontSize:ms(20),
        width:'80%'
    },
    userListContainer:{
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        maxHeight: ms(160),
        borderWidth: 1,
        borderColor: Colors.primary,
        position: 'absolute',
        zIndex: 1000,
        top: ms(50),
        backgroundColor: Colors.white,
        paddingVertical:ms(10),
        width:'100%'
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        paddingVertical: ms(10),
        justifyContent: 'space-between'
    },
    headerCell: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.primary,
        flex: 1,
        fontSize: ms(12)
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: ms(10),
        fontSize: ms(10)
    },
    cell: {
        flex: 1,
        textAlign: 'center'
    },
    cardListContainer: {
        marginVertical: ms(10),
        marginBottom: ms(180)
    },
    filterIconContainer: {
        alignSelf: 'flex-end'
    },
    modalSecondaryContainer: {
        paddingHorizontal: '5%'
    },
    projOwnerTextStyle: {
        color: Colors.primary,
        fontSize: Fonts.large,
        marginVertical: ms(5)
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
        fontSize: Fonts.large
    },

})