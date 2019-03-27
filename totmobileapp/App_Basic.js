import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Header from './components/header/index';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  state = {
      companyName: 'TOT Academy',
      companyPhone: ['001','002'],
      companyAdress: {
         province: 'Bangkok',
         postcode: 11000
      }
  };

  componentDidMount() {}

  render() {
    const fullname = 'John';
    return (
      <View style={styles.container}>

        <Header title={this.state.companyName} subTitle={200} />

        <Text>{ this.state.companyName }</Text>
        <Text>
          { this.state.companyAdress.province } { this.state.companyAdress.postcode }
        </Text>

        <Text>เบอร์โทรศัพท์: </Text>
        {
           this.state.companyPhone.map((phone, index) => {
             return <Text key={index}>{phone}</Text>
           })
        }

        <Text style={styles.welcome} 
          onPress={
             () => {
                 this.setState({
                    companyName: 'TOT',
                    companyAdress: {
                      province: 'Bangkok',
                      postcode: 15000
                   } 
                 });
             }
          }>
          Hello {fullname}
        </Text>
        <Text style={styles.instructions}>To get started, {'\n'} edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 40, //font-size
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
