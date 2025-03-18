import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import { NavigationContainer, createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/authContext';
import Home from './src/screens/Home';
import Account from './src/screens/Account';
import Post from './src/screens/Post';
import Myposts from './src/screens/Myposts';
import { PostProvider } from './context/postContext';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <AuthProvider>
      <PostProvider>
            <NavigationContainer >
            {/* <SafeAreaView style={styles.container}> */}
            {/* <Text style={styles.hello}> HElllo</Text> */}
              <Stack.Navigator >   

              <Stack.Screen name='Register' component={Register}  options={{headerShown:false}}/>
              <Stack.Screen name='Home' component={Home}/>

              <Stack.Screen name='Login' component={Login}/>
              <Stack.Screen name='Account' component={Account}/>
              <Stack.Screen name='Post' component={Post} />
              <Stack.Screen name='Myposts' component={Myposts} />
              
                
              
              </Stack.Navigator>

            {/* </SafeAreaView> */}
              </NavigationContainer>
        </PostProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello:{
    color:'black',
    padding: '30'
  }
});
