import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { styles } from "./style";
import { Colors } from "../../constants";

export const InputText = ({ onChangeText, placeholderText, disable, reset }) => {

    const [value, setValue] = useState('');

    useEffect(() => {
        setValue('');
    }, [reset])

    return (
        <View style={styles.inputContainerStyle}>
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