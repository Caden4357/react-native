import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native';
import { Link } from 'expo-router';
import { loginUser } from '@/util/auth';
const login = () => {
    const [email, setEmail] = useState('wilcox4357@gmail.com');
    const [password, setPassword] = useState('password123');

    const submitHandler = async () => {
        try{
            console.log(email, password);
            const result = await loginUser(email, password);
            console.log(result);
        }
        catch(err:any){
            Alert.alert("Authentication failed","Couldnt register " + err.message);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.mainHeaderText}>Login</Text>
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
                <Pressable style={styles.bttn} onPress={submitHandler}>
                    <Text style={styles.bttnText}>Login</Text>
                </Pressable>
            </View>
            <Text>
                {email}
            </Text>
            <Text>
                {password}
            </Text>
            <Link href="/register">
                <Text>Register</Text>
            </Link>
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
    bttn:{
        backgroundColor:'#669CB4',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center'
    },
    bttnText:{
        fontSize: 16,
        fontWeight: 'bold'
    }
})
export default login;