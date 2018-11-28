import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

export type Style = {
    container: ViewStyle
    welcome: TextStyle
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default styles
