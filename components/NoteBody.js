import React, { useState, useEffect } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Button, View, StyleSheet, Text } from 'react-native'
import Notes from './Notes'
import ItemSeperator from '../components/ItemSeperator'
import axios from 'axios'

function NoteBody() {

    const [input, setInput] = useState('')
    const [usr, setUsr] = useState('Dipsan')
    const [note, setNote] = useState([])

    const AddBtn = () => {
        axios.post('http://192.168.1.70:8081/api/notes', {
            noteID: usr,
            note: input
        })
            .then(
                axios.get('http://192.168.1.70:8081/api/notes')
                    .then((response) => setNote(response.data))
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
            )
            .catch(function (error) {
                console.log(error);
            });
    }


    useEffect(() => {
        axios.get('http://192.168.1.70:8081/api/notes')
            .then((response) => setNote(response.data))
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error))
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.listHeader}>Notes</Text>
            <ItemSeperator />
            <TextInput placeholder="Write here!" style={styles.txt} placeholderTextColor="#fcf342" onChangeText={val => setInput(val)} />
            <View style={styles.notesContainer}>
                <Notes propNote={note} />
            </View>
            <TouchableOpacity onPress={AddBtn}>
                <View style={styles.Btn}>
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>Add</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },

    txt: {
        width: '100%',
        color: '#fcf342',
        fontSize: 18,
        padding: 10,
        backgroundColor: '#545454',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 2,
        borderRadius: 10,
        marginBottom: 10
    },

    Btn: {
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#FFD06B',
        padding: 20,
        borderRadius: 20,
    },
    listHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    notesContainer: {

        marginBottom: 10,
        flex: 1
    }


})

export default NoteBody
