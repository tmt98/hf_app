import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

// GET Environment
import env from '../../environment/environment';
const url = env.BASE_URL;

import {List} from 'react-native-paper';

// const data = [
//   {sensor: 'sensor1', idsensor: '111', location: '111.222.333', owner: 'huy'},
//   {sensor: 'sensor2', idsensor: '222', location: '123.233.333', owner: 'huy'},
//   {sensor: 'sensor3', idsensor: '333', location: '223.333.344', owner: 'nhut'},
//   {sensor: 'sensor4', idsensor: '444', location: '233.333.433', owner: 'nhut'},
// ];

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const SharedDevice = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      (async function () {
        const result = await axios(url + '/api/device/getshareddevice').catch(
          (err) => {
            // console.log(err);
          },
        );
        if (result === undefined) {
          setData([]);
        } else setData(result.data);
      })();
      setRefreshing(false);
    });
  });

  useEffect(() => {
    (async function () {
      const result = await axios(url + '/api/device/getshareddevice').catch(
        (err) => {
          // console.log(err);
        },
      );
      if (result === undefined) {
        setData([]);
      } else setData(result.data);
    })();
  }, []);

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
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
          <View style={{width: '100%'}}>
            <List.Section>
              <List.Subheader>Shared device</List.Subheader>
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
    </>
  );
};

export default SharedDevice;
