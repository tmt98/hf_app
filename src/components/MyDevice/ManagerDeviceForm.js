import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Switch, TextInput, Text, Button} from 'react-native-paper';

const ManagerDeviceForm = ({route}) => {
  // Test case
  //

  const [iduser, setIdUser] = useState('');
  const [ispHSwitchOn, setIspHSwitchOn] = useState(false);
  const [isTempSwitchOn, setTempIsSwitchOn] = useState(false);
  const [isHumiditySwitchOn, setHumidityIsSwitchOn] = useState(false);
  const onpHToggleSwitch = () => setIspHSwitchOn(!ispHSwitchOn);
  const onTempToggleSwitch = () => setTempIsSwitchOn(!isTempSwitchOn);
  const onHumidityToggleSwitch = () =>
    setHumidityIsSwitchOn(!isHumiditySwitchOn);

  useEffect(() => {
    if (route.params.user) {
      setIdUser(route.params.user);
      route.params.listshare.map((key, index) => {
        switch (key) {
          case 'ph':
            setIspHSwitchOn(true);
            break;
          case 'temperature':
            setTempIsSwitchOn(true);
            break;
          case 'humidity':
            setHumidityIsSwitchOn(true);
            break;
        }
      });
    }
  }, []);

  return (
    <View style={{padding: 60}}>
      <Button icon="account">
        {route.params.user ? 'Edit Permission' : 'Add User To Device'}
      </Button>
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
