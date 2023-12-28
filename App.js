import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
/* 원래 webview를 사용하려 했는데 webcame을 expo go 에서 지원을 하지 않음, webcame의 실시간 비디오를 이용해야하는데
expo go에서는 expo camera로 한장씩 일일이 찍어 모델한테 보내고 일일이 확인해야해서 너무 비효율적임 때문에 expo-web-browser를 사용함*/

export default function App() {
  const openWebPage = async () => {
    await WebBrowser.openBrowserAsync('https://jbkminiproject.netlify.app/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>손톱뜯지 마세요</Text>

      <View style={styles.imageContainer}>
        <Image source={require('./assets/a.png')} style={styles.image} />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={openWebPage}>
        <Text style={styles.buttonText}>시작</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 50,
  },
  topText: {
    fontSize: 40, 
    fontWeight: 'bold',  
    marginTop: 80, 
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: -10,
  },
  button: {
    width: Dimensions.get('window').width - 60, 
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
