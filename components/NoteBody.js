import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Button, View, StyleSheet, Text } from 'react-native'
import Notes from './Notes'

function NoteBody() {
    return (
        <View style={styles.container}>
            <TextInput placeholder="To do" style={styles.txt} />
            <Text>What</Text>
            <Notes />
            <Text>Now</Text>
            <View style={styles.Btn}>
                <Text style={{ textAlign: 'center', fontSize: 14 }}>Add</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },

    txt: {
        width: '100%',
        fontSize: 14,
        padding: 10,
        backgroundColor: '#e3e3e3'
    },

    Btn: {
        marginTop: 120,
        borderRadius: 10,
        backgroundColor: '#FFD06B',
        padding: 20,
        borderRadius: 20,
    }


})

export default NoteBody
