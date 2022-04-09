import React from "react";
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/*import Button from 'react-native-button';*/



const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    mainView: {
        display: 'flex',
        color: "#4545d9",
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#4545d9",
        marginBottom: 20,
        height: '45%',
    },
    buttonView: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        borderColor: 'transparent',
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.35,
        shadowRadius: 13.00,
        elevation: 8,
        padding: 19,
        borderWidth: 1,
        width: '85%'
    },
    buttonView2: {
        marginTop: 5,
    },
    title: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#4545d9'
    },
    subtitle: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 35,
        fontSize: 20,
    },
});


const StartUp = ({ navigation, route }) => {   
    return (
        <View style={{height: '100%'}}>
            <View style={styles.mainView }>
                <Image source={require('../../assets/icons/main_icon.png')} style={{width: 150, height: 100, bottom: 40, transform:[{rotate: '40deg'}]}} />
            </View>

        <View style={styles.mainContainer}>
            <View style={styles.buttonView}>
                <Text style={styles.title}>GymBooking</Text>
                <Text style={styles.subtitle}>Supérate día a día</Text>
                {/*<Button style={styles.button} onPrees={() => navigation.navigate('Feed')}>Iniciar Sesión</Button>
                <Button /*style={styles.button}>Registrarse</Button>*/}
                <Button onPress={() => navigation.navigate('SignIn')} title='Iniciar Sesión' />
                    <View style={styles.buttonView2}>
                        <Button onPress={() => navigation.navigate('SignUp')} title='Registrarse' />
                    </View>
            </View>
        </View>
        </View>
    );
};

export default StartUp;