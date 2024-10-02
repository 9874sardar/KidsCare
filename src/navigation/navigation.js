import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import Dashboard from '../screens/dashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lunchbox from '../screens/Lunchbox';
import Favorites from '../screens/Favorites';
import Cart from '../screens/Cart';
import { Animated, Easing } from 'react-native';
import { useRef } from 'react';
import AppBar from '../components/AppBar';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';
import OnboardingScreen from '../screens/Onboarding';
import Splash from '../screens/Splash';
import MenuDetailScreen from '../screens/MenuDetailScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LunchboxStack = () => {
  return (
    <Stack.Navigator
    // initialRouteName='PRODUCT_DETAILS'
    >
      <Stack.Screen name="Menu" component={Lunchbox} />
      <Stack.Screen name="Menu_Details" component={MenuDetailScreen} />
    </Stack.Navigator>
  );
};

function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const scaleAnim = useRef(new Animated.Value(1)).current; 

          const handlePressIn = () => {
            Animated.timing(scaleAnim, {
              toValue: 1.5, 
              duration: 150,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }).start();
          };

          const handlePressOut = () => {
            Animated.timing(scaleAnim, {
              toValue: 1,
              duration: 150,
              easing: Easing.in(Easing.ease),
              useNativeDriver: true,
            }).start();
          };

          let iconName;
          
          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Lunchbox') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Animated.View
          style={{ transform: [{ scale: scaleAnim }] }}
          onTouchStart={handlePressIn}
          onTouchEnd={handlePressOut}
        >
          <Ionicons name={iconName} size={size} color={color} />
        </Animated.View>

        },
        tabBarActiveTintColor: '#0E9D9D',  
        tabBarInactiveTintColor: 'gray',   
        tabBarStyle: {
          height: 60,                     
          paddingBottom: 10,        
          paddingTop: 10,   
          backgroundColor: '#fff',
          borderTopWidth: 0,
          borderRadius: 20,
          marginHorizontal: 10,
          marginBottom:10,            
          shadowColor: '#000',
          shadowOpacity: 0.06, 
          shadowOffset: { width: 0, height: -5 },
          shadowRadius: 10,   
          elevation: 20,        
        },
        tabBarLabelStyle: {
          fontSize: 12,       
          fontWeight: '600',      
        },
        tabBarItemStyle: {
          justifyContent: 'center',  
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{header: () =>(<AppBar/>),tabBarLabel: 'Home'}}
        // options={{  }} 
        />
      <Tab.Screen
        name="Lunchbox"
        component={LunchboxStack}
        options={{header: () =>(<AppBar/>),tabBarLabel: 'Lunchbox'}}
        // options={{ tabBarLabel: '' }}
        />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{header: () =>(<AppBar/>),tabBarLabel: 'Favorite'}}
        // options={{ tabBarLabel: '' }}
        />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{header: () =>(<AppBar/>),tabBarLabel: 'Cart'}}
        // options={{ tabBarLabel: 'Cart' }}
      />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="splash" options={{headerShown: false}} component={Splash} />
        <Stack.Screen name="onboarding" options={{headerShown: false}} component={OnboardingScreen} />
        <Stack.Screen name="home" options={{headerShown: false}} component={Home} />
        <Stack.Screen name="otp" options={{headerShown: false}} component={OtpVerificationScreen} />
        <Stack.Screen name="signin"
          options={{headerShown: false}}
          component={SignIn}
        />
        <Stack.Screen
          name="signup"
          options={{headerShown: false}}
          component={SignUp}
        />
        {/* <Stack.Screen name="dashboard" options={{headerShown: false}} component={Dashboard}
        /> */}
        <Stack.Screen
          name="dashboard"
          options={{ headerShown: false }}
          component={DashboardTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
