import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert, Appearance } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';
import { loginUser } from '@/util/auth';
import { useSession } from '@/context/ctx';
import { Colors } from '@/constants/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const login = () => {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme)
    const { signIn } = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(theme);
    const submitHandler = async () => {
        try {
            const result = await loginUser(email, password); // call either signInWithPassword or signUp from firebase with email and password
            console.log(result);
            signIn(result.stsTokenManager.accessToken); // stores the idToken from firebase in session via context 
            router.replace('/') // redirect to the root route session will be reevaluated and the app/(app)/index.tsx will render 
        }
        catch (err) {
            Alert.alert("Authentication failed", "Couldnt register check your credentials and try again");
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style={theme.statusBarBackground} />
            <Text style={styles.mainHeaderText}> <MaterialCommunityIcons name="chef-hat" size={32} color={'white'} /> SmartChef</Text>
            <View style={styles.formContainer}>
                <Text style={[styles.mainHeaderText, styles.loginHeaderText]}>Welcome Back</Text>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={theme.text}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType='email-address'
                    style={styles.formInput}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={theme.text}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    style={styles.formInput}
                />
                <View style={styles.bttnContainer}>
                    <Pressable style={[styles.bttnMain, styles.bttn]} onPress={submitHandler}>
                        <Text style={styles.bttnText}>Login</Text>
                    </Pressable>
                    <Pressable style={[styles.bttnSecondary, styles.bttn]} onPress={() => Alert.alert('Sorry cant help you at the moment')}>
                        <Text style={[styles.bttnText, styles.secondaryBttnText]}>Forgot Password</Text>
                    </Pressable>
                </View>
            </View>
            <Text style={styles.linkText}>
                Don't have an account? <Link href="/register" style={styles.link}>Register here</Link>
            </Text>
        </View>
    );
}
function createStyles(theme, colorScheme) {


    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            paddingTop: 50,
            backgroundColor: theme.background
        },
        mainHeaderText: {
            fontSize: 32,
            color: theme.text,
            fontWeight: 'bold',
        },
        loginHeaderText: {
            fontSize: 24,
            marginBottom: 20,
        },
        formContainer: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 12
        },
        formInput: {
            borderWidth: 1,
            borderColor: theme.oppColor,
            borderRadius: 10,
            width: '100%',
            marginBottom: 12,
            paddingLeft: 12,
            color: theme.text
        },
        bttnContainer: {
            flexDirection: 'row',
            gap: 6
        },
        bttnMain: {
            backgroundColor: Colors.persimmon800,
        },
        bttnSecondary: {
            backgroundColor: Colors.persimmon200,
        },
        bttn: {
            padding: 10,
            borderRadius: 15,
            width: '50%',
            alignItems: 'center'
        },
        bttnText: {
            fontSize: 16,
            fontWeight: 'bold'
        },
        secondaryBttnText: {
            color: '#ED5E32'
        },
        linkText:{
            color:theme.text
        },
        link:{
            color:'#ED5E32',
            textDecorationLine:'underline'
        }
    })
}
export default login;