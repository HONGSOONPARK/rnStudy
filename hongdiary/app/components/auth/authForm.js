import React from 'react';
import { Component } from 'react';
import { View, Image, Text, StyleSheet, TextInput, Button, Platform } from 'react-native';

import Input from '../../utils/forms/input'

import ValidationRules from '../../utils/forms/validationRules';

// 컴포넌트는 리덕스에 직접 접근 못하므로 connect 사용
import { connect } from 'react-redux';
import { signIn, signUp } from '../../store/actions/user_actions';
import { bindActionCreators } from 'redux';
import { setTokens } from '../../utils/misc';


class AuthForm extends Component {
    state = {
        type: 'Login',   // 로그인, 등록
        action: '로그인',  // 로그인, 등록
        actionMode: '새로운 등록', // 회원가입, 로그인화면으로
        hasErrors: false,
        form: {
            email: {
                value: "",
                type: "textinput",
                rules: {
                    isRequired: true,
                    isEmail: true,
                },
                valid: false
            },
            password: {
                value: "",
                type: "textinput",
                rules: {
                    isRequired: true,
                    minLength: 6
                },
                valid: false
            },
            confirmPassword: {
                value: "",
                type: "textinput",
                rules: {
                    confirmPassword: 'password'
                },
                valid: false
            }
        }
    }

    // text input update
    updateInput = (name, value) => {
        this.setState({
            hasErrors: false,
        })

        let formCopy = this.state.form;
        formCopy[name].value = value;

        // rules 
        let rules = formCopy[name].rules;
        let valid = ValidationRules(value, rules, formCopy);
        formCopy[name].valid = valid;

        this.setState({
            form: formCopy
        })

        // console.warn(this.state.form)
    }

    confirmPassword = () => (
        this.state.type != 'Login' ?
            <Input
                value={this.state.form.confirmPassword.value}
                type={this.state.form.confirmPassword.type}
                secureTextEntry={true}
                placeholder='password retry'
                placeholderTextColor='#d3d3d3'
                onChangeText={value => this.updateInput("confirmPassword", value)}
            /> :
            null

    )

    formHasErrors = () => (
        this.state.hasErrors ?
            <View style={styles.errorContainer}>
                <Text style={styles.errorLabel}>
                    로그인 정보를 다시 확인해주세요.
                </Text>
            </View>
            :
            null
    )

    changeForm = () => {
        const type = this.state.type;

        this.setState({
            type: type === "Login" ? "Register" : "Login",
            action: type === "로그인" ? "새로운 등록" : "등록",
            actionMode: type === "로그인" ? "새로운 등록" : "로그인화면으로",
        })

    }


    submitUser = () => {
        // init
        let isFormValid = true;
        let submittedForm = {};
        const formCopy = this.state.form;

        for (let key in formCopy) {
            if (this.state.type === 'Login') {
                if (key !== 'confirmPassword') {
                    isFormValid = isFormValid && formCopy[key].valid;
                    submittedForm[key] = formCopy[key].value;
                }
            } else {
                isFormValid = isFormValid && formCopy[key].valid;
                submittedForm[key] = formCopy[key].value;

            }
        }

        if (isFormValid){
            if(this.state.type === 'Login'){
                console.log('login');
                this.props.signIn(submittedForm).then(()=>{
                    this.manageAccess();
                })
            }else{
                console.log('join');
                this.props.signUp(submittedForm).then(()=>{
                    this.manageAccess();
                })
            }
        }else{
            this.setState({
                hasErrors: true
            })
        }
    }

    // 새로운 state 저장 완료 후 처리
    manageAccess = () =>{
        if(!this.props.User.auth.userId) {
            this.setState({hasErrors: true})
        } else {
            setTokens(this.props.User.auth, ()=>{
                this.setState({hasErrors: false});
                this.props.goWithOutLogin();
            })
        }
    }

    render() {
        return (
            <View>
                <Input
                    value={this.state.form.email.value}
                    type={this.state.form.email.type}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    placeholder='email'
                    placeholderTextColor='#d3d3d3'
                    onChangeText={value => this.updateInput("email", value)}
                />
                <Input
                    value={this.state.form.password.value}
                    type={this.state.form.password.type}
                    secureTextEntry={true}
                    placeholder='password'
                    placeholderTextColor='#d3d3d3'
                    onChangeText={value => this.updateInput("password", value)}
                />

                {this.confirmPassword()}
                {this.formHasErrors()}

                <View style={{ marginTop: 40 }}>
                    <View style={styles.button}>
                        <Button
                            title={this.state.action}
                            color="#48567f"
                            onPress={this.submitUser}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title={this.state.actionMode}
                            color="#48567f"
                            onPress={this.changeForm}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="비회원 로그인"
                            color="#48567f"
                            onPress={() => this.props.goWithOutLogin()}
                        />
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    errorContainer: {
        width: '100%',
        marginBottom: 10,
        marginTop: 30,
        padding: 10,
        backgroundColor: '#ee3344'
    },
    errorLabel: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    button: {
        ...Platform.select({
            ios: {
                marginTop: 15
            },
            android: {
                marginTop: 15,
                marginBottom: 10
            }
        })
    },

})


function mapStateToProps(state){
    return {
        User: state.User
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({signIn, signUp}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);