/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

interface IApp {
  name: string;
  fromChild: any;
  appOneCount: any;
}
const App: React.FunctionComponent<IApp> = ({name, fromChild, appOneCount}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState<number>(0);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const incrementData = () => {
    appOneCount(count + 1);
    setCount(count + 1);
  };
  const decremetData = () => {
    appOneCount(count - 1);
    setCount(count - 1);
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={styles.highlight}>One App .</Text>
          <Text style={styles.highlight}>{name}</Text>
          <Text style={styles.highlight}>{count}</Text>
          <Button
            color="#f194ff"
            title="Click<-Button in App1"
            onPress={() => fromChild('this data coming from app1 as child')}
          />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Button color="#d00000" title="decrement" onPress={decremetData} />
            <Button color="green" title="increment" onPress={incrementData} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
