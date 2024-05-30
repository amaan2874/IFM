import React, { useState } from 'react'
import { View,Text } from 'react-native'

const Splash = ({navigation}) => {
  useState(()=>{
    setTimeout(()=>{
      navigation.navigate('IFM')
    },1000)
  },[])
  return (
    <View style={{padding:30}}>
        <Text style={{backgroundColor:'#019863',alignItems:'center',alignContent:'center',padding:30,marginTop:180,borderRadius:500,height:200,width:200,alignSelf:'center',fontSize:80,color:'white',paddingTop:45,textShadowOffset:{width:8,height:5},textDecorationColor:'black',textShadowRadius:3}}>IFM</Text>
        
        <Text style={{fontSize:50,marginVertical:30,marginHorizontal:'auto',color:'black'}}>Loding.....</Text>
    </View>



  )
}

export default Splash
