import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeView from './components/Home';
import ShopList from './components/shop';
import {Image, ImageSourcePropType} from 'react-native';

const Tab = createBottomTabNavigator();

interface TabIconProps {
  focused: boolean;
  iconSource: {
    default: ImageSourcePropType;
    focused: ImageSourcePropType;
  };
}

const TabIcon: React.FC<TabIconProps> = ({focused, iconSource}) => (
  <Image
    source={focused ? iconSource.focused : iconSource.default}
    style={{width: 40, height: 40, marginTop: 10}}
  />
);

const tabIcons: Record<string, {default: any; focused: any}> = {
  Home: {
    default: require('./src/assets/navimages/Home.png'),
    focused: require('./src/assets/navimages/Home.png'),
  },
  Category: {
    default: require('./src/assets/navimages/category.png'),
    focused: require('./src/assets/navimages/category.png'),
  },
  Shop: {
    default: require('./src/assets/navimages/shop.png'),
    focused: require('./src/assets/navimages/shop.png'),
  },
  Profile: {
    default: require('./src/assets/navimages/profile.png'),
    focused: require('./src/assets/navimages/profile.png'),
  },
};

const tabBarIcon =
  (iconSource: {default: any; focused: any}) =>
  ({focused}: {focused: boolean}) =>
    <TabIcon focused={focused} iconSource={iconSource} />;

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeView}
          options={{
            tabBarIcon: tabBarIcon(tabIcons.Home),
          }}
        />
        <Tab.Screen
          name="Category"
          component={HomeView}
          options={{
            tabBarIcon: tabBarIcon(tabIcons.Category),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopList}
          options={{
            tabBarIcon: tabBarIcon(tabIcons.Shop),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ShopList}
          options={{
            tabBarIcon: tabBarIcon(tabIcons.Profile),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
