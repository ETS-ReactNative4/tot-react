import React, { Component } from 'react'
import { FlatList, StyleSheet, View,ActivityIndicator } from 'react-native'
import axios from 'axios'
import { Container, Header, Content, List, Badge,ListItem,Card,CardItem, Thumbnail, Text , Left, Body, Right, Button } from 'native-base';


export default class DetailScreen extends Component {


  static navigationOptions = ({navigation}) => ({
      title : navigation.getParam('dtitle',''),
  })


  state = {
    chapters:[],
    loading: true
  }

async getData(id){
  // alert('https://api.codingthailand.com/api/course/'+id);
  const response = await axios.get('https://api.codingthailand.com/api/course/'+id);


  this.setState({
    chapters: response.data.data,
      loading: false
  })
  // alert(JSON.stringify(this.state.chapters))
  // alert(this.state.chapters)

}


_renderItem = ({item}) => {
  let color = 'green'
  if(item.view>20000) color = 'red';
  
      return (
        <Card>
        <CardItem header>
          <Text>{item.ch_title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
            {item.ch_title}
            </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text>Last modified: {item.ch_dateadd}  {item.ch_timetotal}</Text>
        </CardItem>
     </Card>
      )
    }

componentDidMount(){
  const id = this.props.navigation.getParam('did',0);
  this.getData(id)
}

  render() {
    return (
      <View>
      {
        this.state.loading === true ? (
          <ActivityIndicator size='large' color='red' />
        ) : (
          <FlatList
          data = {this.state.chapters}
          keyExtractor={(item) => item.ch_id.toString()}
          renderItem={this._renderItem}
        /> 
     
        )
      }
       </View>
    )
  }
}

const styles = StyleSheet.create({})
