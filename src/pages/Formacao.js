import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const Formacao = ({ navigation }) => {
    return (
      <View>
        <Text>Formação</Text>
    
        <Button title="Voltar" onPress={ () => navigation.goBack() }/>
      </View>
    );
  }
  export default Formacao;