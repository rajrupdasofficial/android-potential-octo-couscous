import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import Header from './Header';

interface CardData {
  id: number;
  title: string;
  image: ImageSourcePropType;
}

interface CardProps {
  title: string;
  image: ImageSourcePropType;
}

const Card: React.FC<CardProps> = ({title, image}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.hedtext}>{title}</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const ShopList: React.FC = () => {
  const [cardData, setCardData] = React.useState<CardData[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const dataFromAPI: CardData[] = [
        {
          id: 1,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 2,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 3,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 4,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 5,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 6,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 7,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 8,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 9,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 10,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 11,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 12,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 13,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 14,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 15,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
        {
          id: 16,
          title: 'Tech Mobile Shop',
          image: require('../src/assets/cardimages/image1.jpg'),
        },
      ];
      setCardData(dataFromAPI);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <ScrollView>
          {cardData.map(card => (
            <Card key={card.id} title={card.title} image={card.image} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  card: {
    flex: 1,
    height: 90,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginTop: 10,
    gap: 32,
    borderBottomColor: 'black',
    borderBottomWidth: 0.65,
  },
  hedtext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 14,
  },
  title: {
    fontSize: 18,
    marginLeft: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    marginTop: 14,
    width: 80,
    height: 46,
    marginLeft: 80,
    borderRadius: 5,
  },
});

export default ShopList;
