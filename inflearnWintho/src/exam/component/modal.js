import React, { Component } from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    Modal,
    Dimensions
} from 'react-native';

class ModalComponent extends Component {

    state = {
        modal: false
    }

    handleModal = () => {
        this.setState({
            modal : this.state.modal ? false : true
        })
    }

    render() {

        // console.warn(Dimensions.get('screen'));
        // console.warn(Dimensions.get('window'));

        return (
            <View style={{}} >
                <Button title='open modal'
                    onPress={this.handleModal}
                />

                <Modal
                    visible={this.state.modal}
                    // animationType={'slide'}
                    animationType={'fade'}
                    onShow={()=> alert('warning!')}
                >
                    <View style={{marginTop:60, backgroundColor: 'red'}}>
                        <Text>modal contents</Text>
                        <Button 
                            title='close modal'
                            onPress={this.handleModal}
                        />
                    </View>

                
                </Modal>

            </View>
        )
    }
}

const styles = StyleSheet.create({

})


export default ModalComponent;