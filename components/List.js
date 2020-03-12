import React from 'react'
import { View, Text } from 'react-native'

const List = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>List View</Text>
      <Text> List | Search | Post | Profile</Text>
    </View>
  )
}

export default List