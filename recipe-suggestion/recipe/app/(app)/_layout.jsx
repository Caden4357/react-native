import { Text } from 'react-native';
import { Redirect, Stack, Tabs } from 'expo-router';

import { useSession } from '@/context/ctx';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function AppLayout() {
    const { session, isLoading } = useSession();

    // You can keep the splash screen open, or render a loading screen like we do here.
    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    // Only require authentication within the (app) group's layout as users
    // need to be able to access the (auth) group and sign in again.
    if (!session) {
        // On web, static rendering will stop here as the user is not authenticated
        // in the headless Node process that the pages are rendered in.
        return <Redirect href="/sign-in" />;
    }

    // This layout can be deferred because it's not the root layout.
    return (
        <Tabs
            screenOptions={{
                headerShown:false,
            }}
        >
            <Tabs.Screen name='index' options={{
                headerShown:false, 
                title:'Home',
                tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={'black'} />
            }} /> 
            <Tabs.Screen name='camera' options={{
                headerShown:false, 
                title:'Camera',
                tabBarIcon: ({color}) => <AntDesign name="camera" size={24} color={'black'} />
            }} /> 
            <Tabs.Screen name='profile' options={{
                headerShown:false, 
                title:'Profile',
                tabBarIcon: ({color}) => <AntDesign name="user" size={24} color={'black'} />
            }} /> 
        </Tabs>
    )
}
