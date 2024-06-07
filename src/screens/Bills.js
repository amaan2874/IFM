import React, { useState } from 'react'
import { View,Text,TextInput,Pressable, Image } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Bills = ({navigation}) => {
    const [selectedImage,setSelectedImage] =useState(null);
    const handleCameraOpen=()=>{
            const options = {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 2000,
              maxWidth: 2000,
            };
          
            launchCamera(options, response => {
              if (response.didCancel) {
                console.log('User cancelled camera');
              } else if (response.error) {
                console.log('Camera Error: ', response.error);
              } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
                console.log(imageUri);
              }
            });
    };
    const handleGalleryOpen=()=>{
            const options = {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 2000,
              maxWidth: 2000,
            };
        
            launchImageLibrary(options, (response) => {
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('Image picker error: ', response.error);
              } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
              }
            });
    };

  return (
    <View>
    <View style={{ marginHorizontal: 'auto', display: 'flex', flexDirection: 'row', width: 400 }}>
        <Text onPress={() => navigation.navigate('Got')} style={{ fontSize: 50, color: 'black',marginLeft:3 }}>{"<"}</Text>
        <Text style={{ fontSize: 20, color:'black', fontWeight: 'bold', marginVertical: 'auto', marginHorizontal: 'auto' }}>Add Collection Type</Text>
    </View>

    <View>
        <TextInput
            placeholder="Enter amount"
            style={{
                fontSize: 18,
                color: 'black',
                borderWidth: 2,
                borderColor: 'black',
                margin: 10,
                marginStart: 30,
                marginEnd: 30,
                padding: 10,
                borderRadius: 5
            }}
            keyboardType={"number-pad"} />

    </View>

    <View>
        <TextInput
            placeholder="Enter Deatails(item,bill no,quantity,etc)"
            style={{
                fontSize: 18,
                color: 'black',
                borderWidth: 2,
                borderColor: 'black',
                margin: 10,
                marginStart: 30,
                marginEnd: 30,
                padding: 10,
                borderRadius: 5
            }}
            keyboardType={"default"} />

    </View>
    <View style={{height:370,width:370,backgroundColor: '#eeeee4',marginHorizontal:'auto',marginTop:20}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'black',marginTop:10,marginLeft:30}}>Upload Profile</Text>

        <View style={{height:200,width:300,marginHorizontal:'auto',marginTop:20,borderColor:'black',borderWidth:2,borderStyle:'dashed'}}>

            <Image
            //  resizeMode='contain'
             source={selectedImage == null ?{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9q8ljXia4NEgP6Vlu0cVt9K8FOgKtJ821w&s"} : {uri:selectedImage}} style={{height:200,width:300}}/>

            {/* <Text style={{fontSize:35,fontWeight:'bold',color:'black',marginTop:70,textAlign:'center'}}>Drop file here</Text>
            
            <Text style={{fontSize:20,textAlign:'center'}}>support formate:PNG,JPG</Text> */}
            
        </View>
            
            

        <View style={{ display: 'flex', flexDirection: 'row',justifyContent:'center',marginTop:20,marginLeft:60}}>
                    <Pressable onPress={handleCameraOpen}>
                        <Text style={{
                            backgroundColor: '#bebeb6',
                            color: 'black',
                            height: 40,
                            width:100,
                            marginVertical:18,
                            borderRadius: 5,
                            fontSize: 15,
                            textAlign: 'center',
                            paddingTop: 8
                        }}>Camera</Text>
                    </Pressable>
                    <Pressable onPress={handleGalleryOpen}>
                        <Text style={{
                            backgroundColor: '#019863',
                            color: 'white',
                            height: 40,
                            width:100,
                            marginVertical:18,
                            marginLeft:20,
                            borderRadius: 5,
                            fontSize: 15,
                            textAlign: 'center',
                            paddingTop: 8
                        }}>Gallery</Text>
                    </Pressable>
                </View>

    </View>

    <Pressable onPress={()=>navigation.navigate('Gave')}>
                <Text style={{
                    backgroundColor: '#019863',
                    color: 'white',
                    height: 55,
                    width:350,
                    marginTop:150,
                    marginHorizontal:'auto',
                    borderRadius: 5,
                    fontSize: 25,
                    textAlign: 'center',
                    paddingTop: 8
                }}>Submit</Text>
            </Pressable>

</View>
  )
}

export default Bills
