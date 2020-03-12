import React from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default function UselessTextInput() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 40, fontWeight: '700' }}>Make a research {"\n"}</Text>
      
      <Text> Category :</Text>
      <TextInput
      style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
      />

      <Text> Title :</Text>
      <TextInput
      style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
      />

      <Text> Country :</Text>
      <TextInput
      style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
      />
      
      <Text>{"\n"}</Text>

      <Button
      title="Search"
      />

    </View>
  )
}
