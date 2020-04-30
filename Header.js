import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



function Header() {
    var time = new Date()
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return (
        <View style={styles.datetime}>
            <Text style={styles.text}>{day[time.getDay()]}</Text>
            <Text style={styles.text}>{`${time.getHours()} : ${time.getMinutes()} , ${month[time.getMonth()]} ${time.getDate()}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    datetime: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: "column",
    },

    text: {
        fontSize: 20,
        color: '#555B5A',
        fontWeight: 'bold'
    }
})


export default Header
