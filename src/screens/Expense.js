import React from 'react'
import { View,Text,ScrollView,Pressable} from 'react-native'

const Expense = ({navigation}) => {
  return (
    <View>
        <ScrollView>
            <View>
            <View style={{ marginHorizontal: 'auto', display: 'flex', flexDirection: 'row', backgroundColor: 'white', width: 400 }}>
                <Text onPress={()=>navigation.navigate('SeeDetails')} style={{ fontSize: 50, color: 'black' }}>{"<"}</Text>
                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', marginVertical: 'auto', marginHorizontal: 'auto' }}>Jumma Expense</Text>
            </View>

            <View style={{ backgroundColor: 'white', height: 100, width: 330, marginHorizontal: 'auto', marginTop: 30, marginBottom: 30, borderRadius: 10 }}>

                <View style={{ height: 70, width: 300, marginHorizontal: 'auto', marginTop: 20, display: 'flex', flexDirection: 'row', borderColor: 'black', borderBottomWidth: 2, height: 30 }}>

                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Total Amount</Text>
                    <Text style={{ fontSize: 20, paddingLeft: 80, fontWeight: 'bold', color: 'red' }}>$8.90.00</Text>

                </View>
                <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 10 }}>Report</Text>
            </View>

            <ScrollView>
                {/* credited */}
                <View style={{ backgroundColor: '#eeeee4', height: 90, width: 400, marginHorizontal: 'auto', display: 'flex', flexDirection: 'row' }}>

                    <View style={{ marginVertical: 'auto', width: 200 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Shoeb bhai ki taraf se</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                    </View>
                    <View style={{ marginVertical: 'auto', width: 140 }}>
                        <Text style={{ fontSize: 16, color: '#019863', fontWeight: 'bold', textAlign: 'center' }}>$100</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>Credited</Text>
                    </View>



                    <View style={{ width: 115 }}>
                        <Text style={{ fontSize: 12, color: '#019863', fontWeight: 'bold', marginTop: 5, textAlign: 'center', backgroundColor: '#E6FFF6', height: 20, width: 60, marginLeft: -50, borderRadius: 20 }}>Online</Text>
                    </View>

                </View>

                {/* Debited */}
                <View style={{ backgroundColor: '#f8f8f4', height: 90, width: 400, marginHorizontal: 'auto', display: 'flex', flexDirection: 'row' }}>

                    <View style={{ marginVertical: 'auto', width: 200 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Danish bhai ki taraf se</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                    </View>
                    <View style={{ marginVertical: 'auto', width: 140 }}>
                        <Text style={{ fontSize: 16, color: '#DE3B40', fontWeight: 'bold', textAlign: 'center' }}>$100</Text>
                        <Text style={{ fontSize: 12, color: '#DE3B40', textAlign: 'center' }}>Credited</Text>
                    </View>



                    <View style={{ width: 115 }}>
                        <Text style={{ fontSize: 12, color: '#DE3B40', fontWeight: 'bold', marginTop: 5, textAlign: 'center', backgroundColor: '#FDF2F2', height: 20, width: 60, marginLeft: -50, borderRadius: 20 }}>Online</Text>
                    </View>

                </View>

                {/* credited */}
                <View style={{ backgroundColor: '#eeeee4', height: 90, width: 400, marginHorizontal: 'auto', display: 'flex', flexDirection: 'row' }}>

                    <View style={{ marginVertical: 'auto', width: 200 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Shoeb bhai ki taraf se</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                    </View>
                    <View style={{ marginVertical: 'auto', width: 140 }}>
                        <Text style={{ fontSize: 16, color: '#019863', fontWeight: 'bold', textAlign: 'center' }}>$100</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>Credited</Text>
                    </View>



                    <View style={{ width: 115 }}>
                        <Text style={{ fontSize: 12, color: '#019863', fontWeight: 'bold', marginTop: 5, textAlign: 'center', backgroundColor: '#E6FFF6', height: 20, width: 60, marginLeft: -50, borderRadius: 20 }}>Online</Text>
                    </View>

                </View>

                {/* Debited */}
                <View style={{ backgroundColor: '#f8f8f4', height: 90, width: 400, marginHorizontal: 'auto', display: 'flex', flexDirection: 'row' }}>

                    <View style={{ marginVertical: 'auto', width: 200 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Danish bhai ki taraf se</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                    </View>
                    <View style={{ marginVertical: 'auto', width: 140 }}>
                        <Text style={{ fontSize: 16, color: '#DE3B40', fontWeight: 'bold', textAlign: 'center' }}>$100</Text>
                        <Text style={{ fontSize: 12, color: '#DE3B40', textAlign: 'center' }}>Credited</Text>
                    </View>



                    <View style={{ width: 115 }}>
                        <Text style={{ fontSize: 12, color: '#DE3B40', fontWeight: 'bold', marginTop: 5, textAlign: 'center', backgroundColor: '#FDF2F2', height: 20, width: 60, marginLeft: -50, borderRadius: 20 }}>Online</Text>
                    </View>

                </View>

                {/* credited */}
                <View style={{ backgroundColor: '#eeeee4', height: 90, width: 400, marginHorizontal: 'auto', display: 'flex', flexDirection: 'row' }}>

                    <View style={{ marginVertical: 'auto', width: 200 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Shoeb bhai ki taraf se</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                    </View>
                    <View style={{ marginVertical: 'auto', width: 140 }}>
                        <Text style={{ fontSize: 16, color: '#019863', fontWeight: 'bold', textAlign: 'center' }}>$100</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>Credited</Text>
                    </View>



                    <View style={{ width: 115 }}>
                        <Text style={{ fontSize: 12, color: '#019863', fontWeight: 'bold', marginTop: 5, textAlign: 'center', backgroundColor: '#E6FFF6', height: 20, width: 60, marginLeft: -50, borderRadius: 20 }}>Online</Text>
                    </View>

                </View>

                {/* Debited */}
                <View style={{ backgroundColor: '#f8f8f4', height: 90, width: 400, marginHorizontal: 'auto', display: 'flex', flexDirection: 'row' }}>

                    <View style={{ marginVertical: 'auto', width: 200 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Danish bhai ki taraf se</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                    </View>
                    <View style={{ marginVertical: 'auto', width: 140 }}>
                        <Text style={{ fontSize: 16, color: '#DE3B40', fontWeight: 'bold', textAlign: 'center' }}>$100</Text>
                        <Text style={{ fontSize: 12, color: '#DE3B40', textAlign: 'center' }}>Credited</Text>
                    </View>



                    <View style={{ width: 115 }}>
                        <Text style={{ fontSize: 12, color: '#DE3B40', fontWeight: 'bold', marginTop: 5, textAlign: 'center', backgroundColor: '#FDF2F2', height: 20, width: 60, marginLeft: -50, borderRadius: 20 }}>Online</Text>
                    </View>

                </View>

                {/* credited */}
                <View style={{ backgroundColor: '#eeeee4', height: 90, width: 400, marginHorizontal: 'auto', display: 'flex', flexDirection: 'row' }}>

                    <View style={{ marginVertical: 'auto', width: 200 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Shoeb bhai ki taraf se</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                    </View>
                    <View style={{ marginVertical: 'auto', width: 140 }}>
                        <Text style={{ fontSize: 16, color: '#019863', fontWeight: 'bold', textAlign: 'center' }}>$100</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>Credited</Text>
                    </View>



                    <View style={{ width: 115 }}>
                        <Text style={{ fontSize: 12, color: '#019863', fontWeight: 'bold', marginTop: 5, textAlign: 'center', backgroundColor: '#E6FFF6', height: 20, width: 60, marginLeft: -50, borderRadius: 20 }}>Online</Text>
                    </View>

                </View>

                {/* Debited */}
                <View style={{ backgroundColor: '#f8f8f4', height: 90, width: 400, marginHorizontal: 'auto', display: 'flex', flexDirection: 'row' }}>

                    <View style={{ marginVertical: 'auto', width: 200 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Danish bhai ki taraf se</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                    </View>
                    <View style={{ marginVertical: 'auto', width: 140 }}>
                        <Text style={{ fontSize: 16, color: '#DE3B40', fontWeight: 'bold', textAlign: 'center' }}>$100</Text>
                        <Text style={{ fontSize: 12, color: '#DE3B40', textAlign: 'center' }}>Credited</Text>
                    </View>



                    <View style={{ width: 115 }}>
                        <Text style={{ fontSize: 12, color: '#DE3B40', fontWeight: 'bold', marginTop: 5, textAlign: 'center', backgroundColor: '#FDF2F2', height: 20, width: 60, marginLeft: -50, borderRadius: 20 }}>Online</Text>
                    </View>

                </View>

                {/* credited */}
                <View style={{ backgroundColor: '#eeeee4', height: 90, width: 400, marginHorizontal: 'auto', display: 'flex', flexDirection: 'row' }}>

                    <View style={{ marginVertical: 'auto', width: 200 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Shoeb bhai ki taraf se</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                    </View>
                    <View style={{ marginVertical: 'auto', width: 140 }}>
                        <Text style={{ fontSize: 16, color: '#019863', fontWeight: 'bold', textAlign: 'center' }}>$100</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>Credited</Text>
                    </View>



                    <View style={{ width: 115 }}>
                        <Text style={{ fontSize: 12, color: '#019863', fontWeight: 'bold', marginTop: 5, textAlign: 'center', backgroundColor: '#E6FFF6', height: 20, width: 60, marginLeft: -50, borderRadius: 20 }}>Online</Text>
                    </View>

                </View>

                {/* Debited */}
                <View style={{ backgroundColor: '#f8f8f4', height: 90, width: 400, marginHorizontal: 'auto', display: 'flex', flexDirection: 'row' }}>

                    <View style={{ marginVertical: 'auto', width: 200 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>Danish bhai ki taraf se</Text>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center' }}>23/06/2024</Text>
                    </View>
                    <View style={{ marginVertical: 'auto', width: 140 }}>
                        <Text style={{ fontSize: 16, color: '#DE3B40', fontWeight: 'bold', textAlign: 'center' }}>$100</Text>
                        <Text style={{ fontSize: 12, color: '#DE3B40', textAlign: 'center' }}>Credited</Text>
                    </View>



                    <View style={{ width: 115 }}>
                        <Text style={{ fontSize: 12, color: '#DE3B40', fontWeight: 'bold', marginTop: 5, textAlign: 'center', backgroundColor: '#FDF2F2', height: 20, width: 60, marginLeft: -50, borderRadius: 20 }}>Offline</Text>
                    </View>

                </View>

                <View style={{ display: 'flex', flexDirection: 'row',justifyContent:'center' }}>
                    <Pressable onPress={()=>navigation.navigate('Gave')}>
                        <Text style={{
                            backgroundColor: '#DE3B40',
                            color: 'white',
                            height: 40,
                            width:120,
                            marginVertical:18,
                            borderRadius: 5,
                            fontSize: 15,
                            textAlign: 'center',
                            paddingTop: 8
                        }}>You Gave</Text>
                    </Pressable>
                    <Pressable onPress={()=>navigation.navigate('Got')}>
                        <Text style={{
                            backgroundColor: '#019863',
                            color: 'white',
                            height: 40,
                            width:120,
                            marginVertical:18,
                            marginLeft:20,
                            borderRadius: 5,
                            fontSize: 15,
                            textAlign: 'center',
                            paddingTop: 8
                        }}>You Get</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
        </ScrollView>
        
    </View>
  )
}

export default Expense
