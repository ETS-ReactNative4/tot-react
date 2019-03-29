import React, { Component } from 'react'
import { Text, StyleSheet, View ,Alert, Keyboard} from 'react-native'
import { DatePicker,Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import format from 'date-fns/format'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
        headerStyle: {
          backgroundColor: '#0075c4'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
           fontWeight: 'bold'
        }
      }

state = {
    email: '',
    password: '',
}

_login= async () =>  {
    try {
        const apiUrl = 'https://api.codingthailand.com/api/login';
        const response = await axios.post(apiUrl,this.state)
    
        
        //alert(JSON.stringify(response.data))
        
        const token = response.data.access_token
      //  alert(JSON.stringify(error.response.data))
        //Alert.alert('ผลการทำงาน', token,[{text:'ตกลง'}] )
        

        //Store Profile
        await AsyncStorage.setItem('@token',JSON.stringify(response.data))

        try {
            //Get Profile

            const urlProfile = 'https://api.codingthailand.com/api/me';
            const responseProfile = await axios.post(urlProfile,{},{
                headers: {
                    Authorization : 'Bearer '+ token
                }   
                })
           // alert(JSON.stringify(responseProfile.data.data))

  
            //Store Profile
            await AsyncStorage.setItem('@profile',JSON.stringify(responseProfile.data.data.user))
           // alert(JSON.stringify(responseProfile.data.data.user))
            this.props.navigation.navigate('Home')

        } catch (error) {
            alert('error : '+JSON.stringify(error))
        }


    } catch (error) {
        //alert(JSON.stringify(error.response.data))
        if(error.response.data) {
           Alert.alert('ผลการทำงาน', error.response.data.message,[{text:'ตกลง'}] )
        }
    } 
    Keyboard.dismiss()

}

  render() {
    return (
      <Container>
          <Content>
        <Form>
        <Item floatingLabel>
            <Label>email</Label>
            <Input
                
                onChangeText = {
                    (email) => {
                    this.setState({
                        email
                    })
                    // alert(this.state.name)
                }
             }
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} 
             onChangeText={(password)=>{
                this.setState({password})
                // alert(this.state.password)
            }
            }
            />
          </Item>
       
          <Button block primary
            onPress={
                this._login
            }
          >
          <Text> Login </Text>
          </Button>
        </Form>
        </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({})
