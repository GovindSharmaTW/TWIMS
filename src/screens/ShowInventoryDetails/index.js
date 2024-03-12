import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import { UserListComponent } from '../../components';
import { Colors } from '../../constants/Colors';

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
                {/* <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="#000" />
                </TouchableOpacity> */}

                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTextStyle}>Show Inventory Details</Text>
                </View>
            </View>
            <View style={styles.separatorStyle} />

            <ScrollView style={styles.scrollViewStyle} bounces={false}>
                <View style={styles.container}>
                    <Feather name="search" size={24} color={Colors.primary} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor="#aaa"
                        value={searchText}
                        onChangeText={setSearchText}
                    />

                </View>

                {searchText &&
                    <View style={styles.userListContainer}>
                        <UserListComponent searchTerm={searchText} selectedItem={selectItem} />
                    </View>
                }


                <View style={styles.secondaryContainer}>
                    <TouchableOpacity style={styles.itemContainer} >
                        <Text style={styles.selectItemTextStyle}>{item}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}> Item Brand Name : </Text>
                    <TouchableOpacity style={styles.brandNameContainer} >
                        <Text numberOfLines={1} style={styles.selectItemBrandNameTextStyle}>{selectedItemBrandName ? selectedItemBrandName : 'Select Brand'}</Text>
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