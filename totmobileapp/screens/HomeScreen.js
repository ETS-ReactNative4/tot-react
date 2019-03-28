import React, { Component } from 'react'
import { Text,Image, StyleSheet, View, TouchableHighlight } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';

import { Container, Header, Content, Button, Text as NbText} from 'native-base';


const IoniconsHeaderButton = passMeFurther => (
  <HeaderButton {...passMeFurther} IconComponent={Icon} iconSize={30} color="white" />
);

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'หน้าหลัก',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item title="menu" iconName="ios-menu" onPress={() => navigation.openDrawer() } />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item title="register" iconName="ios-person-add" 
          onPress={ () => navigation.navigate('Register')}
        />
        <Item title="Login" 
        
        onPress={() => alert('Login')} 
        
        />
      </HeaderButtons>
    ),
    headerStyle: {
      backgroundColor: '#0075c4'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
       fontWeight: 'bold'
    }
  });

  render() {
    return (
      <View style={styles.container}>

        {/* <Icon name="ios-home" size={80} color='#0075c4' />  */}
        <Image source={require('../assets/images/tot.png')} 
               style={{width : 300, height: 100, marginBottom: 20}}
          />

        <TouchableHighlight 
        onPress={ () => {
          this.props.navigation.navigate('About',{
             email: 'codingthailand@gmail.com'
          }); 
        } }>
              <View style={ {width: 250, backgroundColor: '#0075c4', alignItems: 'center' } }>
                <Text style={{ color: 'white', padding: 20 }}>เกี่ยวกับเรา</Text>
              </View>
        </TouchableHighlight>
        <Button block success
        onPress={ () => {
          this.props.navigation.navigate('Product');

         }} 
        >
        
            <NbText>สินค้า</NbText>
          </Button>
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
