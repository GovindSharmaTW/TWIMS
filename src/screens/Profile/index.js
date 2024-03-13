import React, { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {

    const navigation = useNavigation();

    const [userEmail, setUserEmail] = useState('');

    const logout = () => {

        auth().signOut()
            .then(() => {
                // Sign-out successful.
                AsyncStorage.removeItem("userData");
                navigation.navigate("Login");
            })
            .catch((error) => {
                // An error happened.
                Alert.alert('Something went wrong!', error);
            });
    };

    useEffect(() => {
        AsyncStorage.getItem("userData").then((res) => {

            const parsedUserData = JSON.parse(res);

            setUserEmail(parsedUserData.email);

        }).catch((err) => {
            console.log("TT01 asyncstorage err", err);
        });
    }, [])

    return (
        <SafeAreaView style={styles.baseContainer}>
            <View style={styles.headerContainer}>
                {/* <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back" size={ms(27)} color="#000" />
                </TouchableOpacity> */}

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

                <Text style={styles.profileTextStyle}>{userEmail}</Text>

                <TouchableOpacity style={styles.logoutBtn} onPress={() => logout()}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>

    )
}
