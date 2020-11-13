import React, {useState, useEffect} from 'react';
import {View, Dimensions, ScrollView, StyleSheet} from 'react-native';
import {Button, Card, Avatar} from 'react-native-paper';
import {LineChart} from 'react-native-chart-kit';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

// GET Environment
import env from '../../environment/environment';
const url = env.BASE_URL;

// Fake data
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
// -->

const MyDeviceDetail = ({route}) => {
  const [data, setData] = useState();
  const navigation = useNavigation();
  const {idsensor, sensor} = route.params;

  // fake choose sensor
  var useSensor;
  if (sensor === 'sensor1') useSensor = fake_sensor1;
  else if (sensor === 'sensor2') useSensor = fake_sensor2;
  else if (sensor === 'sensor3') useSensor = fake_sensor3;
  else useSensor = fake_sensor4;
  //

  useEffect(() => {
    const getDataSensor = async () => {
      const result = await axios(url + '/api/device/mydevice/detail').catch(
        (err) => {
          console.log(err);
        },
      );
      if (result === undefined) {
        setData({});
      } else {
        setData(result.data);
        // console.log(data);
      }
    };
    getDataSensor();
  }, []);

  const ListSensor = useSensor.map((sensor, index) => {
    var chartData;
    if (data != undefined) {
      switch (sensor.id) {
        case 'ph':
          chartData = {
            labels: data.payload.time,
            datasets: {
              data: data.payload.ph,
            },
          };
        case 'temperature':
          chartData = {
            labels: data.payload.time,
            datasets: {
              data: data.payload.temperature,
            },
          };
        case 'humidity':
          chartData = {
            labels: data.payload.time,
            datasets: {
              data: data.payload.humidity,
            },
          };
      }
      console.log(chartData);
      var labels = chartData.labels;
      var data_in_datasets = chartData.datasets.data;

      return (
        <View key={index}>
          <Button icon={sensor.icon}>{sensor.name}</Button>
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: data_in_datasets,
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
    } else {
      return <View key={index}></View>;
    }
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
              title={
                data === undefined ? 'NONE' : Math.ceil(data.battery) + '%'
              }
              left={() => <Avatar.Icon size={40} icon="battery" />}
            />
          </View>
        </View>
        <View style={styles.container2c}>
          <View style={styles.itemW50}>
            <Button
              icon="account-tie"
              mode="contained"
              style={styles.itempM3}
              onPress={() => {
                navigation.navigate('ManagerDevice', {
                  idsensor: idsensor,
                  sensor: sensor,
                });
              }}>
              Manager
            </Button>
          </View>
          <View style={styles.itemW50}>
            <Button
              icon="google-analytics"
              mode="contained"
              color="red"
              style={styles.itempM3}
              onPress={() => {
                navigation.navigate('MyDeviceStatistic', {
                  idsensor: idsensor,
                  sensor: sensor,
                });
              }}>
              Statistic
            </Button>
          </View>
        </View>
        <View>{ListSensor}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container2c: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  itemW50: {
    width: '50%',
  },
  itempM3: {
    margin: 3,
  },
});

export default MyDeviceDetail;
