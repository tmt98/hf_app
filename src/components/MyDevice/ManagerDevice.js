import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Card, Avatar, List, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

// GET Environment
import env from '../../environment/environment';
const url = env.BASE_URL;

// Fake Data
const fake_data1 = [
  {
    email: 'choisongdong@gmail.com',
    sensor: ['humidity', 'ph', 'temperature'],
  },
  {
    email: 'ronaldo1998@gmail.com',
    sensor: ['humidity', 'ph', 'temperature'],
  },
  {
    email: 'abc9198@gmail.com',
    sensor: ['humidity', 'ph'],
  },
  {
    email: 'taiminhtran1998@gmail.com',
    sensor: ['ph', 'temperature'],
  },
];
const fake_data2 = [
  {
    email: 'choisongdong@gmail.com',
    sensor: ['humidity', 'ph', 'temperature'],
  },
  {
    email: 'ronaldo1998@gmail.com',
    sensor: ['humidity', 'ph', 'temperature'],
  },
];
const fake_data3 = [
  {
    email: 'choisongdong@gmail.com',
    sensor: ['humidity', 'ph', 'temperature'],
  },
];
const fake_data4 = [
  // {
  //   email: 'choisongdong@gmail.com',
  //   sensor: ['humidity', 'ph', 'temperature'],
  // },
];

const ManagerDevice = ({route}) => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const {idsensor, sensor} = route.params;

  useEffect(() => {
    const getG = async () => {
      const result = await axios(url + '/api/device/manager').catch((err) => {
        console.log(err);
      });
      if (result === undefined) {
        setData([]);
      } else {
        setData(result.data);
      }
    };
    getG();
  }, []);

  var useUserShared;
  if (sensor === 'sensor1') useUserShared = fake_data1;
  else if (sensor === 'sensor2') useUserShared = fake_data2;
  else if (sensor === 'sensor3') useUserShared = fake_data3;
  else useUserShared = fake_data4;

  // console.log(useUserShared.length);
  const ListUserShared = data.map((user, index) => {
    return (
      <List.Item
        key={index}
        title={user.email}
        description={`Sensor share: ${user.sensor}`}
        left={() => <List.Icon icon="account-circle-outline" />}
        right={() => <List.Icon icon="account-edit" />}
        onPress={() => {
          navigation.navigate('ManagerDeviceForm', {
            idsensor: idsensor,
            sensor: sensor,
            user: user.email,
            listshare: user.sensor,
          });
        }}
      />
    );
  });

  return (
    <View>
      <View style={{flex: 1, flexDirection: 'row', marginBottom: 66}}>
        <View style={{flext: 0.5, width: '50%'}}>
          <Card.Title
            title={'ID : ' + sensor}
            subtitle="Owner: user1"
            left={() => <Avatar.Icon size={40} icon="access-point" />}
          />
        </View>
        <View style={{width: '50%'}}>
          <Card.Title
            title="100%"
            left={() => <Avatar.Icon size={40} icon="battery" />}
          />
        </View>
      </View>
      <Button>List Shared</Button>
      <View style={{width: '25%', marginLeft: 15}}>
        <Button
          mode="contained"
          icon="account-plus"
          onPress={() => {
            navigation.navigate('ManagerDeviceForm', {
              idsensor: idsensor,
              sensor: sensor,
            });
          }}>
          Add
        </Button>
      </View>
      <View style={{marginTop: 20, marginBottom: 20}}>{ListUserShared}</View>
    </View>
  );
};

export default ManagerDevice;
