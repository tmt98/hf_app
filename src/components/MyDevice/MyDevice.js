import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {Button} from 'react-native-paper';
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
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const MyDevice = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      (async function () {
        const result = await axios(
          'http://192.168.1.3:9999/api/device/getmydevice',
        ).catch((err) => {
          // console.log(err);
        });
        if (result === undefined) {
          setData([]);
        } else setData(result.data);
      })();
      setRefreshing(false);
    });
  });

  useEffect(() => {
    (async function () {
      const result = await axios(
        'http://192.168.1.3:9999/api/device/getmydevice',
      ).catch((err) => {
        // console.log(err);
      });
      if (result === undefined) {
        setData([]);
      } else setData(result.data);
    })();
  }, []);

  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState(null);

  const ListDevice = data.map((device, index) => {
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
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
        <View style={{width: '100%'}}>
          <List.Section>
            <List.Subheader>My device</List.Subheader>
            {ListDevice.length === 0 ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Button mode="contained" onPress={onRefresh}>
                  Press Or Swipe To Refresh
                </Button>
              </View>
            ) : (
              ListDevice
            )}
          </List.Section>
        </View>
      </RefreshControl>
    </ScrollView>
  );
};

export default MyDevice;
