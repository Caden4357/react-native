import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
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
  const camera = useRef(null)
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
  const takePhoto = async () => {
    console.log('take photo');
    const photo = await camera.current.takePhoto()
    console.log(photo)
  }
  return (
    <View>
      <Button title={camerIsOpen ? 'Close Camera' : 'Open Camera'} onPress={toggleCamera} />
      <Camera
        ref={camera}
        style={{ width: '100%', height: '90%', display: camerIsOpen ? 'block' : 'none' }}
        device={device}
        isActive={camerIsOpen}
        photo={true}
      />
      <Button title='Take Photo' onPress={takePhoto} />
      
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