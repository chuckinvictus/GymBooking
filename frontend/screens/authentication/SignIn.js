import React from "react";
import { Text, View, TextInput, Button, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#4545d9",
        marginBottom: 20,
        height: '45%',
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',

    },   
    title: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4545d9',
    },
    subtitle: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 2,
        fontSize: 20,     
    },
    textInput: {
        height: 35,
        width: '100%',
        margin: 10,
        borderWidth: 1,
        padding: 10,
        marginTop: 8,
        textAlign: "center",
        borderRadius: 5,
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
        padding: 20,
        borderWidth: 1,
        width: '85%'
    }
});

const SignIn = ({ navigation }) => {
        return(
            <View style={{height: '100%'}}>
                 <View style={styles.mainView }>
                <Image source={require('../../assets/icons/main_icon.png')} style={{width: 150, height: 100, bottom: 40, transform:[{rotate: '40deg'}]}} />
                </View>
            <View style={styles.mainContainer}>
                <View style={styles.buttonView}>
                    <Text style={styles.title}>INICIO DE SESIÓN</Text>
                    <Text style={styles.subtitle}>Introduce tu correo o usuario:</Text>
                    <TextInput style={styles.textInput} placeholder="Correo o usuario"></TextInput>
                    <Text style={styles.subtitle}>Introduce tu contraseña:</Text>
                    <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Contraseña"></TextInput>
                    <Button onPress={() => navigation.navigate('Home')} title="Iniciar sesión"/>  
            </View>
            </View>
            </View> 
        );
};

export default SignIn;