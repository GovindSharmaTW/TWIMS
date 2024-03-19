import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './style';
import { Colors } from '../../constants';

export const DropdownListComponent = ({ data, selectedItem, placeholder }) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


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
                    valueField="value"
                    placeholder={!isFocus ? placeholder : '...'}
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
                :
                <View style={[styles.dropdown, styles.emptyDataContainer]}>
                    <Text style={styles.selectedTextStyle}>No Data Found</Text>
                </View>
            }
        </View>

    );
};
