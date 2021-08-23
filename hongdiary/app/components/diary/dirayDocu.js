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
  TextInput
} from 'react-native';


class DiaryDocu extends Component {

  // 초기화 한번만 하기 위해 생성자 사용

  constructor(props) {
    super(props);
    const params = props.route.params;

    !params.newDiary ?
      this.state = {
        newDiary: false,
        index: params.index,
        diaryData: {
          id: params.diaryData.data.id,
          date: params.diaryData.data.date,
          title: params.diaryData.data.title,
          description: params.diaryData.data.description,
          imagePath: params.diaryData.data.imagePath,
        }
      }
      :
      this.state = {
        newDiary: true,
        index: params.index,
        diaryData: {
          id: params.id,
          date: '',
          title: '',
          description: '',
          imagePath: '',
        }
      }
    // console.warn(this.state);
  }


  onChangeInput = (item, value) => {
    if (item === 'date') {
      this.setState(prevState => ({
        diaryData: {
          ...prevState.diaryData,
          date: value
        }
      }))
    } else if (item === 'title') {
      this.setState(prevState => ({
        diaryData: {
          ...prevState.diaryData,
          title: value
        }
      }))

    }
  }

  render() {
    return (
      <View style={styles.diaryContainer}>
        <View style={styles.indexView}>
          <Text style={styles.indexText}>
            # {this.state.index + 1}
          </Text>
        </View>

        <View style={styles.dateView}>
          <Text style={styles.dateText}>
            Data:
          </Text>
          <View style={styles.dateInputView} >
            {this.state.newDiary ? (
              <TextInput
                value={this.state.diaryData.date}
                style={{ fontSize: 20, paddingTop: 0, paddingBottom: 0 }}
                placeholder="날짜"
                placeholderTextColor='#777'
                onChangeText={value => this.onChangeInput('date', value)}
                editable={true}
              />
            ) : (
              <TextInput
                value={this.state.diaryData.date}
                style={{ fontSize: 20, paddingTop: 0, paddingBottom: 0, color: 'gray' }}
                editable={false}
              />
            )}
          </View>
        </View>

        <View style={styles.dateView}>
          <Text style={styles.dateText}>
            Title:
          </Text>
          <View style={styles.dateInputView} >
            {this.state.newDiary ? (
              <TextInput
                value={this.state.diaryData.title}
                style={{ fontSize: 20, paddingTop: 0, paddingBottom: 0 }}
                placeholder="제목"
                placeholderTextColor='#777'
                onChangeText={value => this.onChangeInput('title', value)}
                editable={true}
              />
            ) : (
              <TextInput
                value={this.state.diaryData.title}
                style={{ fontSize: 20, paddingTop: 0, paddingBottom: 0, color: 'gray' }}
                editable={false}
              />
            )}
          </View>
        </View>

        <View style={styles.descriptionView}>
          <Text style={styles.dateText}>
            Description:
          </Text>
          <View style={[styles.dateInputView, styles.descriptionText]}>
            <ScrollView>
              {this.state.newDiary ? (
                <TextInput
                  value={this.state.diaryData.description}
                  style={{ fontSize: 20, paddingTop: 0, paddingBottom: 0 }}
                  placeholder="내용"
                  placeholderTextColor='#777'
                  onChangeText={value => this.onChangeInput('description', value)}
                  editable={true}
                  multiline={true}
                />
              ) : (
                <TextInput
                  value={this.state.diaryData.description}
                  style={{ fontSize: 20, paddingTop: 0, paddingBottom: 0, color: 'gray' }}
                  editable={false}
                  multiline={true}
                />
              )}
            </ScrollView>
          </View>
        </View>

        <View style={{ flex: 4, borderWidth: 0.5 }}>
          <Text>
            Image
          </Text>
        </View>

        <View style={{ flex: 1.5, borderWidth: 0.5 }}>
          <Text>
            Button
          </Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  diaryContainer: {
    flexDirection: 'column',
    backgroundColor: '#eee',
    height: '100%',
  },
  indexView: {
    flex: 1,
    paddingLeft: 15,
    marginTop: 15,
  },
  indexText: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  dateView: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  dateText: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  dateInputView: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderRadius: 1,
  },
  descriptionView: {
    flex: 7,
    paddingLeft: 15,
    paddingRight: 15,

  },
  descriptionText: {
    flex: 0.95,
    marginTop: 10,
  }
});

export default DiaryDocu;
