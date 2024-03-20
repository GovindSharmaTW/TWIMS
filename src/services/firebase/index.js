import database from '@react-native-firebase/database';
import { assignedItemDetailsRef, clientsRef, employeeRef, inventoryItemsBrandNameRef, inventoryItemsRef } from './firebaseConstants';

const getRef = (type) => {
    switch (type) {
        case 'addEmployee':
            return employeeRef;
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