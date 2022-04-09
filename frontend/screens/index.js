import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ViewPropTypes } from 'react-native';




import StartUp from './authentication/StartUp';
import Home from './Home';
import Feed from "./Feed";
import Bookings from './Bookings';
import Favorites from './Favorites';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';

const Stack = createNativeStackNavigator(MyStack);

const MyStack = () => {
    return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartUp" component={StartUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
    );
};

const App = () => {
    return(
        <NavigationContainer>
            <MyStack>
                <StartUp/>
            </MyStack>
        </NavigationContainer>
    );
};

export default App;