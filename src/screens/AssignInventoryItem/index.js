import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { DropdownListComponent, InputText, ModalComponent } from '../../components';
import CheckBox from '@react-native-community/checkbox';
import database from '@react-native-firebase/database';
import { addNewData } from '../../services/firebase';
import { clientsRef, developerRef, inventoryItemsBrandNameRef, inventoryItemsRef, projectOwnerRef } from '../../services/firebase/firebaseConstants';
import { checkIsEmpty, getCurrentDate } from '../../utils';

const AssignInventoryItemsScreen = () => {

    const [isItemModalVisible, setIsItemModalVisible] = useState(false);
    const [isClientListModalVisible, setIsClientListModalVisible] = useState(false);
    const [isBrandListModalVisible, setIsBrandListModalVisible] = useState(false);
    const [isAddProOwnerModalVisible, setIsAddProOwnerModalVisible] = useState(false);
    const [isAddDeveloperModalVisible, setIsAddDeveloperModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedClient, setSelectedClient] = useState('');
    const [selectedItemBrandName, setSelectedItemBrandName] = useState('');
    const [fromClient, setFromClient] = useState(false);
    const [fromThoughtWin, setFromThoughtWin] = useState(false);
    const [projectOwner, setProjectOwner] = useState('');
    const [developer, setDeveloper] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [itemListData, setItemListData] = useState([]);
    const [brandListData, setBrandListData] = useState([]);
    const [clientListData, setClientListData] = useState([]);
    const [developerListData, setDeveloperListData] = useState([]);
    const [projectOwnerListData, setProjectOwnerListData] = useState([]);
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

    const toggleDeveloperModal = (item) => {
        setIsAddDeveloperModalVisible(item === 'Other');
        setDeveloper(item);

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
        const developersRef = database().ref(developerRef);

        const unsubscribeDeveloper = developersRef.on('value', snapshot => {

            const data = snapshot?.val();


            if (data === null || data === undefined) {

                setDeveloperListData([{ label: 'Other', value: 'T001' }]);
            }
            else {

                const tempData = Object.keys(data).map(key => {
                    return { label: data[key].name, value: data[key].empId };
                });

                if (tempData.length === Object.keys(data).length) {
                    tempData.push({ label: 'Other', value: 'T001' });
                }

                setDeveloperListData(tempData);
            }
        });

        const clientRef = database().ref(clientsRef);

        const unsubscribeClient = clientRef.on('value', snapshot => {

            const data = snapshot?.val();

            if (data === null || data === undefined) {
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

        const inventoryItemRef = database().ref(inventoryItemsRef);

        const unsubscribeInventoryItem = inventoryItemRef.on('value', snapshot => {

            const data = snapshot?.val();

            if (data === null || data === undefined) {
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

        const brandNameRef = database().ref(inventoryItemsBrandNameRef);

        const unsubscribeBrandName = brandNameRef.on('value', snapshot => {
            const data = snapshot?.val();

            if (data === null || data === undefined) {
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

        const projectOwnersRef = database().ref(projectOwnerRef);

        const unsubscribeProOwner = projectOwnersRef.on('value', snapshot => {

            const data = snapshot?.val();

            if (data === null || data === undefined) {

                setProjectOwnerListData([{ label: 'Other', value: 'T001' }]);
            }
            else {

                const tempData = Object.keys(data).map(key => {
                    return { label: data[key].name, value: data[key].empId };
                });

                if (tempData.length === Object.keys(data).length) {
                    tempData.push({ label: 'Other', value: 'T001' });
                }

                setProjectOwnerListData(tempData);
            }
        });

        return () => {
            unsubscribeProOwner();
            unsubscribeDeveloper();
            unsubscribeClient();
            unsubscribeInventoryItem();
            unsubscribeBrandName();

        }
    }, []);


    const saveNewDeveloperData = async () => {

        if (checkIsEmpty(developer, email, phone)) {
            setDisableAddButton(true);

            const data =
            {
                name: developer,
                email: email,
                phone: phone
            }

            const type = 'addDeveloper';

            const params = { data, type };

            const res = await addNewData(params);

            if (res === 'success') {
                setEmail('');
                setPhone('');
                setIsAddDeveloperModalVisible(false);
                setDisableAddButton(false);
            }
            else {
                alert('Something went wrong');
                setDisableAddButton(false);
            }
        }
        else {
            alert("Please insert valid data !");
        }
    }

    const saveNewProjectOwnerData = async () => {

        if (checkIsEmpty(projectOwner, email, phone)) {
            setDisableAddButton(true);

            const data =
            {
                name: projectOwner,
                email: email,
                phone: phone
            }

            const type = 'addProjectOwner';

            const params = { data, type };

            const res = await addNewData(params);

            if (res === 'success') {
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
        else {
            alert("Please insert valid data !");
        }
    }

    const saveNewItem = async () => {

        if (checkIsEmpty(selectedItem) && selectedItem !== 'Other') {

            setDisableAddButton(true);

            const data = {
                itemName: selectedItem
            };

            const type = 'addItem';

            const params = { data, type };

            const res = await addNewData(params);


            if (res === 'success') {
                setIsItemModalVisible(false);
                setDisableAddButton(false);
            }
            else {
                alert('Something went wrong');
                setDisableAddButton(false);
            }
        }
        else {
            alert("Please insert valid data !");
        }
    }

    const saveNewBrandName = async () => {

        if (checkIsEmpty(selectedItemBrandName) && selectedItemBrandName !== 'Other') {
            setDisableAddButton(true);

            const data =
            {
                brandName: selectedItemBrandName
            };

            const type = 'addItemBrandName';

            const params = { data, type };

            const res = await addNewData(params);

            if (res === 'success') {
                setIsBrandListModalVisible(false);
                setDisableAddButton(false);
            }
            else {
                alert('Something went wrong');
                setDisableAddButton(false);
            }
        }
        else {
            alert("Please insert valid data !");
        }
    }

    const saveNewClient = async () => {

        if (checkIsEmpty(selectedClient) && selectedClient !== 'Other') {
            setDisableAddButton(true);

            const type = 'addClient';

            const data = {
                clientName: selectedClient
            };

            const params = { data, type };

            const res = await addNewData(params);

            if (res === 'success') {
                setIsClientListModalVisible(false);
                setDisableAddButton(false);
            }
            else {
                alert('Something went wrong');
                setDisableAddButton(false);
            }
        }
        else {
            alert("Please insert valid data !");
        }
    }


    const saveAssignedInventoryDetails = async () => {

        if (checkIsEmpty(selectedItem, selectedItemBrandName, selectedClient, projectOwner, developer)) {
            setDisableSaveButton(true);

            const data = {
                item: selectedItem,
                itemBrandName: selectedItemBrandName,
                fromClient: fromClient,
                fromThoughtWin: fromThoughtWin,
                clientName: selectedClient,
                projectOwnerName: projectOwner,
                developer: developer,
                assignedDate : getCurrentDate()
            }

            const type = 'addAssignedItemsData';

            const params = { data, type };

            const res = await addNewData(params);

            if (res === 'success') {
                setSelectedItem('');
                setSelectedItemBrandName('');
                setFromClient(false);
                setFromThoughtWin(false);
                setSelectedClient('');
                setProjectOwner('');
                setDisableSaveButton(false);
            }
            else {
                alert('Something went wrong');
                setDisableSaveButton(false);
            }
        }
        else {
            alert("Please insert valid data !");
        }
    }

    const addItemModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>
                <Text style={styles.projOwnerTextStyle}> Item Name :</Text>
                <InputText
                    onChangeText={setSelectedItem}
                    placeholderText="Enter item name"
                />

                <TouchableOpacity style={styles.addBtn} onPress={saveNewItem} disabled={disableAddButton}>
                    <Text style={styles.saveText}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }


    const addClientModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>
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

    const addProjectOwnerModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>
                <Text style={styles.projOwnerTextStyle}>Name :</Text>
                <InputText
                    onChangeText={setProjectOwner}
                    placeholderText="Enter project owner name"
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

                <TouchableOpacity style={styles.addBtn} onPress={() => saveNewProjectOwnerData()} disabled={disableAddButton}>
                    <Text style={styles.saveText}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }


    const addDeveloperModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>
                <Text style={styles.projOwnerTextStyle}>Name :</Text>
                <InputText
                    onChangeText={setDeveloper}
                    placeholderText="Enter developer name"
                />

                <Text style={styles.projOwnerTextStyle}>Email :</Text>
                <InputText
                    onChangeText={setEmail}
                    placeholderText="Enter email"
                />

                <Text style={styles.projOwnerTextStyle}>Phone No. :</Text>
                <InputText
                    onChangeText={setPhone}
                    placeholderText="Enter phone no."
                />

                <TouchableOpacity style={styles.addBtn} onPress={() => saveNewDeveloperData()} disabled={disableAddButton}>
                    <Text style={styles.saveText}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const getModalChildComponent = () => {
        if (isItemModalVisible) {
            return addItemModalChildComponent();
        }
        else if (isBrandListModalVisible) {
            return addBrandModalChildComponent();
        }
        else if (isClientListModalVisible) {
            return addClientModalChildComponent()
        }
        else if (isAddProOwnerModalVisible) {
            return addProjectOwnerModalChildComponent();
        }
        else if (isAddDeveloperModalVisible) {
            return addDeveloperModalChildComponent();
        }
    }

    const handleModalClose = () => {

        if (isItemModalVisible) {
            setIsItemModalVisible(false);
        }
        else if (isBrandListModalVisible) {
            setIsBrandListModalVisible(false);

        }
        else if (isClientListModalVisible) {
            setIsClientListModalVisible(false);
        }
        else if (isAddProOwnerModalVisible) {
            setIsAddProOwnerModalVisible(false);
        }
        else if (isAddDeveloperModalVisible) {
            setIsAddDeveloperModalVisible(false);
        }
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
                <View style={styles.inputContainer}>
                    <Text style={styles.textTitle}>Item :</Text>
                    <View style={styles.inputView}>
                        <DropdownListComponent data={itemListData} selectedItem={toggleModal} />
                    </View>
                </View>

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}>Item Brand Name :</Text>
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
                        <Text style={styles.textTitle}>Client Name :</Text>
                        <TouchableOpacity style={styles.clientNameContainer}>
                            <DropdownListComponent data={clientListData} selectedItem={toggleClientListModal} />
                        </TouchableOpacity>
                    </View>
                }

                <ModalComponent isVisible={isItemModalVisible || isClientListModalVisible || isBrandListModalVisible || isAddProOwnerModalVisible || isAddDeveloperModalVisible} childComponent={getModalChildComponent()} closeModal={() => handleModalClose()} />

                <View style={styles.inputContainer}>
                    <Text style={styles.textTitle}>Project Owner :</Text>
                    <View style={styles.inputView}>
                        <DropdownListComponent data={projectOwnerListData} selectedItem={(item) => toggleProjectOwnerModal(item)} />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.textTitle}>Developer :</Text>
                    <View style={styles.inputView}>
                        <DropdownListComponent data={developerListData} selectedItem={(item) => toggleDeveloperModal(item)} />
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