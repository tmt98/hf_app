import React, {useState} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {List} from 'react-native-paper';

import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import MyDeviceDetail from './MyDeviceDetail';

const SharedDevice = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={{width: '100%'}}>
          <List.Section>
            <List.Subheader>Shared device</List.Subheader>
            <List.Item
              title="May1"
              titleStyle={{fontWeight: 'bold'}}
              description={`ID Device: 123 - Battery 10% - Location: 111.222.333\nTime Start: 01/01/2020 - Owner: tranminhtai1998@gmail.com`}
              left={() => <List.Icon icon="car-defrost-rear" />}
              onPress={() => {
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
    </>
  );
};

export default SharedDevice;
