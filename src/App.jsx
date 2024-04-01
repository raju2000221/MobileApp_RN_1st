import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, useNavigation,DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import Details from './screen/Details';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './screen/Profile';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import DrawerContent from './screen/DrawerContent';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SplashScreen from 'react-native-splash-screen'
import Login from './Login_Signin/Login';
import Register from './Login_Signin/Register';

// Function to create Stack Navigator
function CreateStackNavigation() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <Stack.Navigator screenOptions={{
      statusBarColor:'#0163d2',
      headerStyle:{
        backgroundColor:'#0163d2',
      },
      headerTitleAlign:'center',
      headerTintColor:'white',
  
    }}>
      <Stack.Screen name="Home Screen" component={Home} options={{
            headerLeft: () =>{
              return(
                <TouchableOpacity onPress={handlePress}>
                  <FontAwesomeIcon icon={faBars} size={25} style={{color:'white'}} />
              
              </TouchableOpacity>           
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
    <Drawer.Navigator 
    drawerContent={props => <DrawerContent {...props}/>}
    screenOptions={{
      headerShown:false
    }}>
      <Drawer.Screen name='Stack' component={CreateStackNavigation}/>     
    </Drawer.Navigator>
  );
}


function App() {
  React.useEffect(() =>{
    setTimeout(() =>{
      SplashScreen.hide()
    },200)
  },[])
const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
<Stack.Navigator screenOptions={
  {
    headerShown:false
  }
}>
  <Stack.Screen name='Login' component={Login}/>
  <Stack.Screen name='Register' component={Register}/>
  <Stack.Screen name='Home' component={CreatedrawerNavigation}/>
</Stack.Navigator>
    </NavigationContainer>
  // <Login/>
  );
}

export default App;
