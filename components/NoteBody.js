import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Button, View, StyleSheet, Text } from 'react-native'
import Notes from './Notes'
import ItemSeperator from '../components/ItemSeperator'

function NoteBody() {
    return (
        <View style={styles.container}>
            <Text style={styles.listHeader}>Notes</Text>
            <ItemSeperator />
            <TextInput placeholder="Write here!" style={styles.txt} />
            <View style={styles.notesContainer}>
                <Notes />
            </View>

            <View style={styles.Btn}>
                <Text style={{ textAlign: 'center', fontSize: 14 }}>Add</Text>
            </View>
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
        fontSize: 14,
        padding: 10,
        backgroundColor: '#fcfcfc',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 2,
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
