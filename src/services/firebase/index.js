import database from '@react-native-firebase/database';

export const addNewEmployee = (employeeId, projectOwner, email, phone) => {

    const newReference = database().ref('/Employee').push();

    console.log("TT01 savedata function called", employeeId, projectOwner, email, phone);
    if (employeeId, projectOwner, email, phone) {
        const res = newReference
            .set({
                empId: employeeId,
                name: projectOwner,
                email: email,
                phone: phone
            }).then((e) => {
                alert('Data added successfully', e)
                console.log("response====", e)
                return "success"
            }).catch((err) => console.log('firebase error is', err))


        console.log("response====", e)
        res.then((resp) => {
            console.log('responce inside then', resp)
        }).catch((err) => console.log('firebase error inside is', err));

    }
    else {
        alert('Please insert valid data !');
        return 'failure';

    }
}

export const addNewItem = (itemId, itemName) => {

    const newReference = database().ref('/InventoryItems').push();

    console.log("TT01 add new item function called", itemId, itemName);

    if (itemId, itemName) {
        newReference
            .set({
                itemId: itemId,
                itemName: itemName
            }).then(() => {
                alert('New item added successfully')
                return "success"
            }).catch((err) => console.log('firebase error is', err))
    }
    else {
        alert('Please insert valid data !');
        return 'failure';

    }
}

export const addNewBrandName = (brandId, brandName) => {

    const newReference = database().ref('/InventoryItemBrandName').push();

    console.log("TT01 add new item function called", brandId, brandName)

    if (brandId, brandName) {

        newReference
            .set({
                brandId: brandId,
                brandName: brandName
            }).then(() => {
                alert('New brand name added successfully')
                return "success"
            }).catch((err) => console.log('firebase error is', err))
    }
    else {
        alert('Please insert valid data !');
        return 'failure';

    }
}

export const addNewClient = (clientId, clientName) => {

    const newReference = database().ref('/Clients').push();


    if (clientId, clientName) {

        newReference
            .set({
                clientId: clientId,
                clientName: clientName
            }).then(() => {
                alert('New Client added successfully')
                return "success"
            }).catch((err) => console.log('firebase error is', err))
    }
    else {
        alert('Please insert valid data !');
        return 'failure';

    }
}