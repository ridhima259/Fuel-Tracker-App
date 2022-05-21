import { StatusBar } from 'expo-status-bar';
import {connect} from 'react-redux';
import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';


const Home = ({navigation,personalCount,monthData}) => {

  const onPress = () => navigation.navigate("AddEntry") ;

  console.log("props", personalCount)

  const renderItem = ({ item }) => (
    <View style={{ height: 75, justifyContent: 'space-evenly', padding: 5 }}>
      <Text style={styles.monthHeader}>{item.month}</Text>
      <View style={styles.detailsView}>
        <View style={styles.outerView}>
          <Image source={require("../assets/gasIcon.png")} style={styles.smallIcon} />
          <Text style={styles.costText}>{item.cost}</Text>
        </View>
        <View>
          <Text style={styles.innerTitleText}>{'Refueling'}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView >
        <View style={styles.header}>
          <Image source={require("../assets/hamburgerMenu.png")} style={{ height: 40, width: 40, marginLeft: 15 }} />

        </View>
        <View style={styles.headerBox} >
          <View style={styles.titleView}>
            <Image source={require("../assets/gasIcon.png")} style={styles.headerIcon} />
            <Text style={styles.headerBoxText}>Gas</Text>
          </View>
        </View>
        <View style={styles.greyViewBox}>
          <View style={styles.firstInnerView}>
            <View style={styles.outerView}>
              <Image source={require("../assets/waterDrop.png")} style={styles.smallIcon} />
              <Text style={styles.costText}>{'6.458'}</Text>
              <Text style={styles.unitText}>{'mi/l'}</Text>
            </View>
            <View>
              <Text style={styles.innerTitleText}>{'Average Fuel consumption'}</Text>
            </View>
          </View>
          <View style={styles.firstInnerView}>
            <View style={styles.outerView}>
              <Image source={require("../assets/greenArrow.png")} style={styles.smallIcon} />
              <Text style={styles.costText}>{'6.896'}</Text>
              <Text style={styles.unitText}>{'mi/l'}</Text>
            </View>
            <View>
              <Text style={styles.innerTitleText}>{'Last Fuel Consumption'}</Text>
            </View>
          </View>
          <View style={styles.firstInnerView}>
            <View style={styles.outerView}>
              <Image source={require("../assets/redArrow.png")} style={styles.smallIcon} />
              <Text style={styles.costText}>{'$1.419'}</Text>
            </View>
            <View>
              <Text style={styles.innerTitleText}>{'Last Fuel price'}</Text>
            </View>
          </View>
          <View style={styles.dateBox}>
            <Text style={styles.innerTitleText}>{'2021-09-24 . 7 days ago'}</Text>
          </View>
        </View>

        <View style={styles.headerBox} >
          <View style={styles.titleView}>
            <Image source={require("../assets/dollarIcon.png")} style={styles.headerIcon} />
            <Text style={styles.headerBoxText}>Costs</Text>
          </View>
        </View>
        <View style={styles.greyViewBox}>
          <View style={styles.middleViewBox}>
            <Text style={styles.monthHeader}>THIS MONTH</Text>
            <View style={styles.detailsView}>
              <View style={styles.outerView}>
                <Image source={require("../assets/gasIcon.png")} style={styles.smallIcon} />
                <Text style={styles.costText}>{'$0.00'}</Text>
              </View>
              <View>
                <Text style={styles.innerTitleText}>{'Gas'}</Text>
              </View>
            </View>

            <View style={styles.detailsView}>
              <View style={styles.outerView}>
                <Image source={require("../assets/dollarNote.png")} style={styles.smallIcon} />
                <Text style={styles.costText}>{'$0.00'}</Text>
              </View>
              <View>
                <Text style={styles.innerTitleText}>{'Other costs'}</Text>
              </View>
            </View>

          </View>

          <View style={styles.middleViewBox}>
            <Text style={styles.monthHeader}>PREVIOUS MONTH</Text>
            <View style={styles.detailsView}>
              <View style={styles.outerView}>
                <Image source={require("../assets/gasIcon.png")} style={styles.smallIcon} />
                <Text style={styles.costText}>{'$57.00'}</Text>
              </View>
              <View>
                <Text style={styles.innerTitleText}>{'Gas'}</Text>
              </View>
            </View>

            <View style={styles.detailsView}>
              <View style={styles.outerView}>
                <Image source={require("../assets/dollarNote.png")} style={styles.smallIcon} />
                <Text style={styles.costText}>{'$0.00'}</Text>
              </View>
              <View>
                <Text style={styles.innerTitleText}>{'Other costs'}</Text>
              </View>
            </View>

          </View>

        </View>

        <View style={styles.headerBox} >
          <View style={styles.titleView}>
            <Image source={require("../assets/blueArrow.png")} style={styles.headerIcon} />
            <Text style={styles.headerBoxText}>Last entries</Text>
          </View>
        </View>
        <View style={styles.greyViewBox}>
          <FlatList
            data={monthData}
            renderItem={renderItem}
            keyExtractor={item => item.cost}
          />
        </View>

      </ScrollView>
      <TouchableOpacity
        style={styles.floatPlusButton}
        onPress={onPress}
      >
        <Image source={require("../assets/plusSign.png")} style={{ height: 50, width: 50 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    marginTop: 50,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#2e2f32',
    justifyContent: 'center',
  },
  titleView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    minWidth: 70,
    borderRadius: 20,
    backgroundColor: '#2e2f32',
    flexDirection: 'row',
    padding:10
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
  greyViewBox: { 
    backgroundColor: '#2e2f32', 
    marginHorizontal: 10,
     borderRadius: 15 
  },
  headerBox: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginVertical: 30 
  },
  innerTitleText: { 
    fontSize: 10, 
    color: '#757d82' 
  },
  costText: { 
    fontSize: 12, 
    marginLeft: 10, 
    color: '#fff' 
  },
  headerBoxText: { 
    color: '#fff', 
    marginLeft: 10 ,
    fontSize:12
  },
  monthHeader: { 
    fontSize: 12, 
    color: '#757d82' 
  },
  middleViewBox : {
     height: 75, 
     justifyContent: 'space-between', 
     padding: 5 
  },
  smallIcon: { 
    height: 12,
     width: 12 
  },
  headerIcon: { 
    height: 20, 
    width: 20 
  },
  firstInnerView : { 
    height: 35, 
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    padding: 10 
  },
  detailsView: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  outerView: { 
    flexDirection: 'row' 
  },
  unitText: { 
    fontSize: 12,
     marginLeft: 10, 
     color: '#757d82' 
  },
  dateBox: { 
    height: 50, 
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    padding: 10, 
    justifyContent: 'flex-end' 
  },
}); 

const mapStateToProps = state => ({
  personalCount: state.rootReducer.personalCount,
  monthData: state.rootReducer.monthData
});

// const mapDispatchToProps = {
// };

export default connect(mapStateToProps)(Home);

