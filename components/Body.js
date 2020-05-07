import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native'
import Schedule from '../database/schedule.json'
import ItemSeperator from './ItemSeperator'


function Body() {
    const [schedule, setSchedule] = useState(Schedule)
    return (
        <FlatList
            style={styles.list}
            data={Object.keys(schedule)}
            keyExtractor={item => `${schedule[item].key + 1}`}
            renderItem={({ item }) => (
                < View style={styles.block}>
                    <Text style={styles.listHeader}>{schedule[item].class}</Text>
                    <Text style={styles.listItem}>{schedule[item].time}</Text>
                    <Text style={styles.listItem}>{schedule[item].type}</Text>
                    <Text style={styles.listItem}>{schedule[item].day}</Text>
                </View>
            )}
            ItemSeparatorComponent={ItemSeperator}
            showsVerticalScrollIndicator={false}

        />
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: '100%',
    },

    listItem: {
        fontSize: 28,
        marginTop: 5,
        marginLeft: 5,
        paddingTop: 10

    },

    listHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },

    block: {
        marginBottom: 30
    }
})

export default Body
