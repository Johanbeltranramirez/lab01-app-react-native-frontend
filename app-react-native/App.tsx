// Importar las dependencias necesarias
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Definir el componente funcional App
export default function App() {
  return (
    // Estructura básica de la aplicación
    <View style={styles.container}>
      <Text>Hola Mundo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}     

// Estilos para los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

