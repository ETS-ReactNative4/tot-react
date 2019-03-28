import React, { Component } from 'react'
import { FlatList, StyleSheet, View,ActivityIndicator,TouchableOpacity } from 'react-native'
import axios from 'axios'
import { Image } from 'react-native';
import { Container, Header, Content,Icon, Card, CardItem,List, Badge,ListItem, Thumbnail, Text , Left, Body, Right, Button } from 'native-base';



export default class NewsScreen extends Component {
  static navigationOptions = {
    title: 'News',
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
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=th&apiKey=ab0d4aca4cea481e8157d31c68eb2b23');
    this.setState({
      products: response.data.articles,
      loading: false
    })
    // alert(JSON.stringify(response.data.data))
    //alert(JSON.stringify(this.state.products))
    
  }

  //entry point
  componentDidMount(){
    this.getData()
  }


  _onRefresh =()=>{
    this.setState({loading:true})
    this.getData()
  }

  _renderItem = ({item}) => {
    let color = 'blue'
    if(item.view>20000) color = 'darkblue';

    return (
      <TouchableOpacity 
      onPress={ () => {
        this.props.navigation.navigate('Web',{
          url:item.url
        });
      }} 
      >

      <Card pointerEvents='none'>

      <CardItem>
        <Left>
          {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
          <Body>
            <Text>{item.title}</Text>
            <Text note>{item.source.name}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody button 
       onPress={ () => {
        this.props.navigation.navigate('Web',{
          url:item.url
        });
      }} 
      >
          <Image source={{uri: item.urlToImage}} style={{height: 200, width: null, flex: 1}}/>
      </CardItem>
      <CardItem>
      <Text>
            {item.description}
          </Text>
          </CardItem>
      <CardItem>
        <Left>
          <Button transparent textStyle={{color: '#87838B'}} >
            <Icon name="logo-github" />
            <Text>{item.publishedAt}</Text>
          </Button>
        </Left>
      </CardItem>
  
    </Card>
 
    </TouchableOpacity>
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
            keyExtractor={(item) => item.title}
            renderItem={this._renderItem}
            refreshing={this.state.loading}
            onRefresh={this._onRefresh}
          /> 
       
          )
        }
         </View>
    )
  }
}

const styles = StyleSheet.create({})
