import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = (props) => {
  return (
    <View>
      <Text>Details</Text>
      <Text>{props.route.params.name}</Text>
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