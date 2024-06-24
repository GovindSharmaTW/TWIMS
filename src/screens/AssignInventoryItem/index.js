import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { DropdownListComponent, ImagePreviewComponent, InputText, ModalComponent } from '../../components';
import CheckBox from '@react-native-community/checkbox';
import database from '@react-native-firebase/database';
import { addNewData } from '../../services/firebase';
import { branchRef, clientsRef, developerRef, inventoryItemsBrandNameRef, inventoryItemsRef, projectOwnerRef, simCompNameRef, simNumberRef } from '../../services/firebase/firebaseConstants';
import { checkIsEmpty, getCurrentDate } from '../../utils';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { ms } from '../../utils/scaling-utils';

const AssignInventoryItemsScreen = () => {

    const [isItemModalVisible, setIsItemModalVisible] = useState(false);
    const [isClientListModalVisible, setIsClientListModalVisible] = useState(false);
    const [isBrandListModalVisible, setIsBrandListModalVisible] = useState(false);
    const [addSimCompNameModalVisible, setAddSimCompNameModalVisible] = useState(false);
    const [isAddSimNumModalVisible, setIsAddSimNumModalVisible] = useState(false);
    const [isAddProOwnerModalVisible, setIsAddProOwnerModalVisible] = useState(false);
    const [isAddDeveloperModalVisible, setIsAddDeveloperModalVisible] = useState(false);
    const [isAddBranchModalVisible, setIsAddBranchModalVisible] = useState(false);
    const [isAddImageModalVisible, setIsAddImageModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedClient, setSelectedClient] = useState('');
    const [simNum, setSimNum] = useState('');
    const [SimCompName, setSimCompName] = useState('');
    const [selectedItemBrandName, setSelectedItemBrandName] = useState('');
    const [branchName, setBranchName] = useState('');
    const [branchState, setBranchState] = useState('');
    const [branchCity, setBranchCity] = useState('');
    const [itemSerialNum, setItemSerialNum] = useState('');
    const [fromClient, setFromClient] = useState(false);
    const [fromThoughtWin, setFromThoughtWin] = useState(false);
    const [projectOwner, setProjectOwner] = useState('');
    const [developer, setDeveloper] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [itemListData, setItemListData] = useState([]);
    const [brandListData, setBrandListData] = useState([]);
    const [simCompanyNameData, setSimCompanyNameData] = useState([]);
    const [clientListData, setClientListData] = useState([]);
    const [developerListData, setDeveloperListData] = useState([]);
    const [projectOwnerListData, setProjectOwnerListData] = useState([]);
    const [simNumListData, setSimNumListData] = useState([]);
    const [branchNameListData, setBranchNameListData] = useState([]);
    const [disableSaveButton, setDisableSaveButton] = useState(false);
    const [disableAddButton, setDisableAddButton] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [imageSource, setImageSource] = useState(null);
    const [resetDropdown, setResetDropdown] = useState(false);
    const [assignedItemImageCollection, setAssignedItemImageCollection] = useState([])
    const [showImagePreview, setShowImagePreview] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

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

    const toggleSimCompanyNameModal = (item) => {
        setAddSimCompNameModalVisible(item === 'Other');
        setSimCompName(item);
    };

    const toggleSimNumModal = (item) => {
        setIsAddSimNumModalVisible(item === 'Other');
        setSimNum(item);
    };

    const toggleProjectOwnerModal = (item) => {
        setIsAddProOwnerModalVisible(item === 'Other');
        setProjectOwner(item);

    };

    const toggleDeveloperModal = (item) => {
        setIsAddDeveloperModalVisible(item === 'Other');
        setDeveloper(item);

    };

    const toggleBranchModal = (item) => {
        setIsAddBranchModalVisible(item === 'Other');
        setBranchName(item);
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

        const simCompanyNameRef = database().ref(simCompNameRef);

        const unsubscribeSimCompName = simCompanyNameRef.on('value', snapshot => {
            const data = snapshot?.val();

            if (data === null || data === undefined) {
                setSimCompanyNameData([{ label: 'Other', value: 'T001' }]);
            }
            else {
                const tempData = Object.keys(data).map(key => {
                    return { label: data[key].simCompanyName, value: data[key].companyId };
                });

                if (tempData.length === Object.keys(data).length) {
                    tempData.push({ label: 'Other', value: 'T001' });
                }
                setSimCompanyNameData(tempData);
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

        const simNumRef = database().ref(simNumberRef);

        const unsubscribeSimNum = simNumRef.on('value', snapshot => {

            const data = snapshot?.val();

            if (data === null || data === undefined) {

                setSimNumListData([{ label: 'Other', value: 'T001' }]);
            }
            else {

                const tempData = Object.keys(data).map(key => {
                    return { label: data[key].simNumber, value: data[key].simId };
                });

                if (tempData.length === Object.keys(data).length) {
                    tempData.push({ label: 'Other', value: 'T001' });
                }

                setSimNumListData(tempData);
            }
        });

        const branchNameRef = database().ref(branchRef);

        const unsubscribebranch = branchNameRef.on('value', snapshot => {

            const data = snapshot?.val();

            if (data === null || data === undefined) {

                setBranchNameListData([{ label: 'Other', value: 'T001' }]);
            }
            else {

                const tempData = Object.keys(data).map((key, index) => {
                    return { label: data[key].branch_name, value: `T00${index}` };
                });

                if (tempData.length === Object.keys(data).length) {
                    tempData.push({ label: 'Other', value: 'T001' });
                }

                setBranchNameListData(tempData);

            }
        });

        return () => {
            unsubscribeProOwner();
            unsubscribeDeveloper();
            unsubscribeClient();
            unsubscribeInventoryItem();
            unsubscribeBrandName();
            unsubscribeSimNum();
            unsubscribeSimCompName();
            unsubscribebranch();
        }
    }, []);

    useEffect(() => {
        if (assignedItemImageCollection.length > 0) {
            setImageSource(assignedItemImageCollection[0].uri);

        }
        else {
            setImageSource(null);
        }
    }, [assignedItemImageCollection])

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

    const saveSimNumber = async () => {

        if (checkIsEmpty(simNum) && simNum !== 'Other') {
            setDisableAddButton(true);

            const type = 'addSimNumber';

            const data = {
                simNumber: simNum
            };

            const params = { data, type };

            const res = await addNewData(params);

            if (res === 'success') {
                setIsAddSimNumModalVisible(false);
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

    const saveSimCompName = async () => {

        if (checkIsEmpty(SimCompName) && SimCompName !== 'Other') {
            setDisableAddButton(true);

            const type = 'addSimCompName';

            const data = {
                simCompanyName: SimCompName
            };

            const params = { data, type };

            const res = await addNewData(params);

            if (res === 'success') {
                setAddSimCompNameModalVisible(false);
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

    const saveBranchData = async () => {

        if (checkIsEmpty(branchName) && checkIsEmpty(branchState) && checkIsEmpty(branchCity) && branchName !== 'Other') {
            setDisableAddButton(true);

            const type = 'addBranch';

            const data = {
                branch_name: branchName,
                branch_state: branchState,
                branch_city: branchCity
            };

            const params = { data, type };

            const res = await addNewData(params);

            if (res === 'success') {
                setIsAddBranchModalVisible(false);
                setDisableAddButton(false);
                setBranchName('');
                setBranchState('');
                setBranchCity('');
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
                assignedDate: getCurrentDate(),
                imageUri: assignedItemImageCollection,
                simCompanyName: SimCompName,
                simNumber: simNum,
                item_serial_num: itemSerialNum,
                branch: branchName

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
                setImageSource(null);
                setResetDropdown(!resetDropdown);
                setDeveloper('');
                setItemSerialNum('');
                setAssignedItemImageCollection([]);
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

    const addSimNumModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>
                <Text style={styles.projOwnerTextStyle}>Number :</Text>
                <InputText
                    onChangeText={setSimNum}
                    placeholderText="Enter number"
                />

                <TouchableOpacity style={styles.addBtn} onPress={() => saveSimNumber()} disabled={disableAddButton}>
                    <Text style={styles.saveText}>Add</Text>
                </TouchableOpacity>
            </View>
        )

    }

    const addSimCompNameModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>
                <Text style={styles.projOwnerTextStyle}>SIM Compnay Name :</Text>
                <InputText
                    onChangeText={setSimCompName}
                    placeholderText="Enter name"
                />

                <TouchableOpacity style={styles.addBtn} onPress={() => saveSimCompName()} disabled={disableAddButton}>
                    <Text style={styles.saveText}>Add</Text>
                </TouchableOpacity>
            </View>
        )

    }

    const addBranchModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>
                <Text style={styles.projOwnerTextStyle}>Branch Name :</Text>
                <InputText
                    onChangeText={setBranchName}
                    placeholderText="Enter branch name"
                />

                <Text style={styles.projOwnerTextStyle}>Branch State :</Text>
                <InputText
                    onChangeText={setBranchState}
                    placeholderText="Enter branch state"
                />

                <Text style={styles.projOwnerTextStyle}>Branch City :</Text>
                <InputText
                    onChangeText={setBranchCity}
                    placeholderText="Enter branch city"
                />

                <TouchableOpacity style={styles.addBtn} onPress={() => saveBranchData()} disabled={disableAddButton}>
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

    const addImageModalChildComponent = () => {
        return (
            <View style={styles.modalSecondaryContainer}>

                <TouchableOpacity onPress={() => openImagePicker()}>
                    <Text style={styles.addImageTextStyle}>Select Image from Gallery</Text>
                </TouchableOpacity>

                <View style={styles.optionSeparatorStyle} />

                <TouchableOpacity onPress={() => handleCameraLaunch()}>
                    <Text style={styles.addImageTextStyle}>Open Camera</Text>
                </TouchableOpacity>

            </View>
        )
    }

    const removeImage = async (data) => {
        await removeImageFromFirebaseStorage(data);

        const filteredData = assignedItemImageCollection.filter((item) => item.id !== data.id);

        setAssignedItemImageCollection(filteredData);
    }

    const showImagePreviewComponent = () => {
        return (
            <ImagePreviewComponent data={assignedItemImageCollection} deletedImage={removeImage} showImagePreview={showImagePreview} showDeleteButton={true} />
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
        else if (isAddImageModalVisible) {
            return addImageModalChildComponent();
        }
        else if (showImagePreview) {
            return showImagePreviewComponent();
        }
        else if (isAddSimNumModalVisible) {
            return addSimNumModalChildComponent();
        }
        else if (addSimCompNameModalVisible) {
            return addSimCompNameModalChildComponent();
        }
        else if (isAddBranchModalVisible) {
            return addBranchModalChildComponent();
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
        else if (isAddImageModalVisible) {
            setIsAddImageModalVisible(false);
        }
        else if (showImagePreview) {
            setShowImagePreview(false);
        }
        else if (addSimCompNameModalVisible) {
            setAddSimCompNameModalVisible(false);
        }
    }

    const saveImageToFirebaseStorage = async (data) => {
        let itemImageCollection = [];

        try {
            const uploadTasks = data.map(async (item, index) => {

                const imageName = 'image_' + Date.now() // Unique name for the image

                const reference = storage().ref(`images/${imageName}`);

                let imageUri = item.uri;

                let uploadUri = imageUri.replace('file:///', '');

                await reference.putFile(uploadUri);

                // Get the download URL of the uploaded image
                const downloadURL = await reference.getDownloadURL();

                itemImageCollection.push({ id: index, uri: downloadURL, ref: imageName });

            });

            await Promise.all(uploadTasks);

            setAssignedItemImageCollection(itemImageCollection);
            setDisableSaveButton(false);
        } catch (error) {
            stopLoaders();

            alert('Error uploading images:', error);
        }
    }

    const handleCameraLaunch = () => {

        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            selectionLimit: 5
        };

        launchCamera(options, async (response) => {

            setAssignedItemImageCollection([]);

            setLoading(true);
            handleModalClose();

            if (!response.didCancel && !response.error) {
                const { assets } = response;

                saveImageToFirebaseStorage(assets);
            }
        });
    }

    const openImagePicker = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            selectionLimit: 5
        };


        launchImageLibrary(options, async (response) => {
            setLoading(true);
            handleModalClose();

            if (!response.didCancel && !response.error) {
                const { assets } = response;
                saveImageToFirebaseStorage(assets);
            }
        });
    }

    const removeImageFromFirebaseStorage = async (item) => {

        const imageName = 'image_' + Date.now() // Unique name for the image

        let imageRef = storage().ref(`images/${item.ref}`);

        imageRef
            .delete()
            .then(() => {
                console.log(`${imageName}has been deleted successfully.`);
            })
            .catch((e) => console.log('error on image deletion => ', e));


    }

    const onLoad = () => {
        setIsImageLoading(false);
        setLoading(false);
    }

    const onError = () => {
        setError(true);
        setIsImageLoading(false);

    }

    const stopLoaders = () => {
        setIsImageLoading(false);
        setLoading(false);
    }

    return (
        <SafeAreaView style={styles.baseContainer}>
            <KeyboardAvoidingView style={styles.keyboardAvoidingViewStyle} behavior='position' keyboardVerticalOffset={ms(50)}>
                <View style={styles.headerContainer}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.headerTextStyle}>Assign Inventory Items</Text>
                    </View>
                </View>
                <View style={styles.separatorStyle} />

                <ScrollView contentContainerStyle={styles.scrollViewStyle}>

                    {loading &&
                        <ActivityIndicator style={styles.primaryLoaderContainer} />
                    }

                    <View style={styles.inputContainer}>
                        <Text style={styles.textTitle}>Item :</Text>
                        <View style={styles.inputView}>
                            <DropdownListComponent data={itemListData} selectedItem={toggleModal} resetSelectedValue={resetDropdown} />
                        </View>
                    </View>

                    {
                        selectedItem !== 'SIM' &&
                        <View style={styles.checkBoxContainer}>
                            <Text style={styles.textTitle}>Item Brand Name :</Text>
                            <TouchableOpacity style={styles.brandNameContainer}>
                                <DropdownListComponent data={brandListData} selectedItem={toggleItemBrandListModal} resetSelectedValue={resetDropdown} />
                            </TouchableOpacity>
                        </View>
                    }


                    {
                        selectedItem === 'SIM' &&
                        <View>
                            <View style={styles.checkBoxContainer}>
                                <Text style={styles.textTitle}>SIM Company Name :</Text>
                                <TouchableOpacity style={styles.brandNameContainer}>
                                    <DropdownListComponent data={simCompanyNameData} selectedItem={toggleSimCompanyNameModal} resetSelectedValue={resetDropdown} />
                                </TouchableOpacity>
                            </View>


                            <View style={styles.checkBoxContainer}>
                                <Text style={styles.textTitle}>Number :</Text>
                                <TouchableOpacity style={styles.brandNameContainer}>
                                    <DropdownListComponent data={simNumListData} selectedItem={toggleSimNumModal} resetSelectedValue={resetDropdown} />
                                </TouchableOpacity>
                            </View>
                        </View>


                    }



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
                                <DropdownListComponent data={clientListData} selectedItem={toggleClientListModal} resetSelectedValue={resetDropdown} />
                            </TouchableOpacity>
                        </View>
                    }

                    <ModalComponent isVisible={isItemModalVisible || isClientListModalVisible || isBrandListModalVisible || isAddProOwnerModalVisible || isAddDeveloperModalVisible || isAddImageModalVisible || showImagePreview || isAddSimNumModalVisible || addSimCompNameModalVisible || isAddBranchModalVisible} childComponent={getModalChildComponent()} closeModal={() => handleModalClose()} />

                    <View style={styles.inputContainer}>
                        <Text style={styles.textTitle}>Project Owner :</Text>
                        <View style={styles.inputView}>
                            <DropdownListComponent data={projectOwnerListData} selectedItem={(item) => toggleProjectOwnerModal(item)} resetSelectedValue={resetDropdown} />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.textTitle}>Branch :</Text>
                        <View style={styles.inputView}>
                            <DropdownListComponent data={branchNameListData} selectedItem={(item) => toggleBranchModal(item)} resetSelectedValue={resetDropdown} />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.textTitle}>Developer :</Text>
                        <View style={styles.inputView}>
                            <DropdownListComponent data={developerListData} selectedItem={(item) => toggleDeveloperModal(item)} resetSelectedValue={resetDropdown} />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.textTitle}>Serial no. :</Text>
                        <View style={styles.inputView}>
                            <InputText
                                onChangeText={setItemSerialNum}
                                placeholderText="Enter serial no."
                            />
                        </View>
                    </View>


                    <View style={styles.imageContainer}>
                        <Text style={styles.textTitle}>Image :</Text>
                        {imageSource ?
                            <View>
                                <View>
                                    {isImageLoading &&
                                        <ActivityIndicator style={styles.imageLoaderStyle} />
                                    }

                                    {error ?
                                        <Text style={styles.textStyle}>Got error while loading the image</Text>
                                        :

                                        <View>
                                            <Image source={{ uri: imageSource }} style={styles.imageStyle} onLoad={onLoad} onError={onError} />

                                            {(assignedItemImageCollection.length > 1 && !isImageLoading && !error) &&
                                                <Text style={styles.imageCountText}>+{assignedItemImageCollection.length - 1}</Text>
                                            }
                                        </View>
                                    }

                                </View>

                                {!isImageLoading && !error &&
                                    <TouchableOpacity onPress={() => setShowImagePreview(true)} >
                                        <Text style={styles.linkText}>Preview image</Text>
                                    </TouchableOpacity>
                                }

                            </View>
                            :
                            <Text style={styles.subHeadingText}> No Image Selected</Text>

                        }
                    </View>


                    <TouchableOpacity style={styles.addImageBtn} onPress={() => setIsAddImageModalVisible(true)}>
                        <Text style={styles.saveText}>Add Image</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.saveBtn} onPress={() => saveAssignedInventoryDetails()} disabled={disableSaveButton}>
                        <Text style={styles.saveText}>Save Data</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>

        </SafeAreaView >

    )
}

export default AssignInventoryItemsScreen;