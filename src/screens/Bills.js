import React from 'react'
import { View,Text,TextInput,Pressable } from 'react-native'

const Bills = ({navigation}) => {
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

            <Text style={{fontSize:35,fontWeight:'bold',color:'black',marginTop:70,textAlign:'center'}}>Drop file here</Text>
            
            <Text style={{fontSize:20,textAlign:'center'}}>support formate:PNG,JPG</Text>
            
            
            

        </View>
        <View style={{ display: 'flex', flexDirection: 'row',justifyContent:'center',marginTop:20,marginLeft:60}}>
                    <Pressable onPress={()=>navigation.navigate('Gave')}>
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
                    <Pressable onPress={()=>navigation.navigate('Got')}>
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
