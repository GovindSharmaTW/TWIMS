import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { CardListComponent, InputText, ModalComponent, SearchInputText } from '../../components';
import database from '@react-native-firebase/database';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ms } from '../../utils/scaling-utils';
import { Colors } from '../../constants';
import { checkIsEmpty } from '../../utils';
import Toast from 'react-native-simple-toast';

const ShowInventoryDetailsScreen = (props) => {

    const [assignedInventoryData, setAssignedInventoryData] = useState('');
    const [cardListData, setCardListData] = useState([]);
    const [isFilterListModalVisible, setIsFilterListModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [projectOwner, setProjectOwner] = useState('');
    const [developer, setDeveloper] = useState('');
    const [searchItem, setSearchItem] = useState('');
    const [clientName, setClientName] = useState('');

    function searchData(query) {

        const searchResults = assignedInventoryData.filter(item =>
            item.label.toLowerCase().includes(query.toLowerCase()) ||
            item.projectOwner.toLowerCase().includes(query.toLowerCase()) ||
            item.item.toLowerCase().includes(query.toLowerCase()) ||
            item.clientName.toLowerCase().includes(query.toLowerCase())
        );

        setCardListData(searchResults);
    }

    const clearStates = () => {
        setIsFilterListModalVisible(false);
        setDeveloper('');
        setProjectOwner('');
        setSearchItem('');
        setClientName('');
    }

    const filterList = async () => {
        const searchResults = await assignedInventoryData.filter((item, index) => {

            return (
                checkIsEmpty(developer) && item.label.toLowerCase().includes(developer.toLowerCase()) ||
                checkIsEmpty(projectOwner) && item.projectOwner.toLowerCase().includes(projectOwner.toLowerCase()) ||
                checkIsEmpty(searchItem) && item.item.toLowerCase().includes(searchItem.toLowerCase()) ||
                checkIsEmpty(clientName) && item.clientName.toLowerCase().includes(clientName.toLowerCase())
            )
        }
        );


        if (searchResults.length > 0) {
            setCardListData(searchResults);
            clearStates();
        }
        else {
            Toast.show("No Data Found");
            clearStates();
        }
    }

    useEffect(() => {

        const assignedInventoryRef = database().ref('/AssignedInventoryDetails');

        const unsubscribeAssignedInventoryDetails = assignedInventoryRef.on('value', snapshot => {
            const data = snapshot?.val();


            if (data) {
                const tempData = Object.keys(data).map((key, index) => {
                    return {
                        label: data[key].developer,
                        value: index,
                        item: data[key].item,
                        itemBrandName: data[key].itemBrandName,
                        fromClient: data[key].fromClient,
                        fromThoughtWin: data[key].fromThoughtWin,
                        clientName: data[key].clientName,
                        assignedDate: data[key].assignedDate,
                        projectOwner: data[key].projectOwnerName,
                        imageUrl : data[key].imageUri,
                        assignedSimNumber : data[key].simNumber,
                        assignedSimCompName: data[key].simCompanyName

                    };
                });

                setAssignedInventoryData(tempData);
                setCardListData(tempData);
            }
        });

        return () => {
            unsubscribeAssignedInventoryDetails();
        }
    }, [])

    const getModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>
                <Text style={styles.projOwnerTextStyle}>Project Owner :</Text>
                <InputText
                    onChangeText={setProjectOwner}
                    placeholderText="Enter owner name"
                />

                <Text style={styles.projOwnerTextStyle}>Developer Name :</Text>
                <InputText
                    onChangeText={setDeveloper}
                    placeholderText="Enter developer name"
                />

                <Text style={styles.projOwnerTextStyle}>Item :</Text>
                <InputText
                    onChangeText={setSearchItem}
                    placeholderText="Enter item name"
                />

                <Text style={styles.projOwnerTextStyle}>Client Name :</Text>
                <InputText
                    onChangeText={setClientName}
                    placeholderText="Enter client name"
                />

                <TouchableOpacity style={styles.addBtn} onPress={() => filterList()} >
                    <Text style={styles.saveText}>Search</Text>
                </TouchableOpacity>
            </View>
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

            <View style={styles.scrollViewStyle} bounces={false}>
                <SearchInputText onChangeText={(text) => { setSearchText(text), searchData(text) }} placeholderText={'Search...'} />
                <TouchableOpacity style={styles.filterIconContainer} onPress={() => setIsFilterListModalVisible(!isFilterListModalVisible)}>
                    <MaterialIcons name={'filter-list'} size={ms(35)} color={Colors.primary} />
                </TouchableOpacity>
                <View style={styles.cardListContainer}>
                    <CardListComponent data={cardListData} navigation={props.navigation}/>
                </View>
                <ModalComponent isVisible={isFilterListModalVisible} childComponent={getModalChildComponent()} closeModal={() => setIsFilterListModalVisible(false)} />

            </View>

        </SafeAreaView>

    )
}

export default ShowInventoryDetailsScreen;