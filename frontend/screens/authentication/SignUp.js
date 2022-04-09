import React from "react";
import { Text, View, TextInput, Button, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        color: "#4545d9",
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#4545d9",
        marginBottom: 20,
        height: '30%',
        borderBottomColor: "#000",
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '55%',
    },
    title: {
        textAlign: 'center',
        marginTop: 5,
        
        fontSize: 38,
        fontWeight: 'bold',
        color: '#4545d9'
    },
    subtitle: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 2,
        fontSize: 20,
        
    },
    textinput: {
        height: 30,
        width: "75%" ,
        margin: 8,
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
    },
});

const SignUp = ({ navigation, route }) => {
    console.log(route)
        return(
            <View style={{height: '100%'}}>
                 <View style={styles.mainView }>
                <Image source={require('../../assets/icons/main_icon.png')} style={{width: 150, height: 100, bottom: 10, transform:[{rotate: '40deg'}]}} />
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.buttonView}>
                    <Text style={styles.title}>REGISTRARSE</Text>
            
                    <View style={styles.mainContainer}>
                    <Text style={styles.subtitle}>Introduce tu nombre</Text>
                    <TextInput placeholder="Introduce tu nombre" style={styles.textinput}></TextInput>
                    <Text style={styles.subtitle}>Introduce tus apellidos</Text>
                    <TextInput placeholder="Introduce tus apellidos" style={styles.textinput}></TextInput>
                    <Text style={styles.subtitle}>Introduce tu número de telefono</Text>
                    <TextInput placeholder="Introduce tu número de telefono" style={styles.textinput}></TextInput>
                    <Text style={styles.subtitle}>Introduce tu correo electrónico</Text>
                    <TextInput placeholder="Introduce tu correo electrónico" style={styles.textinput}></TextInput>
                    <Text style={styles.subtitle}>Introduce tu contraseña</Text>
                    <TextInput placeholder="Introduce tu contraseña" style={styles.textinput}></TextInput>
                    <Button onPress={() => navigation.navigate('Home')} styles="alignItems: center" title="Registrarse"/>
                    </View>
                </View>
            </View>
            </View>
            
        );
};

export default SignUp;