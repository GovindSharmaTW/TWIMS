import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './style';
import { Colors } from '../../constants';

export const DropdownListComponent = ({ data, selectedItem }) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    console.log("TT01 value is",value);

    return (
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: Colors.primary }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setValue(item.value);
                selectedItem(item.label);
                setIsFocus(false);
            }}
        />
    );
};
