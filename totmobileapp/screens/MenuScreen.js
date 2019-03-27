import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'

export default class MenuScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 40}}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}> เมนูหลัก </Text>
        
        <TouchableHighlight 
        onPress={ () => {
          this.props.navigation.navigate('Product');

         }} style={{marginTop: 30}}>
              <View style={ {width: 250, backgroundColor: '#0075c4', alignItems: 'center' } }>
                <Text style={{ color: 'white', padding: 20, fontSize: 20 }}>สินค้า</Text>
              </View>
        </TouchableHighlight>

        <TouchableHighlight 
        onPress={ () => { 
           
        } } style={{marginTop: 30}}>
              <View style={ {width: 250, backgroundColor: '#0075c4', alignItems: 'center' } }>
                <Text style={{ color: 'white', padding: 20, fontSize: 20  }}>แผนที่</Text>
              </View>
        </TouchableHighlight>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({})
