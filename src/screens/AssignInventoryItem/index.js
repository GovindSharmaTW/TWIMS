import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Modal from "react-native-modal";
import { InventoryItemListComponent, ClientListComponent, ItemCompanyListComponent } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import { ms } from '../../utils/scaling-utils';

const AssignInventoryItemsScreen = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [isClientListModalVisible, setIsClientListModalVisible] = useState(false);
    const [isBrandListModalVisible, setIsBrandListModalVisible] = useState(false);
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

    const selectItem = (item) => {
        setSelectedItem(item);
        toggleModal()
    }

    const selectClientItemData = (item) => {
        setSelectedClient(item);
        toggleClientListModal()
    }

    const selectItemBrandName = (item) => {
        setSelectedItemBrandName(item);
        toggleItemBrandListModal()
    }

    const handleCheckbox1Change = () => {
        setFromClient(true);
        setFromThoughtWin(false);
      };
    
      const handleCheckbox2Change = () => {
        setFromClient(false);
        setFromThoughtWin(true);
      };


    return (
        <SafeAreaView style={styles.baseContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back" size={ms(27)} color="#000" />
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTextStyle}>Assign Inventory Items</Text>
                </View>
            </View>
            <View style={styles.separatorStyle} />

            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <View style={styles.secondaryContainer}>
                    <TouchableOpacity style={styles.itemContainer} onPress={() => toggleModal()}>
                        <Text style={styles.selectItemTextStyle}>{selectedItem ? selectedItem : 'Select Item'}</Text>
                        <AntDesign name="right" size={ms(20)} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}> Item Brand Name :</Text>
                    <TouchableOpacity style={styles.brandNameContainer} onPress={() => toggleItemBrandListModal()}>
                        <Text numberOfLines={1} style={styles.selectItemBrandNameTextStyle}>{selectedItemBrandName ? selectedItemBrandName : 'Select Brand'}</Text>
                        <AntDesign name="down" size={20} color="#000" />
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
                        <TouchableOpacity style={styles.itemContainer} onPress={() => toggleClientListModal()}>
                            <Text style={styles.selectItemTextStyle}>{selectedClient ? selectedClient : 'Select Client'}</Text>
                            <AntDesign name="right" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>
                }

                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalHeaderContainer} onPress={() => toggleModal()}>
                            <AntDesign name="closecircleo" size={ms(27)} color="#000" />
                        </TouchableOpacity>
                        <View style={styles.modalHeaderSeparator} />

                        <InventoryItemListComponent selectedItem={selectItem} />
                    </View>
                </Modal>

                <Modal isVisible={isClientListModalVisible}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalHeaderContainer} onPress={() => toggleClientListModal()}>
                            <AntDesign name="closecircleo" size={30} color="#000" />
                        </TouchableOpacity>
                        <View style={styles.modalHeaderSeparator} />

                        <ClientListComponent selectedItem={selectClientItemData} />
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

                <View style={styles.inputContainer}>
                    <Text style={styles.textTitle}>Project Owner : </Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            value={projectOwner}
                            placeholder="Enter Owner Name"
                            placeholderTextColor="#003f5c"
                            onChangeText={(text) => setProjectOwner(text)}
                        />
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