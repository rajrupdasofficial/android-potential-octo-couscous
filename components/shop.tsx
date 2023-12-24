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
      <Text>{title}</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const ShopList: React.FC = () => {
  const [cardData, setCardData] = React.useState<CardData[]>([]);

  // Fetch your card data from an API or any other source
  React.useEffect(() => {
    const fetchData = async () => {
      // Example: Replace this with your API call or dynamic data retrieval
      const dataFromAPI: CardData[] = [
        {
          id: 1,
          title: 'Card 1',
          //   description: 'Kolkata',
          image: require('./images/image1.jpg'),
        },
        {id: 2, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 3, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 4, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 5, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 6, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 7, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 8, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 9, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 10, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 11, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 12, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 13, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 14, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 15, title: 'Card 1', image: require('./images/image1.jpg')},
        {id: 16, title: 'Card 1', image: require('./images/image1.jpg')},
        // {id: 2, title: 'Card 2', image: require('./images/image1.jpg')},
        // Add more card data here...
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
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginLeft: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 80,
    borderRadius: 5,
  },
});

export default ShopList;
