import React from 'react'
import { View, Text } from 'react-native'

const MainView = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Home View</Text>
      <Text> Home | Search | Post | Profile</Text>
    </View>
  )
}

export default MainView