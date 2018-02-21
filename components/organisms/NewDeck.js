import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, 
         StyleSheet, 
         TouchableOpacity,
         TextInput,
         KeyboardAvoidingView } from 'react-native'
import { addDeck } from '../../actions'
import { saveDeckTitle } from '../../utils/api'
import { NavigationActions } from 'react-navigation'

class NewDeck extends Component {
  state = {
    input: ''
  }
  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }
  handleSubmit = (input) => {
    saveDeckTitle(input)
    const newDeck = {
      [input]: {
        title: input,
        questions: []
      }
    }
    this.props.addDeck(newDeck)
    this.props.navigation.navigate('Deck', { deck: newDeck[input] })
  }
  render () {
    const { input } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.newDeck}>
        <Text style={styles.question}>What is the title of your new deck?</Text>
        <TextInput 
          value={input}
          style={styles.input} 
          onChangeText={this.handleTextChange}
          placeholder='Deck Title'
        />
        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit(input)}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  newDeck: {
    marginTop: 50,
    alignItems: 'center'
  }, 
  question: {
    fontSize: 50,
    textAlign: 'center'
  },
  button: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    margin: 20,
  },
  buttonText :{
    color: 'white',
    fontSize: 20,
  }, 
  input: {
    height: 44,
    width: 200,
    padding: 8,
    borderColor: '#757575',
    borderWidth: 1,
    margin: 50
  }
})

export default connect(null, { addDeck })(NewDeck)
