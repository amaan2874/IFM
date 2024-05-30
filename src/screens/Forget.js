import React from 'react'
import { View,Text,Pressable,StyleSheet } from 'react-native'
import Input from './Input'

const Forget = ({navigation}) => {
  return (
    <View>
        <Text style={{backgroundColor:'#019863',alignItems:'center',alignContent:'center',padding:30,marginTop:120,marginBottom:50,borderRadius:500,height:200,width:200,alignSelf:'center',fontSize:80,color:'white',paddingTop:45,textShadowOffset:{width:8,height:5},textDecorationColor:'black',textShadowRadius:3}}>IFM</Text>

        <Input placeholder="Email Address"keyboard="email-address"/>

        <Pressable>
                <Text onPress={()=>navigation.navigate('Login')} style={styles.Pressable}>Reset</Text>
            </Pressable>

            <Text style={{textAlign:'center',fontSize:20,marginTop:1}}>Already Have an account <Text onPress={()=>navigation.navigate('Login')} style={{color:'#019863'}}>Login</Text></Text>
    </View>
  )
}

const styles= StyleSheet.create({
    Pressable:{
        backgroundColor:'#019863',
        color:'white',
        height:50,
        margin:30,
        borderRadius:5,
        fontSize:25,
        textAlign:'center',
        paddingTop:10
        
    }
})

export default Forget
