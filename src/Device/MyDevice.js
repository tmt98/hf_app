import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import {List} from 'react-native-paper';
const MyDevice = () => {
  const navigation = useNavigation();

  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ScrollView>
      <View style={{width: '100%'}}>
        <List.Section>
          <List.Subheader>My device</List.Subheader>
          <List.Item
            title="May1"
            titleStyle={{fontWeight: 'bold'}}
            description={`ID Device: 123 - Battery 10% - Location: 111.222.333\nTime Start: 01/01/2020`}
            left={() => <List.Icon icon="car-defrost-rear" />}
            onPress={() => {
              console.log('RUN OK');
              navigation.navigate('MyDeviceDetail');
            }}
          />
          <List.Item
            title="May2"
            left={() => <List.Icon icon="car-defrost-rear" />}
          />
          <List.Item
            title="May3"
            left={() => <List.Icon icon="car-defrost-rear" />}
          />
          <List.Item
            title="May3"
            left={() => <List.Icon icon="car-defrost-rear" />}
          />
          <List.Item
            title="May3"
            left={() => <List.Icon icon="car-defrost-rear" />}
          />
        </List.Section>
      </View>
    </ScrollView>
  );
};

export default MyDevice;
