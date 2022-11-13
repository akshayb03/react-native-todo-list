import {useState} from 'react'
import {StyleSheet, View, TextInput, Button, Modal, Image, ScrollView, KeyboardAvoidingView} from 'react-native'
import React from 'react';

const GoalInput = ({goalAdd, modalVisibility, isVisible}) => {

    const [inputEnteredText, setInputEnteredText] = useState('');

    const inputHandler = (enteredText) => {
        setInputEnteredText(enteredText)
    }

    const addGoal = () => {
        goalAdd(inputEnteredText)
        setInputEnteredText('')
        modalVisibility()
    }

    const cancel = () => {
        modalVisibility()
        setInputEnteredText('')
    }

    return (
        <Modal visible={isVisible} animationType='slide'>
                <KeyboardAvoidingView style={{flex:1}} enabled={true} behaviour={'padding'}>
                    <ScrollView contentContainerStyle={styles.inputContainer}>
                        <Image style={styles.image} source={require('../assets/favicon.png')}></Image>
                        <TextInput value={inputEnteredText} style={styles.inputField} placeholder='Your Course Goal!!' onChangeText={inputHandler}></TextInput>
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title="Add Goal" onPress={addGoal}/>
                            </View>
                            <View style={styles.button}>
                                <Button title="Cancel" onPress={cancel} color={'#DC4B4B'}></Button>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({

    inputContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:'purple'
    },
    inputField: {
        width:'90%',
        padding:8,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'white'
    },
    buttonContainer: {
        marginTop:16,
        flexDirection:'row'
    },
    button: {
        width:'40%',
        marginHorizontal:8,
    },
    image: {
        marginTop:80,
        width:100,
        height:100,
        marginBottom: 30,
    }
})      

export default GoalInput