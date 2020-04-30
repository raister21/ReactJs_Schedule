import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native'
import Schedule from './database/schedule.json'

function Body() {
    const [schedule, setSchedule] = useState(Schedule)
    return (
        <FlatList
            style={styles.list}
            data={Object.keys(schedule)}
            renderItem={({ item }) => (
                < View style={styles.block}>
                    <Text style={styles.listHeader}>{schedule[item].class}</Text>
                    <Text style={styles.listItem}>{schedule[item].day}</Text>
                    <Text style={styles.listItem}>{schedule[item].time}</Text>
                    <Text style={styles.listItem}>{schedule[item].type}</Text>
                </View>
            )
            }
        />
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 60
    },

    listItem: {
        fontSize: 20,
    },

    listHeader: {
        fontSize: 40
    },

    block: {
        margin: 20
    }
})

export default Body
