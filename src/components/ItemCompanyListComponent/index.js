import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import AntDesign from 'react-native-vector-icons/AntDesign'

export const ItemCompanyListComponent = ({selectedItem}) => {

    const brandListData = [
        {id:1,title:'Apple Macbook Pro'},
        {id:2,title:'Apple Mackbook Air'},
        {id:3,title:'Avita'},
        {id:4,title:'Asus'},
        {id:5,title:'HP'}
    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listItemContainer} onPress={()=>selectedItem(item.title)}>
                <Text style={styles.textStyle}> {item.title}</Text>
                <AntDesign name="right" size={20} color="#000" />
            </TouchableOpacity>
        )
    }

    const renderItemSeparator = () => {
        return (
            <View style={styles.separatorStyle} />
        )
    }

    return (
        <FlatList
            data={brandListData}
            renderItem={(item) => renderItem(item)}
            ItemSeparatorComponent={renderItemSeparator}
        />
    )

}
