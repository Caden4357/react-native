import React from 'react';
import { StyleSheet, View, Text, Appearance } from 'react-native';
import { Colors } from '@/constants/Colors'

const Loading = () => {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);
    return (
        <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading....</Text>
        </View>
    );
}
function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        loadingText: {
            color: theme.text,
            fontSize: 32
        },
        loadingContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
}
export default Loading;
