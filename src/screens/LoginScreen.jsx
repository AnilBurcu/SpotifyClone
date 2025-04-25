import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Call, Facebook, Google, Mobile, Spotify} from 'iconsax-react-nativejs';

const LoginScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: 80}} />
        <View style={{alignItems: 'center'}}>
          <Spotify color="#65d46e" size={96} />
        </View>

        <Text style={styles.loginTitle}>Millions of songs free on Spotify</Text>
        <View style={{height: 80}} />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonTextSpt}>Sign In with Spotify!</Text>
        </TouchableOpacity>
        <Pressable style={styles.button}>
          <Google color="white" size={24} />
          <Text style={styles.buttonText}>Continue with Google!</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Facebook color="white" size={24} />
          <Text style={styles.buttonText}>Continue with Facebook!</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Call color="white" size={24} />
          <Text style={styles.buttonText}>Continue with Phone!</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginTitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  loginButton: {
    backgroundColor: '#65d46e',
    padding: 10,
    width: 300,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 25,
    height: 40,
  },
  buttonTextSpt: {
    color: 'white',
    marginLeft: 64,
    fontWeight: '600',
    fontSize: 15,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    marginLeft: 40,
    fontWeight: '600',
    fontSize: 15,
    flex: 1,
  },
  button: {
    backgroundColor: '#131624',
    padding: 10,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    borderColor: '#C0C0C0',
    width: 300,
    height: 40,
    borderRadius: 25,
    alignSelf: 'center',
    borderWidth: 0.8,
    marginVertical: 10,
  },
});
