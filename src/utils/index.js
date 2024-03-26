export const checkIsEmpty = (...item) => {

    let isValid = false;

    if (item.length > 0) {
        item.map((value) => {

            const trimmedItem = value.trim();

            if (trimmedItem !== null && trimmedItem !== undefined && trimmedItem !== "") {
                isValid = true;
            }
            else {
                isValid = false;
                return;
            }
        })
    }
    else {
        return false;
    }

    return isValid;

}

export const getCurrentDate = () => {
    const currentDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    return currentDate;
}