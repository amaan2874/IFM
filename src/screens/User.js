import React from 'react'
import { View,Text,StyleSheet,Pressable, ScrollView} from 'react-native'
import Input from './Input'

const User = ({navigation}) => {
  return (
    <ScrollView>
        <Text style={{backgroundColor:'#019863',alignItems:'center',alignContent:'center',padding:30,marginTop:10,marginBottom:5,borderRadius:500,height:200,width:200,alignSelf:'center',fontSize:80,color:'white',paddingTop:45,textShadowOffset:{width:8,height:5},textDecorationColor:'black',textShadowRadius:3}}>IFM</Text>

<View style={{display:'flex',flexDirection:'row',alignSelf:'center'}}>
    <Text style={{fontSize:20,paddingHorizontal:50,paddingVertical:15,borderBottomWidth:2,borderBottomColor:'#019863'}}>User</Text>

    <Text onPress={()=>navigation.navigate('Administrator')} style={{fontSize:20,paddingHorizontal:50,paddingVertical:15}}>Administrator</Text>
</View>

<Input placeholder="First Name"keyboard="default" />
<Input placeholder="Last Name"keyboard="default" />
<Input placeholder="Email"keyboard="email-address"/>
<Input placeholder="Phone Number"keyboard="number-pad"/>
<Input placeholder="Password"keyboard="default" is_password={true}/>
<Input placeholder="Confirm Password"keyboard="default" is_password={true}/>

<Pressable>
    <Text onPress={()=>navigation.navigate('Login')} style={styles.Pressable}>SingUp</Text>
</Pressable>
<Text style={{textAlign:'center',fontSize:15,marginTop:1}}>Already Have an account <Text onPress={()=>navigation.navigate('Login')} style={{color:'#019863'}}>Login</Text> here</Text>
    </ScrollView>
  )
}

const styles= StyleSheet.create({
    Pressable:{
        backgroundColor:'#019863',
        color:'white',
        height:50,
        margin:30,
        marginTop:10,
        borderRadius:5,
        fontSize:25,
        textAlign:'center',
        paddingTop:10
        
    }
})

export default User;
