import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Camera } from 'react-native-vision-camera'
import { useCameraPermission } from 'react-native-vision-camera'
import { useCameraDevice } from 'react-native-vision-camera'
import { PermissionsAndroid } from 'react-native';
const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
function App() {
  const device = useCameraDevice('back')
  const [camerIsOpen, setCameraIsOpen] = useState(false)

  // ! this would ask for permission immediately when the app starts
  // useEffect(() => {
  //   requestCameraPermission()
  // }, [])
  // ! this would ask for permission when the button is pressed
  const toggleCamera = () => {
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then((result) => {
      if (result) {
        setCameraIsOpen(!camerIsOpen)
      } else {
        requestCameraPermission()
      }
    }
    )
  }
  return (
    <View>
      <Button title={camerIsOpen ? 'Close Camera' : 'Open Camera'} onPress={toggleCamera} />
      <Camera
        style={{ width: '100%', height: '100%', display: camerIsOpen ? 'block' : 'none' }}
        device={device}
        isActive={camerIsOpen}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
export default App;