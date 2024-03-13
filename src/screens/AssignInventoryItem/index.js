import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Modal from "react-native-modal";
import { InventoryItemListComponent, ClientListComponent, ItemCompanyListComponent, DropdownListComponent } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import { ms } from '../../utils/scaling-utils';

const AssignInventoryItemsScreen = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [isClientListModalVisible, setIsClientListModalVisible] = useState(false);
    const [isBrandListModalVisible, setIsBrandListModalVisible] = useState(false);
    const [isAddProOwnerModalVisible, setIsAddProOwnerModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null);
    const [selectedItemBrandName, setSelectedItemBrandName] = useState(null);
    const [fromClient, setFromClient] = useState(false);
    const [fromThoughtWin, setFromThoughtWin] = useState(false);
    const [projectOwner, setProjectOwner] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleClientListModal = () => {
        setIsClientListModalVisible(!isClientListModalVisible)
    };

    const toggleItemBrandListModal = () => {
        setIsBrandListModalVisible(!isBrandListModalVisible)
    };

    const toggleProjectOwnerModal = (item) => {

        console.log("TT01 toggleProjectOwnerModal called", item);

        setIsAddProOwnerModalVisible(item === 'Other');
        setProjectOwner(item);

    };

    // const selectItem = (item) => {
    //     setSelectedItem(item);
    //     toggleModal()
    // }

    const selectClientItemData = (item) => {
        setSelectedClient(item);
        toggleClientListModal()
    }

    const selectItemBrandName = (item) => {
        setSelectedItemBrandName(item);
        toggleItemBrandListModal()
    }

    const handleCheckbox1Change = () => {
        setFromClient(!fromClient);
        setFromThoughtWin(false);
    };

    const handleCheckbox2Change = () => {
        setFromClient(false);
        setFromThoughtWin(true);
    };

    const itemListdata = [
        { label: 'Laptop', value: '1' },
        { label: 'Keyboard', value: '2' },
        { label: 'Mouse', value: '3' },
        { label: 'Connector', value: '4' },
        { label: 'Headphone', value: '5' },
        { label: 'Charger', value: '6' },
        { label: 'Other', value: '7' }

    ];

    const brandListdata = [
        { label: 'Avita', value: '1' },
        { label: 'Asus', value: '2' },
        { label: 'Apple Macbook Pro', value: '3' },
        { label: 'Apple Macbook Air', value: '4' },
        { label: 'Lenovo', value: '5' },
        { label: 'HP', value: '6' },
        { label: 'Other', value: '7' }
    ];

    const clientListdata = [
        { label: 'Microsoft', value: '1' },
        { label: 'Apna Sweets', value: '2' },
        { label: 'JMD', value: '3' },
        { label: 'ThoughtWin', value: '4' },
        { label: 'PlateRate', value: '5' },
        { label: 'Other', value: '6' }
    ];

    const employeeListData = [
        { label: 'Govind Sharma', value: '1' },
        { label: 'Pranav Onkar', value: '2' },
        { label: 'Ajay Singh', value: '3' },
        { label: 'Neeraj Pathak', value: '4' },
        { label: 'Adhish Birthaliya', value: '5' },
        { label: 'Other', value: '6' }
    ];

    console.log("TT01 selected item is", selectedItem);
    console.log("TT01 selected brand name is", selectedItemBrandName);
    console.log("TT01 selected client item is", selectedClient);
    console.log("TT01 selected owneritem is", projectOwner);


    return (
        <SafeAreaView style={styles.baseContainer}>
            <View style={styles.headerContainer}>
                {/* <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back" size={ms(27)} color="#000" />
                </TouchableOpacity> */}

                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTextStyle}>Assign Inventory Items</Text>
                </View>
            </View>
            <View style={styles.separatorStyle} />

            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                {/* <View style={styles.secondaryContainer}>
                    <TouchableOpacity style={styles.itemContainer} onPress={() => toggleModal()}>
                        <Text style={styles.selectItemTextStyle}>{selectedItem ? selectedItem : 'Select Item'}</Text>
                        <AntDesign name="right" size={ms(20)} color="#000" />
                    </TouchableOpacity>
                </View>

                {renderLabel()} */}

                <DropdownListComponent data={itemListdata} selectedItem={setSelectedItem} />

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}> Item Brand Name :</Text>
                    <TouchableOpacity style={styles.brandNameContainer} onPress={() => toggleItemBrandListModal()}>
                        {/* <Text numberOfLines={1} style={styles.selectItemBrandNameTextStyle}>{selectedItemBrandName ? selectedItemBrandName : 'Select Brand'}</Text>
                        <AntDesign name="down" size={20} color="#000" /> */}
                        <DropdownListComponent data={brandListdata} selectedItem={setSelectedItemBrandName} />
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
                        {/* <TouchableOpacity style={styles.itemContainer} onPress={() => toggleClientListModal()}> */}
                        {/* <Text style={styles.selectItemTextStyle}>{selectedClient ? selectedClient : 'Select Client'}</Text>
                            <AntDesign name="right" size={20} color="#000" /> */}
                        <DropdownListComponent data={clientListdata} selectedItem={setSelectedClient} />

                        {/* </TouchableOpacity> */}
                    </View>
                }

                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalHeaderContainer} onPress={() => toggleModal()}>
                            <AntDesign name="closecircleo" size={ms(27)} color="#000" />
                        </TouchableOpacity>
                        <View style={styles.modalHeaderSeparator} />

                        <View style={styles.modalSecondaryContainer}>
                            <Text style={styles.projOwnerTextStyle}> New Item Name :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    value={selectedItem}
                                    placeholder="Enter Item Name"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(text) => setSelectedItem(text)}
                                />
                            </View>

                            <TouchableOpacity style={styles.addBtn} >
                                <Text style={styles.saveText}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal isVisible={isClientListModalVisible}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalHeaderContainer} onPress={() => toggleClientListModal()}>
                            <AntDesign name="closecircleo" size={30} color="#000" />
                        </TouchableOpacity>
                        <View style={styles.modalHeaderSeparator} />

                        <View style={styles.modalSecondaryContainer}>
                            <Text style={styles.projOwnerTextStyle}>New Client Name :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    // value={}
                                    placeholder="Enter Client Name"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(text) => setProjectOwner(text)}
                                />
                            </View>

                            <TouchableOpacity style={styles.addBtn} >
                                <Text style={styles.saveText}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal isVisible={isBrandListModalVisible}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalHeaderContainer} onPress={() => toggleItemBrandListModal()}>
                            <AntDesign name="closecircleo" size={30} color="#000" />
                        </TouchableOpacity>
                        <View style={styles.modalHeaderSeparator} />

                        <ItemCompanyListComponent selectedItem={selectItemBrandName} />
                    </View>
                </Modal>

                <Modal isVisible={isAddProOwnerModalVisible}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalHeaderContainer} onPress={() => setIsAddProOwnerModalVisible(false)}>
                            <AntDesign name="closecircleo" size={30} color="#000" />
                        </TouchableOpacity>
                        <View style={styles.modalHeaderSeparator} />

                        <View style={styles.modalSecondaryContainer}>
                            <Text style={styles.projOwnerTextStyle}>Project Owner Name :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    value={projectOwner}
                                    placeholder="Enter Owner Name"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(text) => setProjectOwner(text)}
                                />
                            </View>

                            <TouchableOpacity style={styles.addBtn} >
                                <Text style={styles.saveText}>Add</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </Modal>

                <View style={styles.inputContainer}>
                    <Text style={styles.textTitle}>Project Owner : </Text>
                    <View style={styles.inputView}>
                        {/* <TextInput
                            style={styles.inputText}
                            value={projectOwner}
                            placeholder="Enter Owner Name"
                            placeholderTextColor="#003f5c"
                            onChangeText={(text) => setProjectOwner(text)}
                        /> */}
                        <DropdownListComponent data={employeeListData} selectedItem={(item) => toggleProjectOwnerModal(item)} />
                    </View>
                </View>

                <TouchableOpacity style={styles.saveBtn} >
                    <Text style={styles.saveText}>Save Data</Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>

    )
}

export default AssignInventoryItemsScreen;