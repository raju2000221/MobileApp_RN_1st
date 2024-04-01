import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../src/Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckCircle, faCircleCheck, faCircleXmark, faKey, faLock, faMailBulk, faMobile, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Register = () => {
    const navigation = useNavigation();
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleRegister = () => {
        // Create an object containing all the input values
        const formData = {
            mobile: mobile,
            email: email,
            name: name,
            password: password,
            
        };
        axios.post('http://192.168.0.112:5000/register', formData)
            .then(response => {
                console.log('Registration successful:', response.data);
                navigation.navigate('Login');
            })
            .catch(error => {
                console.error('Registration failed:', error);
            });
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoRegister} source={require('../../src/assets/icon.png')} />
                </View>
                <View style={styles.loginContainer}>
                    <Text style={{ textAlign: 'center', fontSize: 25 }}>--- Register ---</Text>
                    <View style={styles.action}>
                        <FontAwesomeIcon icon={faMobile} size={20} />
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TextInput
                            style={{ paddingHorizontal: 20 }}
                            onChangeText={setMobile}
                            placeholder='Mobile'
                        />
                        <FontAwesomeIcon icon={faCircleCheck} size={18} style={{ justifyContent:'flex-end', color:'green'}}/>
                        </View>                   
                    </View>
                    <View style={styles.action}>
                        <FontAwesomeIcon icon={faMailBulk} size={20} />
                        <TextInput
                            style={{ paddingHorizontal: 20 }}
                            placeholder='Email'
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesomeIcon icon={faUser} size={20} />
                        <TextInput
                            onChangeText={setName}
                            style={{ paddingHorizontal: 20 }}
                            placeholder='Name'
                        />

                    </View>
                    <View style={styles.action}>
                        <FontAwesomeIcon icon={faLock} size={20} />
                        <TextInput
                            style={{ paddingHorizontal: 20 }}
                            placeholder='Password'
                            secureTextEntry
                            onChangeText={setPassword}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesomeIcon icon={faLock} size={20} />
                        <TextInput
                            style={{ paddingHorizontal: 20 }}
                            placeholder='Confirm Password'
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />
                    </View>


                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={handleRegister}>
                        <View style={{
                            backgroundColor: '#043265',
                            paddingHorizontal: 150,
                            padding: 15,
                            borderRadius: 50,
                        }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 700 }}> {/* Set text color to white */}
                                Register
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: '500', }}>
                        Allready Have an Account ?
                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                            <Text style={{ fontWeight: '700', color: '#043265', textDecorationLine: 'underline', marginLeft: 10 }}>
                                Login Now
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register

