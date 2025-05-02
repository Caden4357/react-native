import type { Href } from 'expo-router';
import type { Theme } from '@/constants/Types';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert, Appearance, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';
import { loginUser } from '@/util/auth';
import { useSession } from '@/context/ctx';
import { Colors } from '@/constants/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useColorScheme } from 'nativewind';
import type { ColorScheme } from '@/constants/Types';


const login = () => {
    const {colorScheme, toggleColorScheme} = useColorScheme()
    const { signIn } = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // useEffect(() => {

    // }, [])

    const submitHandler = async () => {
        try {
            const result = await loginUser(email, password); // call either signInWithPassword or signUp from firebase with email and password
            if(result?.token){
                signIn(result?.token); // stores the idToken from firebase in session via context 
                router.replace("/" as Href) // redirect to the root route session will be reevaluated and the app/(app)/index.tsx will render 
            }
        }
        catch (err) {
            Alert.alert("Authentication failed", "Couldnt register check your credentials and try again");
        }
    }

    return (
        <View className='bg-slate-200 dark:bg-slate-900 flex-1 items-center pt-12'>
            <TouchableOpacity onPress={toggleColorScheme}>
                <Text className='dark:text-white'>{`Change theme to ${colorScheme === "dark"? "Light": "Dark"}`}</Text>
            </TouchableOpacity>
            <StatusBar style='auto' />
            <Text className='text-[32px] font-bold dark:text-white'> <MaterialCommunityIcons name="chef-hat" size={32} color={'#B52A01'} /> SmartChef</Text>
            <View className='w-full justify-center items-center p-3'>
                <Text className='text-[32px] font-bold mb-5 dark:text-white'>Welcome Back</Text>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={colorScheme === 'dark'? 'white': 'black'}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType='email-address'
                    className='border-2 rounded-xl border-solid w-full pl-3 mb-4 dark:border-white dark:text-white'
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={colorScheme === 'dark'? 'white': 'black'}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    className='border-2 rounded-xl border-solid w-full pl-3 mb-3 dark:border-white dark:text-white'
                />
                
                <View className='flex-row gap-2'>
                    <Pressable className='p-3 border-2 dark:border-white rounded-xl w-2/4 items-center text-red-800' onPress={submitHandler}>
                        <Text className='text-[16px] font-bold text-orange-400'>Login</Text>
                    </Pressable>
                    <Pressable className='p-3 border-2 dark:border-red-400 rounded-xl w-2/4 items-center' onPress={() => Alert.alert('Sorry cant help you at the moment. Coming soon!')}>
                        <Text className='text-[16px] font-bold text-red-400'>Forgot Password</Text>
                    </Pressable>
                </View>
            </View>
            
            <Text className='dark:text-white'>
                Don't have an account? <Link href={"/register" as Href} className='underline text-red-300'>Register here</Link>
            </Text>
        </View>
    );
}

export default login;