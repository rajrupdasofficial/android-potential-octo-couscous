import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const CategoryView: React.FC = () => {
  // Dummy image data
  const images = [
    require('../src/assets/categoryimages/cat1.jpg'),
    require('../src/assets/categoryimages/cat1.jpg'),
    require('../src/assets/categoryimages/cat1.jpg'),
    require('../src/assets/categoryimages/cat1.jpg'),
    require('../src/assets/categoryimages/cat1.jpg'),
    require('../src/assets/categoryimages/cat1.jpg'),
    require('../src/assets/categoryimages/cat1.jpg'),
    require('../src/assets/categoryimages/cat1.jpg'),
    require('../src/assets/categoryimages/cat1.jpg'),
    require('../src/assets/categoryimages/cat1.jpg'),
    require('../src/assets/categoryimages/cat1.jpg'),
    require('../src/assets/categoryimages/cat1.jpg'),
    require('../src/assets/categoryimages/cat1.jpg'),
  ];

  // Split images into groups of three
  const imageRows = [];
  for (let i = 0; i < images.length; i += 3) {
    const rowImages = images.slice(i, i + 3);
    imageRows.push(rowImages);
  }

  return (
    <View style={styles.container}>
      {imageRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((imageSource, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={imageSource} style={styles.image} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
    paddingTop: 16,
    paddingRight: 23,
    paddingBottom: 99,
    paddingLeft: 23,
    flexShrink: 0,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  imageContainer: {
    marginRight: 8,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});

export default CategoryView;
