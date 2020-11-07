import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Divider, Text, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>tranminhtai1998@gmail.com</Text>
      <Divider />
      <Button
        icon="logout"
        mode="outlined"
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('Log Out'));
        }}>
        Log Out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
  },
});
export default Profile;
