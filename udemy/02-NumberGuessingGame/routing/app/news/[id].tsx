import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
const NewsDetails = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen options={{title:"News Feed " + id}}/>
            <Text>News Details</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default NewsDetails;
