import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Switch, TextInput, Text, Button} from 'react-native-paper';

const ManagerDeviceForm = () => {
  const [iduser, setIdUser] = useState('');
  const [ispHSwitchOn, setIspHSwitchOn] = useState(false);
  const [isTempSwitchOn, setTempIsSwitchOn] = useState(false);
  const [isHumiditySwitchOn, setHumidityIsSwitchOn] = useState(false);
  const onpHToggleSwitch = () => setIspHSwitchOn(!ispHSwitchOn);
  const onTempToggleSwitch = () => setTempIsSwitchOn(!isTempSwitchOn);
  const onHumidityToggleSwitch = () =>
    setHumidityIsSwitchOn(!isHumiditySwitchOn);

  return (
    <View style={{padding: 60}}>
      <Button icon="account">Add User To Device</Button>
      <TextInput
        label="ID User"
        value={iduser}
        mode="outlined"
        onChangeText={(value) => {
          setIdUser(value);
        }}
      />
      <Text></Text>
      <View>
        <View>
          <Text style={{width: '50%'}}>pH:</Text>
          <Switch
            value={ispHSwitchOn}
            onValueChange={onpHToggleSwitch}
            style={{width: '50%'}}
          />
        </View>
      </View>
      <Text></Text>
      <View>
        <View>
          <Text style={{width: '50%'}}>Tempetura:</Text>
          <Switch
            value={isTempSwitchOn}
            onValueChange={onTempToggleSwitch}
            style={{width: '50%'}}
          />
        </View>
      </View>
      <Text></Text>
      <View>
        <View>
          <Text style={{width: '50%'}}>Humidity:</Text>
          <Switch
            value={isHumiditySwitchOn}
            onValueChange={onHumidityToggleSwitch}
            style={{width: '50%'}}
          />
        </View>
      </View>
      <Text></Text>
      <Button
        mode="contained"
        onPress={() => {
          alert('Add Success');
        }}>
        Add
      </Button>
    </View>
  );
};

export default ManagerDeviceForm;
