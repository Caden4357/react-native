import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '@/context/theme';
import { useSession } from '@/context/ctx';
import { getCurrentUser } from '@/util/auth';
const Profile = () => {
    const { colorScheme, toggleColorScheme } = useTheme();
    const [username, setUsername] = useState<string | null | undefined>('')
    const {session} = useSession();
    console.log('SESSION: ', session);
    const isDark = colorScheme === 'dark';


    useEffect(() => {
        async function getUser(){
            const displayName = await getCurrentUser();
            setUsername(displayName);
        }
        getUser()
    }, [])

    return (
        <View className='flex-1 items-center dark:bg-zinc-900 bg-white '>
            <View className='w-full pt-16 p-4 pb-14 flex-row justify-between'>
                <AntDesign name="back" size={24} color="black" className='bg-white p-4 rounded-2xl' />
                {
                    isDark ?
                        <Pressable onPress={toggleColorScheme}>
                            <Entypo name="light-bulb" size={24} color="black" className='bg-white p-4 rounded-2xl' />
                        </Pressable>
                        :
                        <Pressable onPress={toggleColorScheme}>
                            <MaterialIcons name="dark-mode" size={24} color="black" className='bg-white p-4 rounded-2xl' />
                        </Pressable>

                }
            </View>
            <Entypo name="user" size={62} color="black" className='bg-white p-4 rounded-full border-2' />
            <Text className='dark:text-white text-2xl mt-4'>{username}</Text>
        </View>
    );
}

export default Profile;
