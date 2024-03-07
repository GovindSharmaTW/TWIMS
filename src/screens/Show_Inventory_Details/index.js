import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Modal from "react-native-modal";
import { screenHeight } from '../../constants/screenConstants';
import { InventoryItemListComponent } from '../../components/InventoryItemListComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import { ClientListComponent } from '../../components/ClientListComponent';

const ShowInventoryDetailsScreen = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [isClientListModalVisible, setIsClientListModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null);

    const [fromClient, setFromClient] = useState(false);
    const [fromThoughtWin, setFromThoughtWin] = useState(false);
    const [searchText, setSearchText] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleClientListModal = () => {
        setIsClientListModalVisible(!isClientListModalVisible)
    };

    const selectItem = (item) => {
        setSelectedItem(item);
        toggleModal()
    }

    const selectClientItemData = (item) => {
        setSelectedClient(item);
        toggleClientListModal()
    }

    return (
        <SafeAreaView style={styles.baseContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="#000" />
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTextStyle}>Show Inventory Details</Text>
                </View>
            </View>
            <View style={styles.separatorStyle} />

            <ScrollView style={styles.scrollViewStyle}>
                <View style={styles.container}>
                    <Feather name="search" size={24} color="#203060" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor="#aaa"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>

            </ScrollView>

        </SafeAreaView>

    )
}

export default ShowInventoryDetailsScreen;