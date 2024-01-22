import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Txt } from '../utils'

const Space = ({space,style}) => {
  return (
    <View style={{height:space ? space : 10,}}  {...style}>

    </View>
      
  )
}

export default Space

const styles = StyleSheet.create({})