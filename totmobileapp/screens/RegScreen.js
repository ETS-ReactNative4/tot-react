import React, { Component } from 'react'
import { Text, StyleSheet, View ,Alert, Keyboard} from 'react-native'
import { DatePicker,Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import format from 'date-fns/format'
import axios from 'axios'

export default class RegScreen extends Component {
    static navigationOptions = {
        title: 'Register',
        headerStyle: {
          backgroundColor: '#0075c4'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
           fontWeight: 'bold'
        }
      }

state = {
    name: '',
    email: '',
    password: '',
    dob: '',
}

_register = async () =>  {
    try {
        const apiUrl = 'https://api.codingthailand.com/api/register';
        const response = await axios.post(apiUrl,this.state)
    
        Alert.alert('ผลการทำงาน', response.data.message,[{text:'ตกลง'}] )
        //JSON.stringify(response.data)
        //this.props.navigation.navigate('Home')
        
    } catch (error) {
        Alert.alert('ผลการทำงาน', error.response.data.errors.email[0],[{text:'ตกลง'}] )
    } finally{
        this.name.clear();
        this.name.focus();
        Keyboard.dismiss()
    }
    Keyboard.dismiss()

}

  render() {
    return (
      <Container>
          <Content>
        <Form>
        <Item floatingLabel>
            <Label>Username</Label>
            <Input defaultValue='aaa'
                ref= {(name) => {
                    this.name = name
                }}
                onChangeText = {
                    (name) => {
                    this.setState({
                        name
                    })
                    // alert(this.state.name)
                }
             }
            />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input keyboardType='email-address' defaultValue='aaa@aaa.com'
                onChangeText={(email)=>{
                    this.setState({email})
                    // alert(this.state.email)
                }
                }
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} defaultValue='aaaaaaa'
             onChangeText={(password)=>{
                this.setState({password})
                // alert(this.state.password)
            }
            }
            />
          </Item>
          <Item>
            <Label>Birth Date</Label>
          <DatePicker
            defaultDate={new Date()}
            locale={"th"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="เลือกวันเกิด"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={ 
                (dateOfBirth) => {
                    this.setState(
                    {
                        dob:  format(dateOfBirth,'YYYY-MM-DD')
                    }
                    )
                    // alert(this.state.dob)
                } 
            }
            disabled={false}
            />
            </Item>
          <Button block primary
            onPress={
                this._register
            }
          >
          <Text> สมัครสมาชิก </Text>
          </Button>
        </Form>
        </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({})
