import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class DeckCard extends Component {
  render () {
    const { deck, number } = this.props
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{deck}</Text>
        <Text style={styles.number}>{number} cards</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  }, 
  title: {
    fontSize: 30
  },
  number: {
    color: 'grey'
  },
})

export default DeckCard
