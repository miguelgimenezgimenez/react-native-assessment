import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../../actions' 
import { getDecks } from '../../utils/api'
import DeckList from '../molecules/DeckList'

class Decks extends Component {
  componentDidMount () {
    getDecks().then(decks => this.props.receiveDecks(JSON.parse(decks)))
  }
  render () {
    const { decks, navigation } = this.props
    return (
      <View>
        <DeckList decks={decks} navigation={navigation} />
      </View>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps, { receiveDecks })(Decks)
