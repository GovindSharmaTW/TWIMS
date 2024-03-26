import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './style';
import { DropdownListComponent } from '../../components';
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
                        label: data[key].projectOwnerName,
                        value: index,
                        item: data[key].item,
                        itemBrandName: data[key].itemBrandName,
                        fromClient: data[key].fromClient,
                        fromThoughtWin: data[key].fromThoughtWin,
                        clientName: data[key].clientName
                    };
                });

                setAssignedInventoryData(tempData);
            }
        });
        return () => {
            unsubscribeAssignedInventoryDetails();
        }
    }, [])

    const renderItem = ({ item }) => {
        return (
            <View style={styles.row}>
                <Text style={styles.cell}>{item.label}</Text>
                <Text style={styles.cell}>{item.item}</Text>
                <Text style={styles.cell}>{item.itemBrandName}</Text>
                <Text style={styles.cell}>{item.fromClient.toString()}</Text>
                <Text style={styles.cell}>{item.clientName || '-'}</Text>
            </View>
        )
    }

    const headerComponent = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerCell}>Pro.Owner</Text>
                <Text style={styles.headerCell}>Item</Text>
                <Text style={styles.headerCell}>ItemBrandName</Text>
                <Text style={styles.headerCell}>FromClient</Text>
                <Text style={styles.headerCell}>ClientName</Text>
            </View>
        )

    }

    const ListEmptyComponent = () => {
        return (
            <Text style={styles.textTitle}>No Data Found</Text>
        )
    }
    return (
        <SafeAreaView style={styles.baseContainer}>
            <View style={styles.headerContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTextStyle}>Show Inventory Details</Text>
                </View>
            </View>
            <View style={styles.separatorStyle} />

            <ScrollView style={styles.scrollViewStyle} bounces={false}>

                <DropdownListComponent data={assignedInventoryData} selectedItem={selectItem} placeholder={'Select project owner'} />


                <View style={styles.tableContainer}>
                    <FlatList
                        data={tableData}
                        renderItem={renderItem}
                        keyExtractor={item => item.value}
                        ListHeaderComponent={headerComponent}
                        ListEmptyComponent={ListEmptyComponent}
                    />
                </View>


            </ScrollView>

        </SafeAreaView>

    )
}

export default ShowInventoryDetailsScreen;