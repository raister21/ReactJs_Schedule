import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import LocalNotes from '../database/localnotes.json'
import { Text, View, StyleSheet } from 'react-native'

function Notes() {

    const [note, setNote] = useState(LocalNotes)

    return (
        <FlatList
            data={note}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={styles.noteBlock}>
                    <Text style={styles.indNote}>{item.note}</Text>
                </View>
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
