import { router } from 'expo-router';
import { Text, View, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { useSession } from '@/context/ctx';
import { TextInput } from 'react-native';
import { useState } from 'react';

export default function SignIn() {
    const { signIn } = useSession();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        try{
            const user = {email, password}
            console.log(user);
            const response = await axios.post('https://quizwarz-server.onrender.com/api/login', user)
            console.log('RES: ', response.data);
            signIn(response.data._id)
            router.replace('/')
        }
        catch(err) {
            console.log('ERROR: ', err);
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                style={styles.numberInput}
                onChangeText={(text) => setEmail(text)}
                defaultValue='email'
            />
            <TextInput
                style={styles.numberInput}
                onChangeText={(text) => setPassword(text)}
                defaultValue='password'
            />
            <Button title='Login' onPress={login}/>
        </View>
    );
}
const styles = StyleSheet.create({
    numberInput: {
        height: 50,
        width: 200,
        textAlign: 'center',
        borderBottomWidth: 1,
        marginBottom: 16,
        fontSize: 32,
        fontWeight: 'bold',
    },
})
