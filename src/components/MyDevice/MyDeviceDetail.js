import React, {useState, useEffect} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {Button, Card, Avatar} from 'react-native-paper';
import {LineChart} from 'react-native-chart-kit';
import {useNavigation} from '@react-navigation/native';

const fake_sensor1 = [
  {id: 'ph', name: 'pH', icon: 'ruler', unit: 'pH'},
  {
    id: 'temperature',
    name: 'Temperature',
    icon: 'temperature-celsius',
    unit: '*C',
  },
  {id: 'humidity', name: 'Humidity', icon: 'cloud', unit: '%'},
];
const fake_sensor2 = [
  {id: 'ph', name: 'pH', icon: 'ruler', unit: 'pH'},
  {
    id: 'temperature',
    name: 'Temperature',
    icon: 'temperature-celsius',
    unit: '*C',
  },
];
const fake_sensor3 = [
  {
    id: 'temperature',
    name: 'Temperature',
    icon: 'temperature-celsius',
    unit: '*C',
  },
  {id: 'humidity', name: 'Humidity', icon: 'cloud', unit: '%'},
];
const fake_sensor4 = [
  {id: 'ph', name: 'pH', icon: 'ruler', unit: 'pH'},
  {id: 'humidity', name: 'Humidity', icon: 'cloud', unit: '%'},
];

const MyDeviceDetail = ({route}) => {
  const navigation = useNavigation();
  const {idsensor, sensor} = route.params;

  var useSensor;
  if (sensor === 'sensor1') useSensor = fake_sensor1;
  else if (sensor === 'sensor2') useSensor = fake_sensor2;
  else if (sensor === 'sensor3') useSensor = fake_sensor3;
  else useSensor = fake_sensor4;

  const ListSensor = useSensor.map((sensor, index) => {
    return (
      <View key={index}>
        <Button icon={sensor.icon}>{sensor.name}</Button>
        <LineChart
          data={{
            labels: [
              '11:10',
              '11:25',
              '11:40',
              '11:55',
              '12:10',
              '12:25',
              '11:10',
              '11:25',
              '11:40',
              '11:55',
              '12:10',
              '12:25',
              '11:10',
              '11:25',
              '11:40',
              '11:55',
              '12:10',
              '12:25',
              '11:10',
              '11:25',
              '11:40',
              '11:55',
              '12:10',
              '12:25',
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix={sensor.unit}
          yAxisInterval={1} // optional, defaults to 1
          verticalLabelRotation={50}
          fromZero={true}
          yLabelsOffset={1}
          chartConfig={{
            backgroundColor: '#F94C7A',
            backgroundGradientFrom: '#F94C7A',
            backgroundGradientTo: '#F94C7A',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '3',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          style={{
            marginVertical: 0,
            borderRadius: 0,
          }}
        />
      </View>
    );
  });

  return (
    <View>
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row'}}>
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
        <View>
          <Button
            icon="account-tie"
            mode="contained"
            onPress={() => {
              navigation.navigate('ManagerDevice', {
                idsensor: idsensor,
                sensor: sensor,
              });
            }}>
            Manager
          </Button>
        </View>
        <View>{ListSensor}</View>
      </ScrollView>
    </View>
  );
};

export default MyDeviceDetail;
