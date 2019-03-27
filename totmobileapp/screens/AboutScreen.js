import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class AboutScreen extends Component {
  static navigationOptions = {
    title: 'เกี่ยวกับ',
    headerStyle: {
      backgroundColor: '#0075c4'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
       fontWeight: 'bold'
    }
  };

  render() {
    const email = this.props.navigation.getParam('email','');

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>อีเมล์ : {email} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
})
