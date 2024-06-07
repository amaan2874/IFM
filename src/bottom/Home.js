import React from 'react'
import { View, Text, TextInput, Pressable, ScrollView, Image } from 'react-native'
// const logoImg = require('./assets/back.png');

const Home = ({navigation}) => {
  return (
    <ScrollView style={{ margin: 10 }}>
        <View style={{ backgroundColor: '#019863', height: 60, width: 350, alignSelf: 'center', flex:1 }}>
            <Text style={{ fontSize: 30,paddingHorizontal:10,paddingVertical:10,color:'white' }}>hii Amaan!</Text>
        </View>
        <TextInput
            placeholder="What you want to listen to"
            style={{
                fontSize: 18,
                color: 'black',
                backgroundColor:'white',
                borderWidth: 2,
                borderColor: 'black',
                margin: 30,
                marginStart: 10,
                marginEnd: 10,
                padding: 10,
                paddingLeft: 29,
                borderRadius: 100
            }} />

        <View style={{ backgroundColor: '#019863', height: 170, width: 350, alignSelf: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row' }}>
            <Text style={{ fontSize: 30, paddingLeft: 20, paddingTop: 20, fontWeight: 'bold' }}>Well Come</Text>
            <View style={{ backgroundColor: 'white', height: 110, width: 110, borderRadius: 100, marginHorizontal: 40, marginVertical: 20 }}>
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhBNpkgjs3XiMKEgrTI3fAzQyHoHVB9AMfHU5bjwSW4ckBIgiOd961TtfF2zGZWFWT1E&usqp=CAU" }} style={{ width: 110, height: 110, borderRadius: 100 }} />
            </View>
        </View>

         {/* sufi masjid */}
        <View style={{ backgroundColor: '#fafaf7', height: 150, width: 370, alignSelf: 'center', borderRadius: 10, marginVertical: 25, display: 'flex', flexDirection: 'row' }}>

            <View style={{ backgroundColor: 'white', height: 110, width: 110, borderRadius: 2, marginHorizontal: 20, marginVertical: 20 }}>
                <Image source={{uri:"https://i.pinimg.com/564x/fb/f7/ed/fbf7edfcb9e90e0bb8b95abbc865f0da.jpg"}} style={{width:110,height:110}}/>
            </View>

            <View style={{ backgroundColor: '#fafaf7', height: 110, width: 200, borderRadius: 2, marginVertical: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sufi Masjid</Text>
                <Text>Praveen Nagar Amravati</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Pressable onPress={()=>navigation.navigate('SeeDetails')}>
                        <Text style={{
                            backgroundColor: 'white',
                            color: '#019863',
                            height: 40,
                            width:95,
                            marginVertical:18,
                            borderRadius: 5,
                            borderColor:'#019863',
                            borderWidth:2,
                            fontSize: 15,
                            textAlign: 'center',
                            paddingTop: 8
                        }}>See Details</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={{
                            backgroundColor: '#019863',
                            color: 'white',
                            height: 40,
                            width:95,
                            marginVertical:18,
                            marginLeft:10,
                            borderRadius: 5,
                            fontSize: 15,
                            textAlign: 'center',
                            paddingTop: 8
                        }}>Follow</Text>
                    </Pressable>
                </View>
            </View>

        </View>

        {/* raza masjid */}
        <View style={{ backgroundColor: '#fafaf7', height: 150, width: 370, alignSelf: 'center', borderRadius: 10, marginVertical: 5, display: 'flex', flexDirection: 'row' }}>

            <View style={{ backgroundColor: 'white', height: 110, width: 110, borderRadius: 2, marginHorizontal: 20, marginVertical: 20 }}>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9M-Zo-f3UW9J6-n7CmT4xMt76yDkYKQiCXw&s"}} style={{width:110,height:110}}/>
            </View>

            <View style={{ backgroundColor: '#fafaf7', height: 110, width: 200, borderRadius: 2, marginVertical: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Raza Masjid</Text>
                <Text>Amravati</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Pressable>
                        <Text style={{
                            backgroundColor: 'white',
                            color: '#019863',
                            height: 40,
                            width:95,
                            marginVertical:18,
                            borderRadius: 5,
                            borderColor:'#019863',
                            borderWidth:2,
                            fontSize: 15,
                            textAlign: 'center',
                            paddingTop: 8
                        }}>See Details</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={{
                            backgroundColor: '#019863',
                            color: 'white',
                            height: 40,
                            width:95,
                            marginVertical:18,
                            marginLeft:10,
                            borderRadius: 5,
                            fontSize: 15,
                            textAlign: 'center',
                            paddingTop: 8
                        }}>Follow</Text>
                    </Pressable>
                </View>
            </View>

        </View>

        {/* sufi masjid */}
        <View style={{ backgroundColor: '#fafaf7', height: 150, width: 370, alignSelf: 'center', borderRadius: 10, marginVertical: 5, display: 'flex', flexDirection: 'row' }}>

            <View style={{ backgroundColor: 'white', height: 110, width: 110, borderRadius: 2, marginHorizontal: 20, marginVertical: 20 }}>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CkS9TCrCH3ZEiuZ7l7d7aNI4Mc9n7-A9dQ&s"}} style={{width:110,height:110}}/>
            </View>

            <View style={{ backgroundColor: '#fafaf7', height: 110, width: 200, borderRadius: 2, marginVertical: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Jama Masjid</Text>
                <Text>Praveen Nagar Amravati</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Pressable>
                        <Text style={{
                            backgroundColor: 'white',
                            color: '#019863',
                            height: 40,
                            width:95,
                            marginVertical:18,
                            borderRadius: 5,
                            borderColor:'#019863',
                            borderWidth:2,
                            fontSize: 15,
                            textAlign: 'center',
                            paddingTop: 8
                        }}>See Details</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={{
                            backgroundColor: '#019863',
                            color: 'white',
                            height: 40,
                            width:95,
                            marginVertical:18,
                            marginLeft:10,
                            borderRadius: 5,
                            fontSize: 15,
                            textAlign: 'center',
                            paddingTop: 8
                        }}>Follow</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    </ScrollView>
        
)
}

export default Home
