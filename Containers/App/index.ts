import React from 'react'
import { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

export interface Props {
  test: number
}

export interface State {
  test: number
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    if ((props.test || 0) <= 0) {
      throw new Error('Test error')
    }

    this.state = {
      test: props.test || 1
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    )
  }
}
