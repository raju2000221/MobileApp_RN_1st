import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = (props) => {
  return (
    <View>
      <Text>Details</Text>
      <Button
      title='Profile'
      onPress={()=> props.navigation.navigate("Profile",{
      })}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
    },
    smallText:{
        color:'#00000',
    }
})