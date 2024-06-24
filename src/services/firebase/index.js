import database from '@react-native-firebase/database';
import { assignedItemDetailsRef, branchRef, clientsRef, developerRef, employeeRef, inventoryItemsBrandNameRef, inventoryItemsRef, projectOwnerRef, simCompNameRef, simNumberRef } from './firebaseConstants';

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
        case 'addSimNumber':
            return simNumberRef;
        case 'addSimCompName':
            return simCompNameRef;
        case 'addBranch':
            return branchRef;

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