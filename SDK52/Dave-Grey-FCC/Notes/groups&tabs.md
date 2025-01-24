## an example of a tab might look like this 
```
<Tabs
    screenOptions={{        // configre options directly on the screen here it will override the options set in index 
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
>
<Tabs.Screen
        name="index"
        options={{
          title: 'Home', // name of component
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color, focused }) => focused? <Ionicons size={28} name="people-circle" color={color} />: <Ionicons size={28} name="people-circle-outline" color={color} />,
        }}
      />
    </Tabs>
``` 

## A simple group could just look like this 
```
import { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Slot, Stack } from 'expo-router';
import { UserProvider } from '@/context/UserContext';
const RootLayout = () => {
    console.log('RootLayout');
    <Slot />;
}

```