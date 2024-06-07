import React from 'react'
import { View, Text, ScrollView, Pressable, StyleSheet, Image } from 'react-native'
import Feather from 'react-native-vector-icons/dist/Feather';

const SeeDetails = ({ navigation }) => {
    return (
        <ScrollView style={{ margin: 10, marginTop: 20, backgroundColor: '#f8f8f4' }}>
            <View style={{ height: 150, width: 390, backgroundColor: '#019863', alignSelf: 'center', borderRadius: 10 }}>
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg-IUzMRgNjmmgHC21yTNkX9gL3fOnkFdog&s" }} style={{ width: 390, height: 150 }} />
            </View>


            <View style={{ height: 150, width: 150, backgroundColor: 'white', alignSelf: 'center', marginTop: -70, borderRadius: 100 }}>
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhBNpkgjs3XiMKEgrTI3fAzQyHoHVB9AMfHU5bjwSW4ckBIgiOd961TtfF2zGZWFWT1E&usqp=CAU" }} style={{ width: 150, height: 150, borderRadius: 100 }} />
            </View>


            <View>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Full name</Text>

                <Text style={{ fontSize: 18, color: 'grey', textAlign: 'center' }}>Professional title</Text>

                <Text style={{ fontSize: 18, color: 'grey', textAlign: 'center', marginTop: 30, paddingHorizontal: 40 }}>Bio: Ea dol djdjf and fkfk ffj lakkd llafjks ifif occset.</Text>

                <Pressable>
                    <Text onPress={() => navigation.navigate('MainScreen')} style={styles.Pressable}>Contact</Text>
                </Pressable>
            </View>
            {/* #f8f8f4 */}
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

                        <Pressable onPress={() => navigation.navigate('SeeMore')}>
                            <Text style={{
                                backgroundColor: '#f8f8f4',
                                color: '#019863',
                                height: 35,
                                width: 70,
                                marginVertical: 'auto',
                                borderRadius: 5,
                                borderColor: '#019863',
                                borderWidth: 2,
                                fontSize: 12,
                                textAlign: 'center',
                                paddingTop: 8
                            }}>See more</Text>
                        </Pressable>

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

                        <Pressable onPress={() => navigation.navigate('SeeMore')}>
                            <Text style={{
                                backgroundColor: '#f8f8f4',
                                color: '#019863',
                                height: 35,
                                width: 70,
                                marginVertical: 'auto',
                                borderRadius: 5,
                                borderColor: '#019863',
                                borderWidth: 2,
                                fontSize: 12,
                                textAlign: 'center',
                                paddingTop: 8
                            }}>See more</Text>
                        </Pressable>

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

                        <Pressable onPress={() => navigation.navigate('SeeMore')}>
                            <Text style={{
                                backgroundColor: '#f8f8f4',
                                color: '#019863',
                                height: 35,
                                width: 70,
                                marginVertical: 'auto',
                                borderRadius: 5,
                                borderColor: '#019863',
                                borderWidth: 2,
                                fontSize: 12,
                                textAlign: 'center',
                                paddingTop: 8
                            }}>See more</Text>
                        </Pressable>

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
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginVertical: 'auto', textAlign: 'center' }}>$20000</Text>
                        </View>

                        <Pressable onPress={() => navigation.navigate('SeeMore')}>
                            <Text style={{
                                backgroundColor: '#f8f8f4',
                                color: '#019863',
                                height: 35,
                                width: 70,
                                marginVertical: 'auto',
                                borderRadius: 5,
                                borderColor: '#019863',
                                borderWidth: 2,
                                fontSize: 12,
                                textAlign: 'center',
                                paddingTop: 8
                            }}>See more</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Pressable: {
        backgroundColor: '#019863',
        color: 'white',
        height: 50,
        width: 300,
        margin: 20,
        borderRadius: 5,
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 10

    }
})

export default SeeDetails
