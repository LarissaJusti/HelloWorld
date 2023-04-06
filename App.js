import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pra falar de amor</Text>
      <Text style={styles.titulotitulo}>Ei Gatinha!</Text>
      <text style={styles.subtitulo}>Te conheço desde quando ce engatinha</text>
      <text style={styles.subsubtitulo}>Queria tanto que ce fosse minha, nossos ideais cabem numa caixinha</text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    borderRadius:5,
    backgroundColor: "#47fe2c",
    padding:10,
    fontSize:50,
  },

  subtitulo: {
    fonteSize:52,
    backgroundColor: "#68d114",
    marginTop:15,
    borderRadius:5,
  },

  titulotitulo: {
    fonteSize:85,
    backgroundColor: "#68d114",
    marginTop:15,
    borderRadius:5,
  }, 
  subsubtitulo: {
    fonteSize:85,
    backgroundColor: "#68d114",
    marginTop:15,
    borderRadius:5,

  }

  
});
