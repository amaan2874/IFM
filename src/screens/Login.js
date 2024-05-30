import React from "react";
import {StyleSheet, Text,View, Pressable} from 'react-native'
import Input from "./Input";

const Login =({navigation})=>{
    return(
        <View>
            <Text style={{backgroundColor:'#019863',alignItems:'center',alignContent:'center',padding:30,marginTop:100,marginBottom:5,borderRadius:500,height:200,width:200,alignSelf:'center',fontSize:80,color:'white',paddingTop:45,textShadowOffset:{width:8,height:5},textDecorationColor:'black',textShadowRadius:3}}>IFM</Text>

            <Input placeholder="Username"keyboard="default"/>
            <Input placeholder="Password"keyboard="default" is_password={true}/>

            <Text onPress={()=>navigation.navigate('Forget')} style={{color:'#019863',padding:15,paddingStart:220,fontSize:15}}>Forget Password ?</Text>

            <Pressable>
                <Text onPress={()=>navigation.navigate('MainScreen')} style={styles.Pressable}>Login</Text>
            </Pressable>
            <Text style={{textAlign:'center',fontSize:15}}>If you don't Have an account <Text onPress={()=>navigation.navigate('User')} style={{color:'#019863'}}>regester</Text> here</Text>
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

export default Login;