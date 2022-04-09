import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from "./Feed";
import Bookings from './Bookings';
import Favorites from './Favorites';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 22,
                    height: 90,
                    borderTopWidth: 0
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen name="Tablón" component={Feed} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image
                            source={require('../assets/icons/news.png')}
                            resizeModel='contain'
                            style={{
                                width: 35,
                                height: 30,
                                tintColor: focused ? 'blue' : 'black'
                            }}
                        />
                    </View>
                )
            }} />

            <Tab.Screen name="Favoritos" component={Favorites} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image
                            source={require('../assets/icons/favorite.png')}
                            resizeModel='contain'
                            style={{
                                width: 35,
                                height: 30,
                                tintColor: focused ? 'blue' : 'black'
                            }}
                        />
                    </View>
                )
            }} />

            <Tab.Screen name="Mis reservas" component={Bookings} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image
                            source={require('../assets/icons/booking.png')}
                            resizeModel='contain'
                            style={{
                                width: 35,
                                height: 30,
                                tintColor: focused ? 'blue' : 'black',
                            }}
                        />
                    </View>
                )
            }} />

        </Tab.Navigator>
    );
};

const Home = ({ navigation, route }) => {
    return(
        <BottomTab />
    );
};

export default Home;