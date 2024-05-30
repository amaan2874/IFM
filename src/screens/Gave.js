import React from 'react'
import { View, Text, TextInput, Pressable} from 'react-native'

const Gave = ({navigation}) => {
    return (
        <View>
            <View style={{ marginHorizontal: 'auto', display: 'flex', flexDirection: 'row', width: 400 }}>
                <Text onPress={() => navigation.navigate('Expense')} style={{ fontSize: 50, color: 'black',marginLeft:3 }}>{"<"}</Text>
                <Text style={{ fontSize: 20, color: '#DE3B40', fontWeight: 'bold', marginVertical: 'auto', marginHorizontal: 'auto' }}>You Gave to $0 Jumma collection</Text>
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

            <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
                <TextInput
                    placeholder="09 Feb 2024"
                    style={{
                        fontSize: 18,
                        color: 'black',
                        borderWidth: 2,
                        borderColor: 'black',
                        marginHorizontal:'auto',
                        
                        padding: 10,
                        borderRadius: 5,
                        width: 150
                    }}
                    keyboardType={"number-pad"} />

                <TextInput
                    placeholder="Attach Bills"
                    style={{
                        fontSize: 18,
                        color: 'black',
                        borderWidth: 2,
                        borderColor: 'black',
                        marginHorizontal:'auto',
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
                        borderRadius: 5
                    }}
                    keyboardType={"default"} />

            </View>

            <Pressable onPress={()=>navigation.navigate('Gave')}>
                        <Text style={{
                            backgroundColor: '#DE3B40',
                            color: 'white',
                            height: 55,
                            width:350,
                            marginTop:150,
                            marginHorizontal:'auto',
                            borderRadius: 5,
                            fontSize: 25,
                            textAlign: 'center',
                            paddingTop: 8
                        }}>Save</Text>
                    </Pressable>

        </View>
    )
}


export default Gave
