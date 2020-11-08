import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {List} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';

const data = [
  {sensor: 'sensor1', idsensor: '111', location: '111.222.333', owner: 'huy'},
  {sensor: 'sensor2', idsensor: '222', location: '123.233.333', owner: 'huy'},
  {sensor: 'sensor3', idsensor: '333', location: '223.333.344', owner: 'nhut'},
  {sensor: 'sensor4', idsensor: '444', location: '233.333.433', owner: 'nhut'},
];

const SharedDevice = () => {
  const navigation = useNavigation();

  const ListDevice = data.map((device, index) => {
    return (
      <List.Item
        key={device.sensor}
        title={device.sensor}
        titleStyle={{fontWeight: 'bold'}}
        description={`ID Device: ${device.idsensor} - Location: 111.222.333\nTime Start: 01/01/2020 - Owner: ${device.owner}`}
        left={() => <List.Icon icon="car-defrost-rear" />}
        onPress={() => {
          navigation.navigate('SharedDeviceDetail', {
            idsensor: device.idsensor,
            sensor: device.sensor,
            owner: device.owner,
          });
        }}
      />
    );
  });
  return (
    <>
      <ScrollView>
        <View style={{width: '100%'}}>
          <List.Section>
            <List.Subheader>Shared device</List.Subheader>
            {ListDevice}
          </List.Section>
        </View>
      </ScrollView>
    </>
  );
};

export default SharedDevice;
