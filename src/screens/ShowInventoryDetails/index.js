import React, { useEffect, useState } from 'react';
import {SafeAreaView, Text, View } from 'react-native';
import { styles } from './style';
import { CardListComponent, DropdownListComponent } from '../../components';
import database from '@react-native-firebase/database';
const ShowInventoryDetailsScreen = () => {

    const [assignedInventoryData, setAssignedInventoryData] = useState('');
    const [tableData, setTableData] = useState([]);


    const selectItem = (selectedUser) => {

        const selectedUserInventoryDetails = assignedInventoryData.filter(item => item.label === selectedUser);

        setTableData(selectedUserInventoryDetails);
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

                <DropdownListComponent data={assignedInventoryData} selectedItem={selectItem} placeholder={'Select project owner'} />

                <View style={styles.cardListContainer}>
                    <CardListComponent data={assignedInventoryData}/>
                </View>
            </View>

        </SafeAreaView>

    )
}

export default ShowInventoryDetailsScreen;