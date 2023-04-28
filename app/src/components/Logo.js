import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logo-vertical.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 260,
    height: 160,
    marginBottom: 8,
  },
})
