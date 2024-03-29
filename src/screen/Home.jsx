import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  console.log(props)
  return (
    <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
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