import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
// import HomeIcon from '@mui/icons-material/Home';
const DrawerLayout = ({ navigation }) => {
    const goToScreen = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={{ margin: 20, }}>
            <TouchableOpacity onPress={() => goToScreen('Home')}>
                <View style={styles.navigationBackground}>
                <FontAwesomeIcon icon={faHouse} style={{color:'white',marginHorizontal:10 }} />
                    <Text style={{color:'white'}}>Home</Text>            
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToScreen('Profile')}>
            <View style={styles.navigationBackground}>
                <FontAwesomeIcon icon={faUser} style={{color:'',marginHorizontal:10 }} />
                    <Text>Profile</Text>            
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToScreen('Details')}>
            <View style={styles.navigationBackground}>
                <FontAwesomeIcon icon={faGear} style={{color:'',marginHorizontal:10 }} />
                    <Text>Setting</Text>            
                </View>
            </TouchableOpacity>
        </View>
    );
};

const DrawerContent = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <TouchableOpacity>
                    <View style={styles.container}>
                        <View style={styles.userInfo}>
                            <Avatar.Text size={40} label="XD" style={styles.avatar} />
                            <View style={styles.userInfoText}>
                                <Title style={styles.title}>Raju</Title>
                                <Text numberOfLines={1} style={styles.email}>bdrajuislam246@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <DrawerLayout navigation={navigation} />
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerContent;

const styles = StyleSheet.create({
    container: {
      marginLeft: 10,
      marginTop: 20,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      backgroundColor: 'lightblue',
      marginRight: 10,
    },
    userInfoText: {
      flexDirection: 'column',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    email: {
      fontSize: 16,
      color: 'gray',
    },
    navigationBackground:{
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0163d2', // Add background color here                      
        padding: 10, // Optional: Add padding for better spacing
        borderRadius: 5, // Optional: Add border radius for rounded corners
    }
  });  
