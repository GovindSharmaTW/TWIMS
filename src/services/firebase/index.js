import database from '@react-native-firebase/database';

export const addNewEmployee = (data) => {
    const { employeeId, projectOwner, email, phone } = data;

    return new Promise((resolve, reject) => {

        const newReference = database().ref('/Employee').push();

        if (employeeId, projectOwner, email, phone) {
            newReference
                .set({
                    empId: employeeId,
                    name: projectOwner,
                    email: email,
                    phone: phone
                }).then(() => {
                    alert('New Employee added successfully');
                    resolve("success");
                }).catch((err) => {
                    resolve('failure');
                })
        }
        else {
            alert('Please insert valid data !');
            resolve('failure')
        }
    })
}

export const addNewItem = (data) => {

    const { itemId, selectedItem } = data;

    return new Promise((resolve, reject) => {

        const newReference = database().ref('/InventoryItems').push();

        if (itemId, selectedItem) {
            newReference
                .set({
                    itemId: itemId,
                    itemName: selectedItem
                }).then(() => {
                    alert('New item added successfully');
                    resolve('success');
                }).catch((err) => {
                    resolve('failure');
                })
        }
        else {
            alert('Please insert valid data !');
            resolve('failure');

        }
    })
}

export const addNewBrandName = (data) => {

    const { itemBrandId, selectedItemBrandName } = data;

    return new Promise((resolve, reject) => {

        const newReference = database().ref('/InventoryItemBrandName').push();

        if (itemBrandId, selectedItemBrandName) {

            newReference
                .set({
                    brandId: itemBrandId,
                    brandName: selectedItemBrandName
                }).then(() => {
                    alert('New brand name added successfully');
                    resolve('success');
                }).catch((err) => {
                    alert('Someting went wrong', err);
                    resolve('failure');
                })
        }
        else {
            alert('Please insert valid data !');
            resolve('failure');

        }
    })
}

export const addNewClient = (data) => {

    const { clientId, selectedClient } = data;

    return new Promise((resolve, reject) => {

        const newReference = database().ref('/Clients').push();

        if (clientId, selectedClient) {

            newReference
                .set({
                    clientId: clientId,
                    clientName: selectedClient
                }).then(() => {
                    alert('New client added successfully');
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

export const addAssignedInventoryItemDetail = (data) => {

    const { selectedItem, selectedItemBrandName, fromClient, fromThoughtWin, selectedClient, projectOwner } = data;

    return new Promise((resolve, reject) => {

        const newReference = database().ref('/AssignedInventoryDetails').push();

        if (selectedItem, selectedItemBrandName, fromClient, fromThoughtWin, selectedClient, projectOwner) {

            newReference
                .set({
                    item: selectedItem,
                    itemBrandName: selectedItemBrandName,
                    fromClient: fromClient,
                    fromThoughtWin: fromThoughtWin,
                    clientName: selectedClient,
                    projectOwnerName: projectOwner
                }).then(() => {
                    alert('Assigned inventory data added successfully');
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