import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index'

import { AuthProvider } from './src/context/auth'


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
