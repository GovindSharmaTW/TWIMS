import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { DropdownListComponent, InputText, ModalComponent } from '../../components';
import CheckBox from '@react-native-community/checkbox';
import database from '@react-native-firebase/database';
import { addAssignedInventoryItemDetail, addNewBrandName, addNewClient, addNewEmployee, addNewItem } from '../../services/firebase';

const AssignInventoryItemsScreen = () => {

    const [isItemModalVisible, setIsItemModalVisible] = useState(false);
    const [isClientListModalVisible, setIsClientListModalVisible] = useState(false);
    const [isBrandListModalVisible, setIsBrandListModalVisible] = useState(false);
    const [isAddProOwnerModalVisible, setIsAddProOwnerModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null);
    const [selectedItemBrandName, setSelectedItemBrandName] = useState(null);
    const [fromClient, setFromClient] = useState(false);
    const [fromThoughtWin, setFromThoughtWin] = useState(false);
    const [projectOwner, setProjectOwner] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [itemId, setItemId] = useState('');
    const [itemBrandId, setItemBrandId] = useState('');
    const [clientId, setClientId] = useState('');
    const [itemListData, setItemListData] = useState([]);
    const [brandListData, setBrandListData] = useState([]);
    const [clientListData, setClientListData] = useState([]);
    const [employeeListData, setEmployeeListData] = useState([]);
    const [disableSaveButton, setDisableSaveButton] = useState(false);
    const [disableAddButton, setDisableAddButton] = useState(false);

    const toggleModal = (item) => {
        setIsItemModalVisible(item === 'Other');
        setSelectedItem(item);
    };

    const toggleClientListModal = (item) => {
        setIsClientListModalVisible(item === 'Other');
        setSelectedClient(item);
    };

    const toggleItemBrandListModal = (item) => {
        setIsBrandListModalVisible(item === 'Other');
        setSelectedItemBrandName(item);
    };

    const toggleProjectOwnerModal = (item) => {
        setIsAddProOwnerModalVisible(item === 'Other');
        setProjectOwner(item);

    };

    const handleCheckbox1Change = () => {
        setFromClient(!fromClient);
        setFromThoughtWin(false);
    };

    const handleCheckbox2Change = () => {
        setFromClient(false);
        setFromThoughtWin(true);
    };


    useEffect(() => {
        const employeeRef = database().ref('/Employee');

        const unsubscribeEmployee = employeeRef.on('value', snapshot => {

            const data = snapshot.val();

            if (data === null) {

                setEmployeeListData([{ label: 'Other', value: 'T001' }]);
            }
            else {
                const tempData = Object.keys(data).map(key => {
                    return { label: data[key].name, value: data[key].empId };
                });

                if (tempData.length === Object.keys(data).length) {
                    tempData.push({ label: 'Other', value: 'T001' });
                }

                setEmployeeListData(tempData);
            }
        });

        const clientsRef = database().ref('/Clients');

        const unsubscribeClients = clientsRef.on('value', snapshot => {

            const data = snapshot.val();

            if (data === null) {
                setClientListData([{ label: 'Other', value: 'T001' }]);
            }
            else {
                const tempData = Object.keys(data).map(key => {
                    return { label: data[key].clientName, value: data[key].clientId };
                });

                if (tempData.length === Object.keys(data).length) {
                    tempData.push({ label: 'Other', value: 'T001' });
                }

                setClientListData(tempData);
            }

        });

        const inventoryItemsRef = database().ref('/InventoryItems');

        const unsubscribeInventoryItems = inventoryItemsRef.on('value', snapshot => {

            const data = snapshot.val();

            if (data === null) {
                setItemListData([{ label: 'Other', value: 'T001' }]);
            }
            else {
                const tempData = Object.keys(data).map(key => {
                    return { label: data[key].itemName, value: data[key].itemId };
                });

                if (tempData.length === Object.keys(data).length) {
                    tempData.push({ label: 'Other', value: 'T001' });
                }

                setItemListData(tempData);
            }
        });

        const brandNameRef = database().ref('/InventoryItemBrandName');

        const unsubscribeBrandName = brandNameRef.on('value', snapshot => {
            const data = snapshot.val();

            if (data === null) {
                setBrandListData([{ label: 'Other', value: 'T001' }]);
            }
            else {
                const tempData = Object.keys(data).map(key => {
                    return { label: data[key].brandName, value: data[key].brandId };
                });

                if (tempData.length === Object.keys(data).length) {
                    tempData.push({ label: 'Other', value: 'T001' });
                }
                setBrandListData(tempData);
            }
        });

        return () => {
            unsubscribeEmployee();
            unsubscribeClients();
            unsubscribeInventoryItems();
            unsubscribeBrandName();

        }
    }, []);


    const handleEmployeeData = async () => {

        setDisableAddButton(true);

        const params = { employeeId, projectOwner, email, phone };

        const res = await addNewEmployee(params);

        if (res === 'success') {
            setEmployeeId('');
            setEmail('');
            setPhone('');
            setIsAddProOwnerModalVisible(false);
            setDisableAddButton(false);
        }
        else {
            alert('Something went wrong');
            setDisableAddButton(false);
        }

    }

    const saveNewItem = async () => {

        setDisableAddButton(true);

        const params = { itemId, selectedItem };

        const res = await addNewItem(params);

        if (res === 'success') {

            setItemId('');
            setIsItemModalVisible(false);
            setDisableAddButton(false);
        }
        else {
            alert('Something went wrong');
            setDisableAddButton(false);
        }
    }

    const saveNewBrandName = async () => {

        setDisableAddButton(true);

        const params = { itemBrandId, selectedItemBrandName }

        const res = await addNewBrandName(params);

        if (res === 'success') {
            setItemBrandId('');
            setIsBrandListModalVisible(false);
            setDisableAddButton(false);
        }
        else {
            alert('Something went wrong');
            setDisableAddButton(false);

        }
    }

    const saveNewClient = async () => {

        setDisableAddButton(true);

        const params = { clientId, selectedClient };

        const res = await addNewClient(params);

        if (res === 'success') {
            setClientId('');
            setIsClientListModalVisible(false);
            setDisableAddButton(false);
        }
        else {
            alert('Something went wrong');
            setDisableAddButton(false);
        }
    }


    const saveAssignedInventoryDetails = async () => {

        setDisableSaveButton(true);

        const params = { selectedItem, selectedItemBrandName, fromClient, fromThoughtWin, selectedClient, projectOwner };

        const res = await addAssignedInventoryItemDetail(params);

        if (res === 'success') {
            setSelectedItem(null);
            setSelectedItemBrandName(null);
            setFromClient(false);
            setFromThoughtWin(false);
            setSelectedClient(null);
            setProjectOwner('');
            setDisableSaveButton(false);
        }
        else {
            alert('Something went wrong');
            setDisableSaveButton(false);
        }
    }

    const addItemModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>
                <Text style={styles.projOwnerTextStyle}>Item Id :</Text>

                <InputText
                    onChangeText={setItemId}
                    placeholderText="Enter item id"
                />

                <Text style={styles.projOwnerTextStyle}> Item Name :</Text>
                <InputText
                    onChangeText={setSelectedItem}
                    placeholderText="Enter item name"
                />

                <TouchableOpacity style={styles.addBtn} onPress={() => saveNewItem()} disabled={disableAddButton}>
                    <Text style={styles.saveText}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const addClientModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>
                <Text style={styles.projOwnerTextStyle}>Client Id :</Text>

                <InputText
                    onChangeText={setClientId}
                    placeholderText="Enter client id"
                />

                <Text style={styles.projOwnerTextStyle}>Client Name :</Text>
                <InputText
                    onChangeText={setSelectedClient}
                    placeholderText="Enter client name"
                />

                <TouchableOpacity style={styles.addBtn} onPress={() => saveNewClient()} disabled={disableAddButton}>
                    <Text style={styles.saveText}>Add</Text>
                </TouchableOpacity>
            </View>
        )

    }

    const addBrandModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>
                <Text style={styles.projOwnerTextStyle}>Item Brand Id :</Text>
                <InputText
                    onChangeText={setItemBrandId}
                    placeholderText="Enter item brand id"
                />

                <Text style={styles.projOwnerTextStyle}>Item Brand Name :</Text>
                <InputText
                    onChangeText={setSelectedItemBrandName}
                    placeholderText="Enter item brand name"
                />

                <TouchableOpacity style={styles.addBtn} onPress={() => saveNewBrandName()} disabled={disableAddButton}>
                    <Text style={styles.saveText}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const addEmployeeModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>

                <Text style={styles.projOwnerTextStyle}>Employee Id :</Text>
                <InputText
                    onChangeText={setEmployeeId}
                    placeholderText="Enter employee id"
                />

                <Text style={styles.projOwnerTextStyle}>Name :</Text>
                <InputText
                    onChangeText={setProjectOwner}
                    placeholderText="Enter name"
                />

                <Text style={styles.projOwnerTextStyle}>Email :</Text>
                <InputText
                    onChangeText={setEmail}
                    placeholderText="Enter email"
                />

                <Text style={styles.projOwnerTextStyle}>Phone No. :</Text>
                <InputText
                    onChangeText={setPhone}
                    placeholderText="Enter Phone no."
                />

                <TouchableOpacity style={styles.addBtn} onPress={() => handleEmployeeData()} disabled={disableAddButton}>
                    <Text style={styles.saveText}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.baseContainer}>
            <View style={styles.headerContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTextStyle}>Assign Inventory Items</Text>
                </View>
            </View>
            <View style={styles.separatorStyle} />

            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <DropdownListComponent data={itemListData} selectedItem={toggleModal} />

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}> Item Brand Name :</Text>
                    <TouchableOpacity style={styles.brandNameContainer}>
                        <DropdownListComponent data={brandListData} selectedItem={toggleItemBrandListModal} />
                    </TouchableOpacity>
                </View>

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}>From :</Text>
                    <CheckBox
                        disabled={false}
                        value={fromClient}
                        boxType={'square'}
                        onValueChange={handleCheckbox1Change}
                    />

                    <Text style={styles.textTitle}> Client </Text>

                    <CheckBox
                        disabled={false}
                        value={fromThoughtWin}
                        boxType={'square'}
                        onValueChange={handleCheckbox2Change}
                    />

                    <Text style={styles.textTitle}> ThoughtWin </Text>
                </View>

                {fromClient &&
                    <View style={styles.secondaryContainer}>
                        <DropdownListComponent data={clientListData} selectedItem={toggleClientListModal} />
                    </View>
                }

                {
                    isItemModalVisible &&
                    <ModalComponent isVisible={isItemModalVisible} childComponent={addItemModalChildComponent()} closeModal={() => setIsItemModalVisible(false)} />
                }

                {
                    isClientListModalVisible &&
                    <ModalComponent isVisible={isClientListModalVisible} childComponent={addClientModalChildComponent()} closeModal={() => setIsClientListModalVisible(false)} />
                }

                {
                    isBrandListModalVisible &&
                    <ModalComponent isVisible={isBrandListModalVisible} childComponent={addBrandModalChildComponent()} closeModal={() => setIsBrandListModalVisible(false)} />
                }

                {
                    isAddProOwnerModalVisible &&
                    <ModalComponent isVisible={isAddProOwnerModalVisible} childComponent={addEmployeeModalChildComponent()} closeModal={() => setIsAddProOwnerModalVisible(false)} />
                }

                <View style={styles.inputContainer}>
                    <Text style={styles.textTitle}>Project Owner : </Text>
                    <View style={styles.inputView}>
                        <DropdownListComponent data={employeeListData} selectedItem={(item) => toggleProjectOwnerModal(item)} />
                    </View>
                </View>

                <TouchableOpacity style={styles.saveBtn} onPress={() => saveAssignedInventoryDetails()} disabled={disableSaveButton}>
                    <Text style={styles.saveText}>Save Data</Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView >

    )
}

export default AssignInventoryItemsScreen;