import { useEffect, useState, memo } from 'react';
import { View, TouchableOpacity, } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ms } from '../../utils/scaling-utils';
import { Colors } from '../../constants';

export const ModalComponent = ({ isVisible, childComponent, closeModal }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        setIsModalVisible(isVisible);
    }, [isVisible])

    return (
        <Modal isVisible={isModalVisible}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.modalHeaderContainer} onPress={() => closeModal()}>
                    <AntDesign name="closecircleo" size={ms(27)} color={Colors.black} />
                </TouchableOpacity>
                <View style={styles.modalHeaderSeparator} />
                {childComponent}
            </View>
        </Modal>
    )
}