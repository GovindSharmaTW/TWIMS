import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export const ClientListComponent = ({selectedItem}) => {

    const clientListData = [
        {id:1,clientName:'Microsoft'},
        {id:2,clientName:'Apna Sweets'},
        {id:3,clientName:'JMD'},
        {id:4,clientName:'ThoughtWin'},
        {id:5,clientName:'PlateRate'}
    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listItemContainer} onPress={()=>selectedItem(item.clientName)}>
                <Text style={styles.textStyle}> {item.clientName}</Text>
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
            data={clientListData}
            renderItem={(item) => renderItem(item)}
            ItemSeparatorComponent={renderItemSeparator}
        />
    )

}
