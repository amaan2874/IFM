import React from 'react'
import { View, Text, ScrollView, TextInput, Pressable,Image } from 'react-native'

const Collection = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white', height: 150, width: 330, marginHorizontal: 'auto', marginTop: 30, marginBottom: 40, borderRadius: 10 }}>

                <View style={{ height: 70, width: 300, marginTop: 20, display: 'flex', flexDirection: 'row', borderColor: 'black', borderBottomWidth: 2, marginHorizontal: 'auto' }}>

                    <View style={{ marginRight: 'auto' }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>You will give</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#019863' }}>$8.90.00</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>You will get</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#DE3B40' }}>$8.90.00</Text>
                    </View>

                </View>

                <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 10 }}>View Report</Text>
            </View>

            <TextInput
                placeholder="Search"
                style={{
                    fontSize: 18,
                    color: 'black',
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: 'black',
                    width: 335,
                    marginHorizontal: 'auto',
                    padding: 10,
                    paddingLeft: 29,
                    borderRadius: 5
                }} />

            <View>
                <View style={{ backgroundColor: '#eeeee4' }}>
                    <View style={{ backgroundColor: '#eeeee4', height: 90, display: 'flex', flexDirection: 'row', marginHorizontal: 'auto' }}>
                        <View style={{ backgroundColor: 'white', height: 60, width: 60, marginVertical: 'auto', marginLeft: 20 }}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlsGIeDLXAtfbDZq2-pA4UlI8j-Lt3XMA0ZA&s" }} style={{ width: 60, height: 60 }} />
                        </View>

                        <View style={{ marginVertical: 'auto', width: 105 }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Jumma</Text>
                            <Text style={{ fontSize: 10, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                        </View>

                        <View style={{ width: 75 }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginVertical: 'auto', textAlign: 'center' }}>$20000</Text>
                        </View>



                    </View>
                </View>

                <View style={{ backgroundColor: '#f8f8f4' }}>
                    <View style={{ backgroundColor: '#f8f8f4', height: 90, display: 'flex', flexDirection: 'row', marginHorizontal: 'auto' }}>
                        <View style={{ backgroundColor: 'white', height: 60, width: 60, marginVertical: 'auto', marginLeft: 20 }}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDQkSxGinfHlaKlDew2FB4yrVAHyVuCYwRA&s" }} style={{ width: 60, height: 60 }} />
                        </View>

                        <View style={{ marginVertical: 'auto', width: 105 }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Ramzan</Text>
                            <Text style={{ fontSize: 10, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                        </View>

                        <View style={{ width: 75 }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginVertical: 'auto', textAlign: 'center' }}>$20000</Text>
                        </View>



                    </View>
                </View>

                <View style={{ backgroundColor: '#eeeee4' }}>
                    <View style={{ backgroundColor: '#eeeee4', height: 90, display: 'flex', flexDirection: 'row', marginHorizontal: 'auto' }}>
                        <View style={{ backgroundColor: 'white', height: 60, width: 60, marginVertical: 'auto', marginLeft: 20 }}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcNBdgvmC8hacT-LbPs3To19-oFG1LgcIaA&s" }} style={{ width: 60, height: 60 }} />
                        </View>

                        <View style={{ marginVertical: 'auto', width: 105 }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Eid</Text>
                            <Text style={{ fontSize: 10, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                        </View>

                        <View style={{ width: 75 }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginVertical: 'auto', textAlign: 'center' }}>$20000</Text>
                        </View>



                    </View>
                </View>

                <View style={{ backgroundColor: '#f8f8f4' }}>
                    <View style={{ backgroundColor: '#f8f8f4', height: 90, display: 'flex', flexDirection: 'row', marginHorizontal: 'auto' }}>
                        <View style={{ backgroundColor: 'white', height: 60, width: 60, marginVertical: 'auto', marginLeft: 20 }}>
                        <Text style={{backgroundColor:'lightgray',fontSize:8,marginVertical:'auto'}}>CONSTRUCTION</Text>
                        </View>

                        <View style={{ marginVertical: 'auto', width: 105 }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Construction</Text>
                            <Text style={{ fontSize: 10, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                        </View>

                        <View style={{ width: 75 }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginVertical: 'auto', textAlign: 'center' }}>$60000</Text>
                        </View>



                    </View>
                </View>

                <Pressable onPress={() => navigation.navigate('Expense')}>
                    <Text style={{
                        backgroundColor: '#f8f8f4',
                        color: '#019863',
                        height: 45,
                        width: 300,
                        marginTop: 20,
                        marginHorizontal: 'auto',
                        borderRadius: 5,
                        borderColor: '#019863',
                        borderWidth: 3,
                        fontSize: 20,
                        textAlign: 'center',
                        paddingTop: 8
                    }}>Add Collection Type</Text>
                </Pressable>
            </View>

        </ScrollView>
    )
}

export default Collection
