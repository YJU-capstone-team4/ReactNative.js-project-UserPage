import React from 'react'
import { View, Text } from 'react-native'

export default function youtuberProfile() {
  return (
    <View
      style={{
        backgroundColor: '#FFBEFF',
        height: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Text>유튜버 정보가 들어갈 공간입니다.</Text>
      <Text>YoutuberProfile</Text>
    </View>
  )
}