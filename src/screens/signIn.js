import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Icon } from 'react-native-elements';

import Field from '../components/fields';
import Http from '../components/http';

import { signInStyles } from '../styles/screens/signIn';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const SignIn = ({ navigation }) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  let passInput = '';

  const submitSignIn = async () => {
    setLoading(true);
    if (!Field.checkFields([user.email, user.password])) {
      Alert.alert('Empty Field', 'Please, fill the fields');
    } else {
      const data = await Http.send('POST', '/api/users/signin', user);

      if (!data) {
        Alert.alert('Fatal Error', 'No data from server...');
      } else {
        switch (data.typeResponse) {
          case 'Success':
            await AsyncStorage.setItem('user', JSON.stringify(data.body[0]));
            navigation.navigate('Home', data.body[0]);
            break;

          case 'Fail':
            data.body.errors.forEach((element) => {
              ToastAndroid.showWithGravity(
                element.text,
                ToastAndroid.SHORT,
                ToastAndroid.TOP
              );
            });
            break;

          default:
            Alert.alert(data.typeResponse, data.message);
            break;
        }
      }
    }

    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={signInStyles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/pochita.png')}
          />
        </View>
        <Text style={signInStyles.title}>Sign In</Text>
        <Text style={signInStyles.subtitle}>Welcome Again to Pochita!</Text>
        <View>
          <View style={signInStyles.section}>
            <Icon name="at-outline" color="gray" type="ionicon" size={20} />
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              keyboardType={'email-address'}
              blurOnSubmit={false}
              style={signInStyles.textInput}
              autoFocus
              onChangeText={(email) => setUser({ ...user, email: email })}
              onSubmitEditing={() => passInput.focus()}
            />
          </View>
          <View style={signInStyles.section}>
            <Icon
              name="lock-closed-outline"
              color="gray"
              type="ionicon"
              size={20}
            />
            <TextInput
              ref={(input) => (passInput = input)}
              placeholder="Password"
              autoCapitalize="none"
              style={signInStyles.textInput}
              secureTextEntry
              onChangeText={(password) =>
                setUser({ ...user, password: password })
              }
              onSubmitEditing={submitSignIn}
            />
          </View>
        </View>

        <MainButton onPress={submitSignIn}>Sign In</MainButton>
        {/* <TouchableOpacity onPress={submitSignIn} style={signInStyles.signIn}>
          {loading ? (
            <ActivityIndicator size="small" color="#00ff00" />
          ) : (
            <Text style={signInStyles.textSignIn}>Sign In</Text>
          )}
        </TouchableOpacity> */}
        <View style={signInStyles.signUp}>
          <Text style={signInStyles.textSignUp}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={[
                signInStyles.textSignUp,
                { color: Colors.quinary, marginLeft: 3 },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    // borderRadius: (Dimensions.get('window').width * 0.5) / 2,
    // borderWidth: 3,
    // borderColor: Colors.quaternary,
    // overflow: 'hidden',
    marginHorizontal: Dimensions.get('window').width / 5.5,
    marginVertical: Dimensions.get('window').height / 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SignIn;
