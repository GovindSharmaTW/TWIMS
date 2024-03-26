import database from '@react-native-firebase/database';
import { assignedItemDetailsRef, clientsRef, developerRef, employeeRef, inventoryItemsBrandNameRef, inventoryItemsRef, projectOwnerRef } from './firebaseConstants';

const getRef = (type) => {
    switch (type) {
        case 'addDeveloper':
            return developerRef;
        case 'addProjectOwner':
            return projectOwnerRef;
        case 'addItem':
            return inventoryItemsRef;
        case 'addItemBrandName':
            return inventoryItemsBrandNameRef;
        case 'addClient':
            return clientsRef;
        case 'addAssignedItemsData':
            return assignedItemDetailsRef;

    }
}

export const addNewData = async (params) => {

    console.log("TT01 addNewItem firebase called",params);

    const { data, type } = params;

    return new Promise((resolve, reject) => {

        const newReference = database().ref(getRef(type)).push();

        if (data) {

            newReference
                .set(data).then(() => {
                    alert('new data added successfully');
                    resolve('success');
                }).catch((err) => {
                    alert('Someting went wrong', err);
                    resolve('failure')
                })
        }
        else {

            alert('Please insert valid data !');
            resolve('failure');

        }
    })
}