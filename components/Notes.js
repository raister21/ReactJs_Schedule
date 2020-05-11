import React, { useState, useEffect, Context } from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Text, View, StyleSheet, AsyncStorage } from 'react-native'
import Axios from 'axios'


function Notes({ propNote }) {

    const [note, setNote] = useState(propNote)
    useEffect(() => {
        Axios.get('http://192.168.1.70:8081/api/notes')
            .then((response) => setNote(response.data))
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error))
    }, [])


    return (
        <FlatList
            data={note}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <View style={styles.noteBlock}>
                        <Text style={styles.indNote}>{item.note}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    noteBlock: {
        marginTop: 5,
        padding: 10,
    },

    indNote: {
        fontSize: 16
    }

})

export default Notes
