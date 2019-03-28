import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
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
    const apiUrl = 'https://api.codingthailand.com/api/register';
    const response = await axios.post(apiUrl,this.state)
    alert(JSON.stringify(response.data))
    this.props.navigation.navigate('Home')
}

  render() {
    return (
      <Container>
          <Content>
        <Form>
        <Item floatingLabel>
            <Label>Username</Label>
            <Input 
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
            <Input keyboardType='email-address'
                onChangeText={(email)=>{
                    this.setState({email})
                    // alert(this.state.email)
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
          <Item>
            <Label>Birth Date</Label>
          <DatePicker
            defaultDate={new Date()}
            // minimumDate={new Date(2018, 1, 1)}
            // maximumDate={new Date(2018, 12, 31)}
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
