import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Button, Alert, ImageBackground } from 'react-native';

export default function App() {
  
  const [Ciudad, setCiudad] = useState("")
  function saludo (){
    Alert.alert("El clima de Quito es :19°");
    console.log("El clima de Quito es :19°");
  }
  return (
    < ImageBackground
    source ={{uri: "https://e0.pxfuel.com/wallpapers/868/425/desktop-wallpaper-3d-moving-for-phone-3d-cell.jpg"}}

    style={styles.container}
    >
    <Text style={styles.titulo} >Clima</Text>
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#6536',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo :{

  },
  input:{
    fontSize:20,
    color :` white`,
    backgroundColor :``
  }
});
 