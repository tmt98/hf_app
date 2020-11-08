import React from 'react';
import {View} from 'react-native';
import {Text, List, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const ManagerDevice = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button>List Shared</Button>
      <View style={{width: '25%', marginLeft: 15}}>
        <Button
          mode="contained"
          icon="account-plus"
          onPress={() => {
            alert('Add A user');
            navigation.navigate('ManagerDeviceForm');
          }}>
          Add
        </Button>
      </View>
      <View style={{marginTop: 20, marginBottom: 20}}>
        <List.Item
          title="tranminhtai1998@gmail.com"
          description={`Sensor share: pH - Temperature - Humidity`}
          left={() => <List.Icon icon="account-circle-outline" />}
          right={() => <List.Icon icon="account-edit" />}
          onPress={() => {
            alert('Edit');
          }}
        />
        <List.Item
          title="tranminhtai1998@gmail.com"
          description={`Sensor share: pH - Temperature - Humidity`}
          left={() => <List.Icon icon="account-circle-outline" />}
          right={() => <List.Icon icon="account-edit" />}
          onPress={() => {
            alert('Edit');
          }}
        />
        <List.Item
          title="tranminhtai1998@gmail.com"
          description={`Sensor share: pH - Temperature - Humidity`}
          left={() => <List.Icon icon="account-circle-outline" />}
          right={() => <List.Icon icon="account-edit" />}
          onPress={() => {
            alert('Edit');
          }}
        />
      </View>
    </View>
  );
};

export default ManagerDevice;
