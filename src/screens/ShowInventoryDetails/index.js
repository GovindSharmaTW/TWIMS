import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './style';
import CheckBox from '@react-native-community/checkbox';
import { DropdownListComponent } from '../../components';
import database from '@react-native-firebase/database';

const ShowInventoryDetailsScreen = () => {

    const [item, setItem] = useState('-');
    const [clientName, setClientName] = useState(null);
    const [projectOwner, setProjectOwner] = useState('-');
    const [selectedItemBrandName, setSelectedItemBrandName] = useState('-');
    const [fromClient, setFromClient] = useState(false);
    const [fromThoughtWin, setFromThoughtWin] = useState(false);
    const [assignedInventoryData, setAssignedInventoryData] = useState('');

    const selectItem = (selectedUser) => {

        const selectedUserInventoryDetails = assignedInventoryData.filter(item => item.label === selectedUser);

        const item = selectedUserInventoryDetails[0];

        if (item) {
            setItem(item.item);
            setSelectedItemBrandName(item.itemBrandName);
            setFromClient(item.fromClient);
            setFromThoughtWin(!item.fromClient);
            setProjectOwner(item.label);
            setClientName(item.clientName);
        }
    }

    useEffect(() => {

        const assignedInventoryRef = database().ref('/AssignedInventoryDetails');

        const unsubscribeAssignedInventoryDetails = assignedInventoryRef.on('value', snapshot => {
            const data = snapshot.val();

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

            <ScrollView style={styles.scrollViewStyle} bounces={false}>

                <DropdownListComponent data={assignedInventoryData} selectedItem={selectItem} />

                <View style={styles.secondaryContainer}>
                    <View style={styles.itemContainer} >
                        <Text style={styles.selectItemTextStyle}>{item}</Text>
                    </View>
                </View>

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}> Item Brand Name : </Text>
                    <View style={styles.brandNameContainer} >
                        <Text numberOfLines={1} style={styles.selectItemBrandNameTextStyle}>{selectedItemBrandName ? selectedItemBrandName : 'Select Brand'}</Text>
                    </View>
                </View>

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}>From :</Text>
                    <CheckBox
                        disabled={true}
                        value={fromClient}
                        boxType={'square'}
                        onValueChange={(newValue) => setFromClient(newValue)}
                    />

                    <Text style={styles.textTitle}> Client </Text>

                    <CheckBox
                        disabled={true}
                        value={fromThoughtWin}
                        boxType={'square'}
                        onValueChange={(newValue) => setFromThoughtWin(newValue)}
                    />

                    <Text style={styles.textTitle}> ThoughtWin </Text>
                </View>

                {fromClient &&
                    <View style={styles.secondaryContainer}>
                        <View style={styles.itemContainer} >
                            <Text style={styles.selectItemTextStyle}>{clientName}</Text>
                        </View>
                    </View>
                }

                <View style={styles.inputContainer}>
                    <Text style={styles.textTitle}>Project Owner : </Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            editable={false}
                            value={projectOwner}
                            placeholder=""
                            placeholderTextColor="#003f5c"
                        />
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>

    )
}

export default ShowInventoryDetailsScreen;