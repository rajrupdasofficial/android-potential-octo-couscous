import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeView: React.FC = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.halfCircle} />
        <View style={styles.card}>
          <Text style={styles.cardText}>Total Shop</Text>
          <Text style={styles.cardValue}>809</Text>
          <View style={styles.smallcard}>
            <Entypo name="circle-with-plus" size={10} color="black" />
            <Text style={styles.smalltext}>Add Shop</Text>
          </View>
        </View>
        <View style={[styles.card, styles.bottomCard]}>
          <Text style={styles.cardText}>My Reward Points</Text>
          <Text style={styles.cardValue}>90</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 0.8, // Adjust the thickness as needed
    borderColor: 'black',
  },
  bottomCard: {
    marginBottom: 0,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    marginTop: 10,
  },
  smallcard: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
    borderWidth: 0.5, // Adjust the thickness as needed
    borderColor: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
  },
  smalltext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  halfCircle: {
    width: 100,
    height: 30, // Increase the height to maintain the curved shape
    backgroundColor: 'black',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: 'hidden', // Hide the bottom part to form a half circle
  },
});

export default HomeView;
