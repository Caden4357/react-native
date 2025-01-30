import { useState, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native';
import { router } from 'expo-router';
import { authorizeUser } from '@/util/auth'
import { useSession } from '@/context/ctx';

const register = () => {
    const [username, setUsername] = useState('');
    const {signIn} = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = async () => {
        try{
            if(username.length < 3){
                Alert.alert("Username too short", "Username must be at least 3 characters long");
                return;
            }
            if (password !== confirmPassword) {
                Alert.alert("Password Mismatch", "Passwords do not match");
                return;
            }
            const result = await authorizeUser(email, password, 'register')
            signIn(result.data.idToken);
            router.replace('/')
        }
        catch(err:any){
            console.log(err.message);
            Alert.alert("Authentication failed","Couldnt register " + err.message);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.mainHeaderText}>Register</Text>
                <TextInput
                    placeholder="Username"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    style={styles.formInput}
                />
                <TextInput
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType='email-address'
                    style={styles.formInput}
                />
                <TextInput
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    style={styles.formInput}
                />
                <TextInput
                    placeholder="Confirm Password"
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    secureTextEntry={true}
                    style={styles.formInput}
                />
                <Pressable style={styles.bttn} onPress={submitHandler}>
                    <Text style={styles.bttnText}>Register</Text>
                </Pressable>
            </View>
            <Pressable onPress={() => router.back()}>
                <Text>
                    Login
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    formContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderBlockColor: 'black',
    },
    formInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '80%',
        marginBottom: 12
    },
    bttn: {
        backgroundColor: '#669CB4',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center'
    },
    bttnText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})
export default register;