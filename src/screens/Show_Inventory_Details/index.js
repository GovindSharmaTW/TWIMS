import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { screenHeight } from '../../constants/screenConstants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import { UserListComponent } from '../../components/UserListComponent';

const ShowInventoryDetailsScreen = (props) => {

    const [item, setItem] = useState('-');
    const [clientName, setClientName] = useState(null);
    const [projectOwner, setProjectOwner] = useState('-');
    const [selectedItemBrandName, setSelectedItemBrandName] = useState('-');
    const [fromClient, setFromClient] = useState(false);
    const [fromThoughtWin, setFromThoughtWin] = useState(false);
    const [searchText, setSearchText] = useState('');

    const selectItem = (item) => {
        setSearchText(null);

        if(item)
        {
            setItem(item.item);
            setSelectedItemBrandName(item.brandName);
            setFromClient(item.fromClient);
            setFromThoughtWin(!item.fromClient);
            setProjectOwner(item.name);
            setClientName(item.clientName);
        }
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

                {searchText &&
                    <View style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, maxHeight: screenHeight * 30 / 100, borderWidth: 1, borderColor: '#203060', position: 'absolute', zIndex: 1000, top: screenHeight * 6 / 100, backgroundColor: '#fff', paddingVertical: 10 }}>
                        <UserListComponent searchTerm={searchText} selectedItem={selectItem} />
                    </View>
                }


                <View style={styles.secondaryContainer}>
                    <TouchableOpacity style={styles.itemContainer} >
                        <Text style={styles.selectItemTextStyle}>{item}</Text>
                        <AntDesign name="right" size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}> Item Brand Name :</Text>
                    <TouchableOpacity style={styles.brandNameContainer} >
                        <Text numberOfLines={1} style={styles.selectItemBrandNameTextStyle}>{selectedItemBrandName ? selectedItemBrandName : 'Select Brand'}</Text>
                        <AntDesign name="down" size={20} color="#000" />
                    </TouchableOpacity>
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
                        <TouchableOpacity style={styles.itemContainer} >
                            <Text style={styles.selectItemTextStyle}>{clientName}</Text>
                            <AntDesign name="right" size={20} color="#000" />
                        </TouchableOpacity>
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