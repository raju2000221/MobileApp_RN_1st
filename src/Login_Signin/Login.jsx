import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from '../../src/Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../src/assets/icon.png')} />
            </View>
            <View style={styles.loginContainer}>
            <Text style={{textAlign:'center', fontSize:25}}>--- Login ---</Text>
                <View style={styles.action}>
                    <FontAwesomeIcon icon={faUser} size={20} />
                    <TextInput
                        style={{ paddingHorizontal: 20 }}
                        placeholder='Mobile or Email'
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesomeIcon icon={faKey} size={20} />
                    <TextInput
                        style={{ paddingHorizontal: 20 }}
                        placeholder='Password'
                    />
                </View>
                <View style={
                    {
                        alignItems: 'flex-end',
                        marginTop: 10
                    }
                }>
                    <Text style={{ color: '#043265', fontWeight: 700 }}>Forgot password ?</Text>
                </View>

            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    <View style={{
                        backgroundColor: '#043265',
                        paddingHorizontal: 150,
                        padding: 15,
                        borderRadius: 50,
                    }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 700 }}> {/* Set text color to white */}
                            Log in
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>    
            
            <View style={{alignItems:'center'}}>
                    <Text style={{ fontSize: 15, fontWeight: '500', }}>
                        New here ?{' '}
                        <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                            <Text style={{ fontWeight: '700', color: '#043265', textDecorationLine:'underline'}}>
                                Register Now
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>      
        </View>
    )
}

export default Login

