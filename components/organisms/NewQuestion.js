import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView,
         View, 
         TextInput, 
         StyleSheet,
         TouchableOpacity,
         Text } from 'react-native'
import { addCard } from '../../actions'
import { addCardToDeck } from '../../utils/api'

class NewQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }
  handleQuestionChange = (question) => {
    this.setState(() => ({
      question
    }))
  }
  handleAnswerChange = (answer) => {
    this.setState(() => ({
      answer
    }))
  }
  handleSubmit = (card) => {
    const { title } = this.props.navigation.state.params
    addCardToDeck(title, card)
    this.props.addCard(title, card)
    this.props.navigation.goBack()
  }
  render () {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView style={styles.newQuestionContainer}>
        <View style={styles.inputContainer}>
          <TextInput 
            value={question}
            onChangeText={this.handleQuestionChange}
            style={styles.input}
            placeholder='Enter question here'
          />
          <TextInput 
            value={answer}
            onChangeText={this.handleAnswerChange}
            style={styles.input}
            placeholder='Enter answer here'
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit(this.state)}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  newQuestionContainer: {
    alignItems: 'center'
  },
  button: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    margin: 30,
  },
  buttonText :{
    color: 'white',
    fontSize: 20,
  },
  inputContainer: {
    marginTop: 50
  },
  input: {
    height: 44,
    width: 300,
    padding: 8,
    borderColor: '#757575',
    borderWidth: 1,
    margin: 20
  }
})

export default connect(null, { addCard })(NewQuestion)
