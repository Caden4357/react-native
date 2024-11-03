import { Tabs } from "expo-router"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
export default () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    headerTitle: "HomeScreen",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen name="list"
                options={{
                    headerTitle: "ListScreen",
                    headerStyle: {
                        backgroundColor: "red",
                    },
                    tabBarIcon: ({ color }) => <Feather size={28} name="list" color={color} />,
                }}
            />
            <Tabs.Screen name="camera"
                options={{
                    headerTitle: "CameraScreen",
                    headerStyle: {
                        backgroundColor: "red",
                    },
                    tabBarIcon: ({ color }) => <Feather size={28} name="camera" color={color} />,
                }}
            />
        </Tabs>
    )
}
