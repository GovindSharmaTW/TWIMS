import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './style';
import { Colors } from '../../constants';

export const DropdownListComponent = ({ data, selectedItem, placeholder }) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const handleValueChange = (item) => {
        setValue(item);
        selectedItem(item.label);
        setIsFocus(false);
    };


    return (
        <View>
            {data.length > 0 ?
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
                    valueField="label"
                    placeholder={!isFocus ? placeholder : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    keyboardAvoiding={true}
                    onChange={handleValueChange}
                />
                :
                <View style={[styles.dropdown, styles.emptyDataContainer]}>
                    <ActivityIndicator/>
                </View>
            }
        </View>

    );
};
