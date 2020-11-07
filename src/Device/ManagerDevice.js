import React from 'react';
import {View} from 'react-native';
import {Text, List, Button} from 'react-native-paper';

const ManagerDevice = () => {
  return (
    <View>
      <Button>List Shared</Button>
      <List.Item
        title="tranminhtai1998@gmail.com"
        description={`Sensor share: pH - Temperature - Humidity`}
        left={() => <List.Icon icon="account-circle-outline" />}
        right={() => <List.Icon icon="delete" />}
        onPress={() => {
          alert('Edit');
        }}
      />
      <List.Item
        title="tranminhtai1998@gmail.com"
        description={`Sensor share: pH - Temperature - Humidity`}
        left={() => <List.Icon icon="account-circle-outline" />}
        right={() => <List.Icon icon="delete" />}
        onPress={() => {
          alert('Edit');
        }}
      />
      <List.Item
        title="tranminhtai1998@gmail.com"
        description={`Sensor share: pH - Temperature - Humidity`}
        left={() => <List.Icon icon="account-circle-outline" />}
        right={() => <List.Icon icon="delete" />}
        onPress={() => {
          alert('Edit');
        }}
      />
    </View>
  );
};

export default ManagerDevice;
