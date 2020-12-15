import React from 'react';
import { Text, View, Button, Image, Linking } from 'react-native';

const MyApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", margin: "1em" }}>
      <Image
        style={{width: 80, height: 80}}
        source={require('./assets/nust-logo.png')}
      />
      <Text style={{textAlign: "justify"}}>
        My name is Talha Yaseen. I am currently in my 7th semester at NUST, pursuing an undergraduate degree in Computer Science. I am learning React Native so that I can build mobile applications.
      </Text>
      <Button 
        title="Github Profile"
        onPress={() => Linking.openURL('https://github.com/talha-yaseen')}
      />
    </View>
  );
}

export default MyApp;