import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ms } from '../../utils/scaling-utils';

export const ProfileScreen = (props) => {
    return (
        <SafeAreaView style={styles.baseContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back" size={ms(27)} color="#000" />
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTextStyle}>Profile screen</Text>
                </View>
            </View>
            <View style={styles.separatorStyle} />

            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <Image
                    source={require('../../assets/images/profile.png')}
                    resizeMode='contain'
                    style={styles.profileImageContainer}
                />

                <Text style={styles.profileTextStyle}>Govind Sharma</Text>

                <TouchableOpacity style={styles.saveBtn} >
                    <Text style={styles.saveText}>Logout</Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>

    )
}
