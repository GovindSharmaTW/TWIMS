import database from '@react-native-firebase/database';

export const addNewEmployee = (employeeId, projectOwner, email, phone) => {

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

export const addNewItem = (itemId, itemName) => {

    return new Promise((resolve, reject) => {

        const newReference = database().ref('/InventoryItems').push();

        if (itemId, itemName) {
            newReference
                .set({
                    itemId: itemId,
                    itemName: itemName
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

export const addNewBrandName = (brandId, brandName) => {

    return new Promise((resolve, reject) => {

        const newReference = database().ref('/InventoryItemBrandName').push();

        if (brandId, brandName) {

            newReference
                .set({
                    brandId: brandId,
                    brandName: brandName
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

export const addNewClient = (clientId, clientName) => {

    return new Promise((resolve, reject) => {

        const newReference = database().ref('/Clients').push();

        if (clientId, clientName) {

            newReference
                .set({
                    clientId: clientId,
                    clientName: clientName
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

export const addAssignedInventoryItemDetail = (...data) => {

    const [selectedItem, selectedItemBrandName, fromClient, fromThoughtWin, selectedClient, projectOwner] = data;

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