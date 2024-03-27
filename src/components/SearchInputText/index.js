import { useState } from "react";
import { TextInput, View } from "react-native";
import { styles } from "./style";
import { Colors } from "../../constants";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ms } from "../../utils/scaling-utils";

export const SearchInputText = ({ onChangeText, placeholderText, disable }) => {

    const [value, setValue] = useState('');

    return (
        <View style={styles.inputContainerStyle}>
            <AntDesign name="search1" size={ms(27)} color={Colors.primary} />
            <TextInput
                style={styles.inputText}
                value={value}
                placeholder={placeholderText}
                placeholderTextColor={Colors.gray}
                onChangeText={(text) => { setValue(text); onChangeText(text) }}
                disable={disable}
            />
        </View>
    )
}