import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Modal from "react-native-modal";
import { DropdownListComponent } from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import { ms } from '../../utils/scaling-utils';
import { Colors } from '../../constants';

const AssignInventoryItemsScreen = (props) => {

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

    return (
        <SafeAreaView style={styles.baseContainer}>
            <View style={styles.headerContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTextStyle}>Assign Inventory Items</Text>
                </View>
            </View>
            <View style={styles.separatorStyle} />

            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <DropdownListComponent data={itemListdata} selectedItem={toggleModal} />

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}> Item Brand Name :</Text>
                    <TouchableOpacity style={styles.brandNameContainer}>
                        <DropdownListComponent data={brandListdata} selectedItem={toggleItemBrandListModal} />
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
                        <DropdownListComponent data={clientListdata} selectedItem={toggleClientListModal} />
                    </View>
                }

                <Modal isVisible={isItemModalVisible}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalHeaderContainer} onPress={() => setIsItemModalVisible(false)}>
                            <AntDesign name="closecircleo" size={ms(27)} color={Colors.black} />
                        </TouchableOpacity>
                        <View style={styles.modalHeaderSeparator} />

                        <View style={styles.modalSecondaryContainer}>
                            <Text style={styles.projOwnerTextStyle}>Item Id :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    value={itemId}
                                    placeholder="Enter item Id"
                                    placeholderTextColor={Colors.gray}
                                    onChangeText={setItemId}
                                />
                            </View>

                            <Text style={styles.projOwnerTextStyle}> Item Name :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    value={selectedItem}
                                    placeholder="Enter item name"
                                    placeholderTextColor={Colors.gray}
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
                            <AntDesign name="closecircleo" size={30} color={Colors.black} />
                        </TouchableOpacity>
                        <View style={styles.modalHeaderSeparator} />

                        <View style={styles.modalSecondaryContainer}>
                            <Text style={styles.projOwnerTextStyle}>Client Id :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    value={clientId}
                                    placeholder="Enter client id"
                                    placeholderTextColor={Colors.gray}
                                    onChangeText={setClientId}
                                />
                            </View>

                            <Text style={styles.projOwnerTextStyle}>Client Name :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    value={selectedClient}
                                    placeholder="Enter client name"
                                    placeholderTextColor={Colors.gray}
                                    onChangeText={setSelectedClient}
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
                            <AntDesign name="closecircleo" size={30} color={Colors.black} />
                        </TouchableOpacity>
                        <View style={styles.modalHeaderSeparator} />

                        <View style={styles.modalSecondaryContainer}>
                            <Text style={styles.projOwnerTextStyle}>Item Brand Id :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    value={itemBrandId}
                                    placeholder="Enter item brand id"
                                    placeholderTextColor={Colors.gray}
                                    onChangeText={setItemBrandId}
                                />
                            </View>

                            <Text style={styles.projOwnerTextStyle}>Item Brand Name :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    value={selectedItemBrandName}
                                    placeholder="Enter item brand name"
                                    placeholderTextColor={Colors.gray}
                                    onChangeText={setSelectedItemBrandName}
                                />
                            </View>

                            <TouchableOpacity style={styles.addBtn} >
                                <Text style={styles.saveText}>Add</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>

                <Modal isVisible={isAddProOwnerModalVisible}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalHeaderContainer} onPress={() => setIsAddProOwnerModalVisible(false)}>
                            <AntDesign name="closecircleo" size={30} color={Colors.black} />
                        </TouchableOpacity>
                        <View style={styles.modalHeaderSeparator} />

                        <View style={styles.modalSecondaryContainer}>

                            <Text style={styles.projOwnerTextStyle}>Employee Id :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    value={employeeId}
                                    placeholder="Enter employee id"
                                    placeholderTextColor={Colors.gray}
                                    onChangeText={setEmployeeId}
                                />
                            </View>

                            <Text style={styles.projOwnerTextStyle}>Project Owner Name :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    value={projectOwner}
                                    placeholder="Enter owner name"
                                    placeholderTextColor={Colors.gray}
                                    onChangeText={setProjectOwner}
                                />
                            </View>



                            <Text style={styles.projOwnerTextStyle}>Email :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    value={email}
                                    placeholder="Enter email"
                                    placeholderTextColor={Colors.gray}
                                    onChangeText={setEmail}
                                />
                            </View>

                            <Text style={styles.projOwnerTextStyle}>Phone No. :</Text>
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.inputText}
                                    value={phone}
                                    placeholder="Enter Phone no."
                                    placeholderTextColor={Colors.gray}
                                    onChangeText={setPhone}
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
                        <DropdownListComponent data={employeeListData} selectedItem={(item) => toggleProjectOwnerModal(item)} />
                    </View>
                </View>

                <TouchableOpacity style={styles.saveBtn} >
                    <Text style={styles.saveText}>Save Data</Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView >

    )
}

export default AssignInventoryItemsScreen;