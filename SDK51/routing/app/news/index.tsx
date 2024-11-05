import { Link, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
    return (
        <View>
            <Stack.Screen options={{title:"News Feed"}}/>
            <Text>News Feed</Text>
            <Link href={'/news/1'}>News 1</Link>
            <Link href={'/news/2'}>News 2</Link>
            <Link href={'/news/3'}>News 3</Link>

        </View>
    );
}

const styles = StyleSheet.create({})

export default Index;
