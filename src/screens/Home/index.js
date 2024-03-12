import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

const HomeScreen = (props) => {
    return (
        <SafeAreaView style={styles.baseContainer}>
            <View>
                <Text style={styles.headerTextStyle}>Home Screen</Text>
            </View>

            <View style={styles.separatorStyle} />

            <View style={styles.secondaryContainer}>

                <TouchableOpacity style={styles.buttonStyle} onPress={()=> props.navigation.navigate('AssignInventoryItems')}>
                    <Text style={styles.textStyle}>Assign Items</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={()=> props.navigation.navigate('ShowInventoryDetails')}>
                    <Text style={styles.textStyle}>Show Inventory Details</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={()=> props.navigation.navigate('Profile')}>
                    <Text style={styles.textStyle}>Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default HomeScreen;