import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import Header from './src/Header';
import Stories from './src/Stories';
import Feed from './src/Feed';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Stories/>
      <Feed/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    marginTop: Constants.StatusBar
  },
});
