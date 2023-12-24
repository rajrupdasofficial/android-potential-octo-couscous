import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeView from './components/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ShopList from './components/shop';
// import HomeScreen from './path_to_your_home_screen/HomeScreen'; // Replace with the correct path
// import ProfileScreen from './path_to_your_profile_screen/ProfileScreen'; // Replace with the correct path

const Tab = createBottomTabNavigator();
const HomeIcon = ({color, size}) => (
  <MaterialCommunityIcons name="home" size={size} color={color} />
);
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeView}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: HomeIcon, // Pass the icon component as a prop
          }}
        />
        <Tab.Screen name="Category" component={HomeView} />
        <Tab.Screen name="Shop" component={ShopList} />
        <Tab.Screen name="Profile" component={HomeView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
