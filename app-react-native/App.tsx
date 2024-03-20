// Importar las dependencias necesarias
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    // Estructura básica de la aplicación
    <View style={styles.container}>
      <Image
      source={ require('./assets/chef.jpg')}
      style={styles.imageBackground}
      />

      <View style={styles.logoContainer}>
        <Image
            source={require('./assets/logo.png')}
            style={styles.logoImage}
            />
        <Text style={styles.logoText}>FOOD APP</Text>
        </View>

      <View style={styles.form}>
      </View>

    </View>

  );
}

// Estilos para los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  form:{
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  }
});

