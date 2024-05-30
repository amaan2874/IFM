import React from 'react'
import { View,TextInput} from 'react-native'

const Input = ({placeholder , keyboard,is_password }) => {
  return (
    <View>
        <TextInput
        placeholder={placeholder}
            style={{fontSize:18,
                color:'black',
                borderWidth:2,
                borderColor:'black',
                margin:10,
                marginStart:30,
                marginEnd:30,
                padding:10,
                borderRadius:5}}
                secureTextEntry={is_password}
                keyboardType={keyboard} />
            
    </View>
  )
}


export default Input
