import { StatusBar } from 'expo-status-bar';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const Timelines = ({navigation,timelineData}) => {
  const renderItem = ({ item }) => (
    <View style={styles.singleContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View>
        <View style={styles.monthView}></View>
        <View style={styles.blueLine}></View></View>
        <View>
        <Text style={styles.blueMonth}>{item?.month}</Text></View>
      </View>
      <View style={styles.fuelBoxImage}>
        <View>
        <View style={styles.fuelIcon}>
          <Image source={require("../assets/gasIconWhite.png")} style={{ height: 20, width: 20 }} />
        </View>
        <View style={styles.blueLineLower}></View>
        </View>
        <View style={styles.innerTextContainer}>
          <Text style={styles.innerText}>{'Refueling'}</Text>
          <View style={styles.dateView}>
            <Text style={styles.dateText}>{item?.date}</Text>
            <View>
              <Text style={styles.innerText}>{item?.cost}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 7 }}>
            <Image source={require("../assets/speedIcon.png")} style={{ height: 10, width: 10 }} />
            <Text style={styles.unitText}>{item?.miles}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const onPress = () => navigation.navigate("AddEntry") ;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={require("../assets/hamburgerMenu.png")} style={styles.headerIcon} />
      </View>
      <FlatList
        data={timelineData}
        renderItem={renderItem}
        keyExtractor={item => item.cost}
        nestedScrollEnabled
      />
      <TouchableOpacity
        style={styles.floatPlusButton}
        onPress={onPress}
      >
        <Image source={require("../assets/plusSign.png")} style={styles.plusButton} />
      </TouchableOpacity>
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
  floatPlusButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: '#85affe',
    borderRadius: 100,
  },
  plusButton: { 
    height: 50, 
    width: 50 
  },
  headerIcon: { 
    height: 40,
     width: 40, 
     marginLeft: 15 
  },
  unitText: { 
    fontSize: 10, 
    color: '#757d82', 
    marginLeft: 10 
  },
  dateText: { 
    fontSize: 10, 
    color: '#757d82' 
  },
  innerText : { 
    fontSize: 10, 
    color: 'white' 
  },
  innerTextContainer: { 
    width: '90%', 
    paddingHorizontal: 30, 
    paddingVertical: 10 
  },
  fuelIcon: { 
    height: 40, 
    width: 40, 
    borderRadius: 20, 
    backgroundColor: '#85affe', 
    justifyContent: 'center',
     alignItems: 'center' 
  },
  fuelBoxImage: { 
    height: 80, 
    flexDirection: 'row'
   },
   blueMonth: { 
     fontSize: 10, 
     color: '#85affe', 
     marginLeft: 45 
  },
  monthView: { 
    height: 10, 
    width: 10, 
    borderRadius: 5, 
    backgroundColor: '#85affe', 
    marginLeft: 14 
  },
  singleContainer: { 
    height: 120, 
    justifyContent: 'space-between', 
    padding: 5, 
    marginTop: 20 
  },
  dateView: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 5 
  },
  blueLine: {
    height:35,
    backgroundColor:'#85affe',
    width:2,
    marginLeft:18
  },
  blueLineLower: {
    height:55,
    backgroundColor:'#85affe',
    width:2,
    marginLeft:18
  },

});

const mapStateToProps = state => ({
  timelineData: state.rootReducer.timelineData
});

// const mapDispatchToProps = {
// };

export default connect(mapStateToProps)(Timelines);

