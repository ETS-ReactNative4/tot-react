import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity,Image} from 'react-native'
import { RNCamera, FaceDetector } from 'react-native-camera';
import axios from 'axios'

export default class CameraScreen extends Component {

state = {
  image : {},
  barcode : ''
}

async uploadImage (){
    const uploadURL = 'https://api.codingthailand.com/api/upload';
    const response = await axios.post(uploadURL,{
      picture : this.state.image.uri
    })
    alert(response.data.data.message+'\n'+response.data.data.url)
    // alert(response.data.data.message)
}

readBarcode = (e) => {
  this.setState({
    barcode : e.data
  })
}

  render() {
    return (
      <View style={styles.container}>

        {
          !this.state.image.uri && (
            <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.auto}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            // onGoogleVisionBarcodesDetected={({ barcodes }) => {
            //   console.log(barcodes);
            // }}
            onBarCodeRead={this.readBarcode}
          />
          )

        }

        {
          this.state.image.uri && (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}
            >

            <Text style={{fontSize:18,color: 'red'}}>{this.state.barcode}</Text>
              <Image source = {{uri:this.state.image.uri}}
                style={{width:400,height:400,margin:10,flex:1}}
              />
              </View>

          )

        }

        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> ถ่ายรูป </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.setState({image:{}})} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> ถ่ายรูป Again </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true , width:400, fixOrientation: true};
      const image = await this.camera.takePictureAsync(options);
      //alert(JSON.stringify(image));
      this.setState({
        image:{
          uri:'data:image/jpeg;base64,'+image.base64
        }
      })
      this.uploadImage()
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});