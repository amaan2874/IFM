import React from 'react'
import { View,Text,TextInput,Pressable} from 'react-native'

const Got = ({navigation}) => {
  return (
    <View>
    <View style={{  display: 'flex', flexDirection: 'row',marginHorizontal:10 }}>

        <Text onPress={() => navigation.navigate('Expense')} style={{ fontSize: 30, color: '#019863',marginLeft:3,flex:1 ,flex:1,textAlign:'center'}}>{"<"}</Text>

        <Text style={{ fontSize: 20, color: '#019863', fontWeight: 'bold', marginVertical: 'auto',flex:7,textAlign:'center' }}>You Got to $0 Jumma collection</Text>

        <Text style={{ fontSize: 30, color: '#019863', fontWeight: 'bold',textAlign:'center',flex:1 ,lineHeight:33}}>...</Text>


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
                borderRadius: 5,
                width:350
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
                borderRadius: 5,
                width:350
            }}
            keyboardType={"default"} />

    </View>

    <View style={{display:'flex',flexDirection:'row',marginTop:10,width:350,alignSelf:'center',justifyContent:'space-between'}}>
        <TextInput
            placeholder="09 Feb 2024"
            style={{
                fontSize: 18,
                color: 'black',
                borderWidth: 2,
                borderColor: 'black',
                padding: 10,
                borderRadius: 5,
                width: 150
            }}
            keyboardType={"default"} />

        <TextInput
         onPress={()=>navigation.navigate('Bills')}
            placeholder="Attach Bills"
            style={{
                fontSize: 18,
                color: 'black',
                borderWidth: 2,
                borderColor: 'black',
                padding: 10,
                borderRadius: 5,
                width: 150
            }}
            keyboardType={"number-pad"} />

    </View>

    <View>
        <TextInput
            placeholder="Online"
            style={{
                fontSize: 18,
                color: 'black',
                borderWidth: 2,
                borderColor: 'black',
                marginTop:20,
                marginStart: 30,
                marginEnd: 30,
                padding: 10,
                borderRadius: 5,
                width:350
            }}
            keyboardType={"default"} />

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
                    paddingTop: 8,
                    width:350
                }}>Save</Text>
            </Pressable>

</View>
  )
}

export default Got
