import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle user state changes
  function onAuthStateChanged(user) {

    if (user) {
      const parsedData = JSON.stringify(user);

      AsyncStorage.setItem("userData", parsedData);
    }

  }

  useEffect(() => {
    AsyncStorage.getItem("userData")
      .then((res) => console.log("TT01 login useeffect res", res))
      .catch((err) => console.log("TT01 login useefect err", err))
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


  const handleLogin = (email, password) => {

    if ((email !== '' && email !== undefined) && (password !== '' && password !== undefined)) {
      auth()
        .signInWithEmailAndPassword(email.toLowerCase(), password.toLowerCase())
        .then(() => {
          props.navigation.navigate("Home");
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }

          if (error.code === 'auth/invalid-credential') {
            Alert.alert("Invalid credentials!");
          }
        });
    }
    else {
      Alert.alert("Please enter email and password");
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          value={email}
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={password}
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          // secureTextEntry={true}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin(email, password)}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;