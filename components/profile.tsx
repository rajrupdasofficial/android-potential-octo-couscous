import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Header from './Header';

const ProfileView: React.FC = () => {
  return (
    <>
      <Header />

      <View style={styles.card}>
        <View style={styles.inner}>
          <Text style={styles.username}>Rakesh Sharma</Text>
          <Text style={styles.phone}>+91-1234567899</Text>
          <Text style={styles.email}>demo@mail.com</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../src/assets/profileimage/Ellipse.png')}
            style={styles.profileImage}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 120},
  username: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 14,
    alignContent: 'space-between',
  },
  card: {
    flex: 1,
    paddingBottom: 12,
    flexDirection: 'column', // Change flexDirection to row
    // alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginTop: 20,
    alignContent: 'space-between',

    borderBottomColor: 'black',
    borderBottomWidth: 0.65,
  },
  inner: {marginLeft: 20, gap: 7},
  phone: {
    color: 'black',
    fontWeight: 'bold',
  },
  email: {
    color: 'black',
    fontWeight: 'bold',
  },
  imageContainer: {
    marginLeft: 320,
    flex: 1,
    marginTop: -52,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ProfileView;
