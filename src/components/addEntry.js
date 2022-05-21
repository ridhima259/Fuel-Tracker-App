import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import React, {useState} from "react";
import {connect} from 'react-redux';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AddEntry = ({ navigation,timelineData }) => {

    const onPress = () => navigation.goBack();
    const [number, onChangeNumber] = useState(null);
    const [gasValue, onChangeGas] = useState(null);
    const [pricePerLValue, onChangePricePerL] = useState(null);
    const [costValue, onChangeCost] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimeickerVisible, setTimePickerVisibility] = useState(false);
    const [currentDate, setDate] = useState(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate()));
    const [currentTime, setTime] = useState(new Date().getHours() + ":" + new Date().getMinutes());


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        var dateText= date.toJSON().slice(0, 10);
        setDate(dateText)
        hideDatePicker();
    };

    const handleConfirmTime = (time) => {
        var timeText= time.toJSON().slice(11, 16);
        setTime(timeText)
        hideTimePicker();
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <View style={styles.headerBox}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={onPress}>
                            <Image source={require("../assets/backArrow.png")} style={styles.backIcon} />
                        </TouchableOpacity>
                        <Text style={styles.headerTitleText}>Refueling</Text>
                    </View>
                    <TouchableOpacity onPress={onPress}>
                        <Image source={require("../assets/tickarrow.png")} style={styles.tickArrow} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 50 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                    <Image source={require("../assets/gasIcon.png")} style={styles.icons} />
                    <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Odometer (mi)"
                        keyboardType="numeric"
                        placeholderTextColor='#757d82'
                    />
                    <Text style={{color:'#757d82', fontSize:8,marginLeft:30}}>{'Last value : ' + timelineData[0].miles}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                    <Image source={require("../assets/gasIcon.png")} style={styles.icons} />
                    <TextInput
                        style={styles.input1}
                        onChangeText={onChangeGas}
                        value={gasValue}
                        placeholder="Gas (l)"
                        keyboardType="numeric"
                        placeholderTextColor='#757d82'
                    />
                    <View
                        style={styles.input2}
                    >
                    <Text style={{color:'#757d82',fontSize:8,position: 'absolute',top: -6,left: 10,backgroundColor:'#2e2f32',paddingHorizontal:4}}>Gas Type</Text>
                    <Text style={{color:'#757d82'}}>{'Regular'}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                    <Image source={require("../assets/dollarIcon.png")} style={styles.icons} />
                    <TextInput
                        style={styles.input1}
                        onChangeText={onChangePricePerL}
                        value={pricePerLValue}
                        placeholder="Price/L"
                        keyboardType="numeric"
                        placeholderTextColor='#757d82'
                    />
                    <TextInput
                        style={styles.input2}
                        onChangeText={onChangeCost}
                        value={costValue}
                        placeholder="TotalCost"
                        keyboardType="numeric"
                        placeholderTextColor='#757d82'
                    />
                </View>
                <View style ={{height:1,backgroundColor:'#000'}}></View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                    <Image source={require("../assets/calenderIcon.png")} style={styles.icons} />
                    <TouchableOpacity onPress={showDatePicker}>
                        <View style={styles.input1}>
                            <Text style={{color:'#757d82',fontSize:8,position: 'absolute',top: -6,left: 10,backgroundColor:'#2e2f32',paddingHorizontal:4}}>Date</Text>
                            <Text style={{color:'#fff'}}>{currentDate}</Text>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showTimePicker}>
                        <View style={styles.input2}>
                        <Text style={{color:'#757d82',fontSize:8,position: 'absolute',top: -6,left: 10,backgroundColor:'#2e2f32',paddingHorizontal:4}}>Time</Text>
                            <Text style={{color:'#fff'}}>{currentTime}</Text>
                            <DateTimePickerModal
                                isVisible={isTimeickerVisible}
                                mode="time"
                                onConfirm={handleConfirmTime}
                                onCancel={hideTimePicker}
                            />

                        </View>
                    </TouchableOpacity>
                </View>
                <View style ={{height:1,backgroundColor:'#000'}}></View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e2f32',
        marginTop: 50
    },
    header: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        paddingHorizontal: 15
    },
    headerTitleText: {
        fontSize: 15,
        color: '#fff',
        marginTop: 10,
        marginLeft: 10
    },
    tickArrow: {
        height: 30,
        width: 30,
    },
    backIcon: {
        height: 40,
        width: 40
    },
    input: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderColor: '#757d82',
        borderRadius: 5,
        marginLeft: 20,
        color:'#fff',
        width:(Dimensions.get('window').width -80)
    },
    icons: {
        height: 20,
        width: 20
    },
    input1: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderColor: '#757d82',
        borderRadius: 5,
        marginLeft: 20,
        color:'#fff',
        width:(Dimensions.get('window').width -100)/2
    },
    input2: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#757d82',
        borderRadius: 5,
        marginLeft: 20,
        color:'#fff',
        width:(Dimensions.get('window').width -100)/2
    },
});

// export default AddEntry;

const mapStateToProps = state => ({
    timelineData: state.rootReducer.timelineData
  });
  
  // const mapDispatchToProps = {
  // };
  
  export default connect(mapStateToProps)(AddEntry);