import React, {useState, useEffect} from 'react';
import {Button} from 'react-native';
import {Button as ButtonPaper, Avatar} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
import Main from './Main';
import SignUp from './SignUp';

import MyDeviceDetail from './Device/MyDeviceDetail';
import ManagerDevice from './Device/ManagerDevice';

import auth from '@react-native-firebase/auth';

const authScreens = {
  Login: Login,
  SignUp: SignUp,
};
const userScreens = {
  Main: Main,
  MyDeviceDetail: MyDeviceDetail,
  ManagerDevice: ManagerDevice,
};
const Stack = createStackNavigator();
const Navigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAutoStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAutoStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.entries({
          ...(user ? userScreens : authScreens),
        }).map(([name, component]) =>
          user ? (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={{
                headerRight: () => (
                  <Avatar.Icon
                    size={45}
                    icon="account-circle"
                    style={{margin: 3}}
                  />
                ),
              }}
            />
          ) : (
            <Stack.Screen key={name} name={name} component={component} />
          ),
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
