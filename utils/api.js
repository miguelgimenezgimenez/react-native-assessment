import { AsyncStorage } from 'react-native'

export function getDecks () {
  return AsyncStorage.getItem('UdaciCards')
}

export function getDeck (title) {
  return AsyncStorage.getItem('UdaciCards')
    .then(results => {
      const data = JSON.parse(results)
      return data[title]
    })
}

export function saveDeckTitle (title) {
  return AsyncStorage.getItem('UdaciCards')
    .then(results => {
      const data = JSON.parse(results)
      data[title] = {
        title,
        questions: []
      }
      AsyncStorage.setItem('UdaciCards', JSON.stringify(data))
    })
}

export function addCardToDeck (title, card) {
  return AsyncStorage.getItem('UdaciCards')
    .then(results => {
      const data = JSON.parse(results)
      data[title] = {
        title, 
        questions: data[title].questions.concat(card)
      }
      AsyncStorage.setItem('UdaciCards', JSON.stringify(data))
    })
}
