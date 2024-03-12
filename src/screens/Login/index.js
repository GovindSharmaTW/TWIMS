import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { styles } from './style';
const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log("onAuthStateChanged function called", user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    console.log("Please Login");
  }

  const handleLogin = ({ email, password }) => {
    // Add your login logic here
     props.navigation.navigate("Home");

    // console.log("TT01 handle Login function called", email, password);
    
    // if ((email !== '' && email !== undefined) && ( password !== '' && password !== undefined )) {
    //   auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then(() => {
    //       console.log('User account created & signed in!');
    //     })
    //     .catch(error => {
    //       if (error.code === 'auth/email-already-in-use') {
    //         console.log('That email address is already in use!');
    //       }

    //       if (error.code === 'auth/invalid-email') {
    //         console.log('That email address is invalid!');
    //       }

    //       console.error(error);
    //     });
    // }
    // else
    // {
    //   Alert.alert("Please write email and password");
    // }
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
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={password}
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin(email, password)}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;