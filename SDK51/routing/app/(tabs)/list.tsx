import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const List = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Link href={'/list/1'}>News One</Link>
            <Link href={'/list/2'}>News Two</Link>
            <Link href={'/list/3'}>News Three</Link>
        </View>
    );
}

const styles = StyleSheet.create({})

export default List;
