import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class MenuScreen extends Component {
 
   state = {
     profile : {}
   }
 
   render() {


     AsyncStorage.getItem('@profile').then((profile) => {
      this.setState({
        profile : JSON.parse(profile)
      })
     }
    )
    
    //alert(JSON.stringify(this.state.profile))


    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 40}}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}> เมนูหลัก </Text>

        { this.state.profile && 
          <View>
          <Text style={{ color: 'red', textAlign: 'center', fontSize: 20 }}>{this.state.profile.name}</Text>
          <Text style={{ color: 'red', textAlign:'center', fontSize: 20 }}>{this.state.profile.email}</Text>
          </View>
        

        }
       
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

        {
          this.state.profile && (
            <TouchableHighlight 
            onPress={ () => { 
              AsyncStorage.removeItem('@token');
              AsyncStorage.removeItem('@profile');
              this.props.navigation.closeDrawer();
               
            } } style={{marginTop: 30}}>
                  <View style={ {width: 250, backgroundColor: '#0075c4', alignItems: 'center' } }>
                    <Text style={{ color: 'red', padding: 20, fontSize: 20  }}>Logout</Text>
                  </View>
            </TouchableHighlight>
          )

        }

        
 

        
      </View>
    )
  }
}

const styles = StyleSheet.create({})
