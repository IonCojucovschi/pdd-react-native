import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet, View } from 'react-native';



export default function CategoriesScreen({ navigation }) {
  
  
  return (
    <View style={{ backgroundColor: '#6a51ae' }}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <Text style={{ color: '#fff' }}>Light Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen2')}      
        color="#fff"
      />
    </View>
  );
}