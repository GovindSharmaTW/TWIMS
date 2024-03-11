import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export const InventoryItemListComponent = ({selectedItem}) => {

    const itemListData = [
        { id: 1, title: 'Laptop' },
        { id: 2, title: 'Keyboard' },
        { id: 3, title: 'Mouse' },
        { id: 4, title: 'Connector' },
        { id: 5, title: 'Headphone' },
        { id: 6, title: 'Charger' }
    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listItemContainer} onPress={()=>selectedItem(item.title)}>
                <Text style={styles.textStyle}> {item.title}</Text>
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
            data={itemListData}
            renderItem={(item) => renderItem(item)}
            ItemSeparatorComponent={renderItemSeparator}
        />
    )

}
