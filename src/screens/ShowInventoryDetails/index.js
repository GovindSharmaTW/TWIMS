import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './style';
import { CardListComponent, SearchInputText } from '../../components';
import database from '@react-native-firebase/database';

const ShowInventoryDetailsScreen = () => {

    const [assignedInventoryData, setAssignedInventoryData] = useState('');
    const [cardListData, setCardListData] = useState([]);
    const [searchText, setSearchText] = useState('')

    function searchData(query) {

        const searchResults = assignedInventoryData.filter(item =>
            item.label.toLowerCase().includes(query.toLowerCase()) ||
            item.projectOwner.toLowerCase().includes(query.toLowerCase()) ||
            item.item.toLowerCase().includes(query.toLowerCase()) ||
            item.clientName.toLowerCase().includes(query.toLowerCase()) 
        );

        console.log("searcResult",searchResults,query);
        return searchResults;
    }

    const filterList = (searchText) => {
        setCardListData(searchData(searchText));
    }

    useEffect(() => {

        const assignedInventoryRef = database().ref('/AssignedInventoryDetails');

        const unsubscribeAssignedInventoryDetails = assignedInventoryRef.on('value', snapshot => {
            const data = snapshot?.val();

            if (data) {
                const tempData = Object.keys(data).map((key, index) => {
                    return {
                        label: data[key].developer,
                        value: index,
                        item: data[key].item,
                        itemBrandName: data[key].itemBrandName,
                        fromClient: data[key].fromClient,
                        fromThoughtWin: data[key].fromThoughtWin,
                        clientName: data[key].clientName,
                        assignedDate:data[key].assignedDate,
                        projectOwner: data[key].projectOwnerName 
                    };
                });

                setAssignedInventoryData(tempData);
                setCardListData(tempData);
            }
        });

        return () => {
            unsubscribeAssignedInventoryDetails();
        }
    }, [])

    return (
        <SafeAreaView style={styles.baseContainer}>
            <View style={styles.headerContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTextStyle}>Show Inventory Details</Text>
                </View>
            </View>
            <View style={styles.separatorStyle} />

            <View style={styles.scrollViewStyle} bounces={false}>

                <SearchInputText onChangeText={(text) => { setSearchText(text), filterList(text) }} placeholderText={'Search...'} />
                <View style={styles.cardListContainer}>
                    <CardListComponent data={cardListData} />
                </View>
            </View>

        </SafeAreaView>

    )
}

export default ShowInventoryDetailsScreen;