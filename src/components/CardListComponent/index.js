import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useEffect, useState } from "react";
import { checkIsEmpty } from "../../utils";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ms } from "../../utils/scaling-utils";
import { Colors } from "../../constants";

export const CardListComponent = ({ data, navigation }) => {

    const [cardListData, setCardListData] = useState([]);

    useEffect(() => {
        setCardListData(data);
    }, [data])

    const ListEmptyComponent = () => {
        return (
            <Text style={styles.textNoDataFound}>No Data Found</Text>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.cardContainer} onPress={() => {navigation.navigate('ShowInventoryCardDetails',{data:item})}}>
               
               <View style={styles.iconContainer}>
               <MaterialIcons name="inventory" size={ms(27)} color={Colors.primary}/>
               </View>

                <View style={styles.cardRowContainer}>
                    <Text style={styles.textTitle}>Owner : </Text>
                    <Text style={styles.textSubTitle}> {item.projectOwner}</Text>
                </View>
                <View style={styles.cardRowContainer}>
                    <Text style={styles.textTitle}>Developer : </Text>
                    <Text style={styles.textSubTitle}> {item.label}</Text>
                </View>
                <View style={styles.cardRowContainer}>
                    <Text style={styles.textTitle}>Item : </Text>
                    <Text style={styles.textSubTitle}> {item.item}</Text>
                </View>

                {checkIsEmpty(item.clientName) &&
                    <View style={styles.cardRowContainer}>
                        <Text style={styles.textTitle}>Client : </Text>
                        <Text style={styles.textSubTitle}> {item.clientName}</Text>
                    </View>
                }

                <View style={styles.cardRowContainer}>
                    <Text style={styles.textTitle}>Date : </Text>
                    <Text style={styles.textSubTitle}> {item.assignedDate}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={cardListData}
            renderItem={(item) => renderItem(item)}
            ListEmptyComponent={ListEmptyComponent}
            keyExtractor={(item)=>item.value}
        />
    )

}
