// import React, { useState } from 'react'
// import { View, Text } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// const DatePicker = () => {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [selectedDate,setSelectedDate]=useState('Select Date')

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleDateConfirm = (date) => {
//     const dt = new Date(date);
//     const x = dt.toISOString().split("T");
//     const x1 = x[0].split('-');
//     setSelectedDate(x1[2]+"/"+ x1[1]+ "/"+ x1[0])
//     hideDatePicker();
//   };


//   return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',fontSize: 18,
//   color: 'black',
//   borderWidth: 2,
//   borderColor: 'black',
//   padding: 10,
//   borderRadius: 5,
//   width: 150 }}>
//     <TouchableOpacity style={{ width: 200, height: 50, borderWidth: .5, borderRadius: 20, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} onPress={()=>{
//       showDatePicker();
//     }}>
//       <Text>{selectedDate}</Text>
//     </TouchableOpacity>
//     <DateTimePickerModal
//       isVisible={isDatePickerVisible}
//       mode="date"
//       onConfirm={handleDateConfirm}
//       onCancel={hideDatePicker}
//     />
//   </View>
// }

// export default DatePicker
