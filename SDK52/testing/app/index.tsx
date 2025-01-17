import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';

const Login = () => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.mainTitle}>Health Gut | Happy Butt</Text>
            <TextInput placeholder="Email"  style={styles.formInput}/>
            <TextInput placeholder="Password" style={styles.formInput}/>
            <Pressable style={styles.mainButton}>
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
            <Link href="/register">Register</Link>
        </View>
    );
}

const styles = StyleSheet.create({

    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
    },
    mainTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#9db4a0'
    },
    formInput: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: 200,
        margin: 10,
    },
    mainButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
    }
})
export default Login;