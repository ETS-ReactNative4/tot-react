import React, { Component } from 'react'
import { FlatList, StyleSheet, View,ActivityIndicator } from 'react-native'
import axios from 'axios'
import { Container, Header, Content, List, Badge,ListItem, Thumbnail, Text , Left, Body, Right, Button } from 'native-base';

export default class ProductScreen extends Component {
  static navigationOptions = {
    title: 'สินค้า',
    headerStyle: {
      backgroundColor: '#0075c4'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
       fontWeight: 'bold'
    }
  }

  state = {
    products:[],
    loading: true
  }
  


  async getData(){
    const response = await axios.get('https://api.codingthailand.com/api/course');
    this.setState({
      products: response.data.data,
      loading: false
    })
    // alert(JSON.stringify(response.data.data))
   // alert(JSON.stringify(this.state.products))
    
  }

  //entry point
  componentDidMount(){
    this.getData()
  }

  // _renderItem = ({item}) => {
  //   return (
  //     <View>
  //     <Text style={{fontSize:16}}>{item.title}</Text>
  //     <Text>{item.detail}</Text>
  //     </View>
  //   )
  // }

  _renderItem = ({item}) => {
let color = 'blue'
if(item.view>20000) color = 'darkblue';

    return (
      <ListItem thumbnail 
      onPress={ () => {
        this.props.navigation.navigate('Detail',{
          dtitle : item.title,
          did : item.id
        });
       }}
      >
      <Left>
        <Thumbnail square source={{ uri: item.picture }} />
      </Left>
      <Body>
        <Text style={{color: color}}>{item.title}</Text>
        <Text note numberOfLines={2}>{item.detail}</Text> 
      </Body>
      <Right>

        <Badge style={{backgroundColor: item.view>20000?'red':'green' }}>
          <Text>{item.view}</Text >
        </Badge>
      </Right>
    </ListItem>

    )
  }

 

  render() {
    return (
      <View>
        {
          this.state.loading === true ? (
            <ActivityIndicator size='large' color='red' />
          ) : (
            <FlatList
            data = {this.state.products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={this._renderItem}
          /> 
       
          )
        }
         </View>
    )
  }
}

const styles = StyleSheet.create({})
