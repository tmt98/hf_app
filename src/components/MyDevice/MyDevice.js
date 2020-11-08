import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import auth from '@react-native-firebase/auth';
import {List} from 'react-native-paper';

// const data = [
//   {sensor: 'sensor1', idsensor: '111', location: '111.222.333'},
//   {sensor: 'sensor2', idsensor: '222', location: '123.233.333'},
//   {sensor: 'sensor3', idsensor: '333', location: '223.333.344'},
//   {sensor: 'sensor4', idsensor: '444', location: '233.333.433'},
// ];
const MyDevice = () => {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    (async function () {
      const result = await axios(
        'http://192.168.1.10:9999/api/device/getmydevice',
      );
      console.log(result.data);
      setData1(result.data);
    })();
  }, []);

  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState(null);

  const ListDevice = data1.map((device, index) => {
    return (
      <List.Item
        key={device.sensor}
        title={device.sensor}
        titleStyle={{fontWeight: 'bold'}}
        description={`ID Device: ${device.idsensor} - Location: ${device.location}\nTime Start: 01/01/2020`}
        left={() => <List.Icon icon="car-defrost-rear" />}
        onPress={() => {
          navigation.navigate('MyDeviceDetail', {
            idsensor: device.idsensor,
            sensor: device.sensor,
          });
        }}
      />
    );
  });
  return (
    <ScrollView>
      <View style={{width: '100%'}}>
        <List.Section>
          <List.Subheader>My device</List.Subheader>
          {ListDevice}
        </List.Section>
      </View>
    </ScrollView>
  );
};

export default MyDevice;
