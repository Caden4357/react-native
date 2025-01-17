import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Stack } from 'expo-router';
const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="(auth)" options={{headerShown:false}}/>
        </Stack>
    );
}

const styles = StyleSheet.create({})
export default RootLayout;