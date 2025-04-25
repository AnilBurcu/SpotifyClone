import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {AlbumContext} from '../context/AlbumContext';
import Loader from '../components/Loader';
import cover from '../assets/cover.jpg';
import {CloudLightning} from 'iconsax-react-nativejs';

const HomeScreen = () => {
  const {albums, loading, error} = useContext(AlbumContext);
  return (
    <LinearGradient colors={['#040305', '#131624']} style={{flex: 1}}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <ScrollView
          style={{marginTop: 50}}
          contentContainerStyle={{paddingBottom: 100}}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image source={cover} style={styles.headerImage} />
              <Text style={{color: 'white'}}>Spotify Clone</Text>
            </View>
            <CloudLightning size={20} color="white" />
          </View>
          <View style={styles.tabButtons}>
            <Pressable>
              <Text>Music</Text>
            </Pressable>
            <Pressable>
              <Text>Podcast & Show</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 60,
    height: 60,
    padding: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
