import { useState} from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { authorizeUser } from '@/util/auth';
import { useSession } from '@/context/ctx';
const login = () => {
    const {signIn} = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async () => {
        try{
            const result = await authorizeUser(email, password, 'login'); // call either signInWithPassword or signUp from firebase with email and password 
            signIn(result.data.idToken); // stores the idToken from firebase in session via context 
            router.replace('/') // redirect to the root route session will be reevaluated and the app/(app)/index.tsx will render 
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