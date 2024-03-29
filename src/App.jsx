import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, useNavigation,DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import Details from './screen/Details';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './screen/Profile';
import Icon from 'react-native-vector-icons/Entypo';


// Function to create Stack Navigator
function CreateStackNavigation() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{
      statusBarColor:'#0163d2',
      headerStyle:{
        backgroundColor:'#0163d2',
      },
      headerTitleAlign:'center',
      headerTintColor:'white',
  
    }}>
      <Stack.Screen name="Home" component={Home} options={{
            headerLeft: () =>{
              return(
                <Icon
                name="menu"
                onPress ={() =>
                navigation.dispatch(DrawerActions.openDrawer())
                }
                color='white'
                size={30}
              />
              );
            }
      }} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
function CreatedrawerNavigation() {
  const Drawer = createDrawerNavigator();


  return (
    <Drawer.Navigator screenOptions={{
      headerShown:false
    }}>
      <Drawer.Screen name="Home" component={CreateStackNavigation}  />
      
    </Drawer.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
  <CreatedrawerNavigation/>
    </NavigationContainer>
  );
}

export default App;
