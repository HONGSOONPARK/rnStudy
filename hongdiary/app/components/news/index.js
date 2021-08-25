/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import axios from 'axios'; 

class NewsComponent extends Component {

  state = {
    covid : {
      dateTime: '',         
      confirmed: 0,             // 확진환자
      confirmedDailyChange: 0,  // 확진환자 일일 변화량
      released: 0,              // 격리해제
      releasedDailyChange:0,    // 격리해제 일일 변화량
      deceased: 0,              // 사망자
      deceasedDailyChange:0,    // 사망자 일일 변화량
      inProgress:0,             // 검사진행
      inProgressDailyChange: 0, // 검사진행 일일 변화량
    },
    dust:{
      place : '서울',
      dateTime: '',               
      fineDust: 0,              // 미세먼지 
      fineDustLevel: '',        // 미세먼지 단계
      ultraFineDust: 0,         // 초미세먼지
      ultraFineDustLevel: '',   // 초미세먼지 단계
      nitrogenDioxide: 0,       // 이산화질소
      nitrogenDioxideLevel: '', // 이산화질소 단계
    }
  }

  componentDidMount() {

    let today = this.formatDate().today;
    let yesterDay = this.formatDate().yesterDay; 


    // 연결 안됨..!! 다시 보자
    const requestCovid = axios({
      method: 'GET',
      url: `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=a5N0HFtrq5mRzspIUnDC%2BMlMMdZDUauUDry8gf7JyOOhU52xpjs9AaLrf6zrY7iMs0bNc%2F8h5bAEPf74vAVtWQ%3D%3D&pageNo=1&numOfRows=10&startCreateDt=${yesterDay}&endCreateDt=${today}`,
    }).then(response=>{
      this.makeCovidData(response.data)
    })

  }

  makeCovidData = (data) =>{
    let covidData; 

    console.log('co : ', data);

  }

  formatDate = () =>{
    let todayDate = new Date();
    let today = this.calculateDate(todayDate);
    let yesterDate = new Date(Date.now() - 86400000);
    let yesterDay = this.calculateDate(yesterDate);

    let dateDate = {
      today: today,
      yesterDay: yesterDay
    }

    return dateDate
  }

  calculateDate = (date) => {
     let year = date.getFullYear();
     let month = (date.getMonth() + 1).toString();
     let day = date.getDate().toString();

     if(month.lenth < 2 ) month = `0${month}`
     else if(day.lenth < 2) day = `0${day}`

     let finalDate = `${year}${month}${day}`;
     
     return finalDate;
  }

  render() {
    return (
      <View style={styles.newContainer}>
        <View style={styles.covidContainer}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.titleText}># COVID-19</Text>
          </View>
          <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={styles.timeText}>mm.dd. xx</Text>
            <Text style={styles.timeText}>기준</Text>
          </View>

          <View style={styles.contentView}>
            <View style={{ flex: 1 }}>
              <Text style={styles.mainText}>확찐환자</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.mainText, styles.redText]}>10,000</Text>
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>▲450</Text>
            </View>
          </View>

          <View style={styles.contentView}>
            <View style={{ flex: 1 }}>
              <Text style={styles.mainText}>격리해제</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.mainText, styles.blueText]}>5,000</Text>
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>250</Text>
            </View>
          </View>

          <View style={styles.contentView}>
            <View style={{ flex: 1 }}>
              <Text style={styles.mainText}>사망자</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.mainText, styles.grayText]}>5,000</Text>
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>250</Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View style={{ flex: 1 }}>
              <Text style={styles.mainText}>검사진행</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.mainText, styles.grayText]}>5,000</Text>
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>250</Text>
            </View>
          </View>
        </View>
        <View style={styles.dustContainer}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.titleText}># 미세먼지</Text>
          </View>

          <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
            <Text style={styles.timeText}>서울</Text>
            <Text style={styles.timeText}>mm.dd.xxx</Text>
            <Text style={styles.timeText}>   기준</Text>
          </View>

          <View style={{ flex: 1.8, justifyContent: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/images/very_good.png')}
                style={{ width: 60, height: 60 }}
                resizeMode="contain"
              />
            </View>
            <View style={{ alignItems: 'center', paddingTop: 8 }}>
              <Text style={[styles.emoticonText, styles.blueText]}>좋음</Text>
            </View>
          </View>


          <View style={styles.contentView_}>
            <View style={{ flex: 0.8 }}>
              <Text style={styles.mainText}>미세먼지</Text>
            </View>
            <View style={{ flex: 1, alignItems:'center' }}>
              <Text style={[styles.mainText, styles.blueText]}>좋음</Text>
            </View>
            <View style={{flex:1, flexDirection:'row'}}>
              <Text style={{fontSize:20}}>30</Text>
              <Text style={{fontSize:20}}>µg/m3</Text>
            </View>
          </View>

          <View style={styles.contentView_}>
            <View style={{ flex: 0.8 }}>
              <Text style={styles.mainText}>초미세먼지</Text>
            </View>
            <View style={{ flex: 1, alignItems:'center' }}>
              <Text style={[styles.mainText, styles.blueText]}>좋음</Text>
            </View>
            <View style={{flex:1, flexDirection:'row'}}>
              <Text style={{fontSize:20}}>15</Text>
              <Text style={{fontSize:20}}>µg/m3</Text>
            </View>
          </View>


          <View style={styles.contentView_}>
            <View style={{ flex: 0.8 }}>
              <Text style={styles.mainText}>이산화질소</Text>
            </View>
            <View style={{ flex: 1, alignItems:'center' }}>
              <Text style={[styles.mainText, styles.blueText]}>좋음</Text>
            </View>
            <View style={{flex:1, flexDirection:'row'}}>
              <Text style={{fontSize:20}}>30</Text>
              <Text style={{fontSize:20}}>ppm</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  newContainer: {
    flexDirection: 'column',
    backgroundColor: '#eee',
    height: '100%',
  },
  covidContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },
  dustContainer: {
    flexDirection: 'column',
    flex: 1.2,
    padding: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 17,
    color: 'gray',
  },
  contentView: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center'
  },

  contentView_: {
    flex: 0.7,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center'
  },

  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  redText: {
    color: '#C00000'
  },
  blueText: {
    color: '#0070C0'
  },
  grayText: {
    color: '#7f7f7f'
  },

  emoticonText: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default NewsComponent;
