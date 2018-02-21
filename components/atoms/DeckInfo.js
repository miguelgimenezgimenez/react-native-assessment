import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckInfo extends Component {
  render () {
    const { title, cardNumber } = this.props
    return (
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardNumber}>{cardNumber} cards</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  info: {
    marginTop: 100,
    marginBottom: 100
  },
  title: {
    fontSize: 40,
    marginBottom: 10
  },
  cardNumber: {
    color: 'grey',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default DeckInfo