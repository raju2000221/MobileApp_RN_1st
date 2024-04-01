import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = (props) => {
  const [user, setUser] = useState('')
  getData = async () =>{
  const userToken = await AsyncStorage.getItem('loginToken')
  console.log(userToken)
  axios.post("http://192.168.0.112:5000/userData",{userToken}).then( user =>{
    setUser(user.data)
  })
 }

   useEffect(()=>{
    getData();
    
  },[])
  return (
    <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{user.email}</Text>
      <Button
      title='Details'
      onPress={()=> props.navigation.navigate("Details",{
      })}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

    container:{ flex: 1, alignItems: 'center', justifyContent: 'center' },
    smallText:{
        color:'#00000',
    }
})