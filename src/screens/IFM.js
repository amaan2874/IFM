import React from 'react';
import {Pressable, Text, View,StyleSheet} from 'react-native';

const IFM = ({navigation}) =>{
  return(
    <View style={{padding:30}}>
      <Text style={{backgroundColor:'#019863',alignItems:'center',alignContent:'center',padding:30,marginTop:180,borderRadius:500,height:200,width:200,alignSelf:'center',fontSize:80,color:'white',paddingTop:45,textShadowOffset:{width:8,height:5},textDecorationColor:'black',textShadowRadius:3}}>IFM</Text>


      <Text style={{color:'#019863',fontSize:18,textAlign:'center',marginTop:50,marginBottom:70,textShadowOffset:{width:1,height:1},textDecorationColor:'black',textShadowRadius:2}}>Innovation with Integrity,Roooted in Islam</Text>

      <Pressable>
                <Text onPress={()=>navigation.navigate('Login')} style={styles.Pressable}>Start</Text>
            </Pressable>

      
      
    </View>
  );
};

const styles= StyleSheet.create({
  
  Pressable:{
      backgroundColor:'#019863',
      color:'white',
      height:50,
      margin:5,
      borderRadius:5,
      fontSize:25,
      textAlign:'center',
      paddingTop:10
      
  }
})


export default IFM;