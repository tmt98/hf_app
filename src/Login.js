import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handdleLogin = () => {
    console.log('HANDLE LOGIN');
    if (email == '' || password == '') {
      alert('Please fill email & password');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Signed In!');
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(value) => {
          setEmail(value);
        }}
        value={email}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={(value) => {
          setPassword(value);
        }}
        value={password}
        style={styles.textInput}
      />
      <Text />
      <Button
        title="                    Login                   "
        style={styles.button}
        onPress={handdleLogin}
      />
      <Text />
      <Text />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    // borderColor: 'blue',
    // borderWidth: 1,
    marginTop: 8,
    // borderRadius: 5,
  },
  button: {
    marginTop: 8,
    paddingTop: 8,
  },
  signUpButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Login;
