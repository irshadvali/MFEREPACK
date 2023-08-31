/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View, Button, Alert} from 'react-native';

import {Federated} from '@callstack/repack/client';

const App1 = React.lazy(() => Federated.importModule('RNMiniAppOne', './App'));
const App2 = React.lazy(() => Federated.importModule('RNMiniAppTwo', './App'));
const App3 = React.lazy(() => Federated.importModule('RNMiniAppThree', './App'));
function App(): JSX.Element {

  const [visibleApp, setVisibleApp] = useState<string>('');
  const [childData, setChildData] = useState<string>('Hellow');
  const [oneAppCount, oneAppSetCount] = useState<number>(0);
  const fromChild = (data: string)=>{
     console.log(data);
     setChildData(data);
  };
  const appOneCount = (mynumber: number) =>{
    oneAppSetCount(mynumber)
  };
  const handleButtonPress = () => {
    // Define the behavior when the button is pressed
    Alert.alert('Custom Button Pressed!');
  };
  const renderRelevantApp = () => {
    switch (visibleApp) {
      case 'app1':
        return (
          <View style={styles.miniAppWrapper}>
            <React.Suspense fallback={<Text>Loading app1...</Text>}>
              <App2  name={'test'}/>
            </React.Suspense>
          </View>
        );
      case 'app2':
        return (
          <View style={styles.miniAppWrapper}>
            <React.Suspense fallback={<Text>Loading app2...</Text>}>
              <App2  name={childData} oneAppCount={oneAppCount}/>
            </React.Suspense>
          </View>
        );
        case 'app3':
          return (
            <View style={styles.miniAppWrapper}>
              <React.Suspense fallback={<Text>Loading app3...</Text>}>
                <App3 />
              </React.Suspense>
            </View>
          );
      default:
        return (
          <SafeAreaView>
            <StatusBar />
            <View style={styles.mainContainer}>
            <View style={styles.miniAppWrapper}>
            <React.Suspense fallback={<Text>Loading app1...</Text>}>
              <App1  name={'test'} fromChild={fromChild} appOneCount={appOneCount}/>
            </React.Suspense>
          </View>
              {/* <Button title="App One" onPress={() => setVisibleApp('app1')} /> */}
              <View style={{marginTop: 20}}/>
              <Button title="App Two" onPress={() => setVisibleApp('app2')} />
              <View style={{marginTop: 20}}/>
              <Button title="App Three" onPress={() => setVisibleApp('app3')} />
              <Text>{childData}</Text>
              <Text>{oneAppCount}</Text>

            </View>
          </SafeAreaView>
        );
    }
  };

  const renderBackToHome = () => {
    if (visibleApp) {
      return (
        <View style={styles.backWrapper}>
          <Button title="<- Back To Home" onPress={() => setVisibleApp('')} />
        </View>
      );
    }
  };

  return (
    <View>
      {renderBackToHome()}
      {renderRelevantApp()}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  miniAppWrapper: {
    // flex:1,
  },
  backWrapper: {
    backgroundColor: '#E1F8DC',
    marginTop: 50,
  },
});

export default App;
