/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, SignUp, VerifyOtp, Home} from './src/Features';
import {OnBoarding} from './src/Features/Onboarding';
import {Provider} from 'react-native-paper';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#89CFF0',
    height: '100%',
  };

  const Stack = createNativeStackNavigator();

  const [isOnBoarding, setIsOnBoarding] = useState(true);
  return (
    <>
      <Provider>
        <SafeAreaView style={backgroundStyle}>
          {isOnBoarding ? (
            <OnBoarding onDoneOrSkip={setIsOnBoarding} />
          ) : (
            <NavigationContainer
              theme={{
                colors: {
                  background: '#89CFF0',
                },
              }}>
              <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
              />
              <Stack.Navigator
                initialRouteName="SignIn"
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
                <Stack.Screen name="Home" component={Home} />
              </Stack.Navigator>
            </NavigationContainer>
          )}
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
