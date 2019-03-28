import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview';

export default class WebScreen extends Component {
  render() {
    return (
        <WebView
            source={{uri:this.props.navigation.getParam('url','https://google.com')}}
            style={{marginTop:0}}
            useWebKit={true}
        />
    )
  }
}

const styles = StyleSheet.create({})
