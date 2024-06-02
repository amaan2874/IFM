import React, { useState } from 'react'
import { View, Text, TextInput, Pressable} from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
// '#DE3B40'
const Gave = ({navigation}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('Select Date')

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        const dt = new Date(date);
        const x = dt.toISOString().split("T");
        const x1 = x[0].split('-');
        setSelectedDate(x1[2] + "/" + x1[1] + "/" + x1[0])
        hideDatePicker();
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10 }}>

                <Text onPress={() => navigation.navigate('Expense')} style={{ fontSize: 30, color: 'black', marginLeft: 3, flex: 1, textAlign: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>{"<"}</Text>

                <Text style={{ fontSize: 20, color: '#DE3B40', fontWeight: 'bold', marginVertical: 'auto', flex: 8, textAlign: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>You Got to $0 Jumma collection</Text>

                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center', flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', lineHeight: 23 }}>...</Text>
            </View>



            <View style={{ flex: 4 }}>
                <View style={{ flex: 1, width: 350, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        placeholder="Enter Amount"
                        style={{
                            fontSize: 18,
                            color: 'black',
                            borderWidth: 2,
                            borderColor: 'black',
                            padding: 10,
                            borderRadius: 5,
                            width: 350
                        }}
                        keyboardType={"number-pad"} />

                </View>

                <View style={{ flex: 1, width: 350, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        placeholder="Enter Deatails(Bill,Item,etc)"
                        style={{
                            fontSize: 18,
                            color: 'black',
                            borderWidth: 2,
                            borderColor: 'black',
                            padding: 10,
                            borderRadius: 5,
                            width: 350
                        }}
                        keyboardType={"default"} />

                </View>

                <View style={{ flex: 1, flexDirection: 'row', width: 350, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Text onPress={() => {
                        showDatePicker();
                    }} style={{
                        fontSize: 18,
                        color: 'black',
                        borderWidth: 2,
                        borderColor: 'black',
                        padding: 10,
                        borderRadius: 5,
                        width: 150
                    }}>{selectedDate}</Text>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleDateConfirm}
                        onCancel={hideDatePicker}
                    />

                    <TextInput
                        onPress={() => navigation.navigate('Bills')}
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

                <View style={{ flex: 1, width: 350, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        placeholder="Online"
                        style={{
                            fontSize: 18,
                            color: 'black',
                            borderWidth: 2,
                            borderColor: 'black',
                            padding: 10,
                            borderRadius: 5,
                            width: 350
                        }}
                        keyboardType={"default"} />

                </View>
            </View>

            <View style={{ flex: 5 }}>
                <Pressable onPress={() => navigation.navigate('Gave')}>
                    <Text style={{
                        backgroundColor: '#DE3B40',
                        color: 'white',
                        height: 55,
                        width: 350,
                        marginTop: 120,
                        marginHorizontal: 'auto',
                        borderRadius: 5,
                        fontSize: 25,
                        textAlign: 'center',
                        paddingTop: 8,
                        width: 350
                    }}>Save</Text>
                </Pressable>
            </View>

        </View>
    )
}


export default Gave
