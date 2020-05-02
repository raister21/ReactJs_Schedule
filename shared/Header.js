import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'


function Header() {
    var time = new Date()
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const [dayNow, setDayNow] = useState('')
    const [hourNow, setHourNow] = useState('')
    const [minuteNow, setMinuteNow] = useState('')


    useEffect(() => {
        const dayChange = day[time.getDay()]
        var hourChange = time.getHours()
        var minuteChange = time.getMinutes()

        setDayNow(dayChange)
        setHourNow(hourChange)
        setMinuteNow(minuteChange)
    }, [dayNow, hourNow, minuteNow])

    return (
        <View style={styles.datetime}>
            <Text style={styles.text}>{dayNow}</Text>
            <Text style={styles.text}>{`${hourNow} : ${minuteNow} , ${month[time.getMonth()]} ${time.getDate()}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    datetime: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingLeft: 10,
        justifyContent: 'center',
        flexDirection: "column",
    },

    text: {
        fontSize: 20,
        color: '#555B5A',
        fontWeight: 'bold'
    },

})


export default Header
