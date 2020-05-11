import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProfilePic from '../components/ProfilePic'

function Header() {
    var time = new Date()
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const [dayNow, setDayNow] = useState(day[time.getDay()])
    const [hourNow, setHourNow] = useState(time.getHours())
    const [minuteNow, setMinuteNow] = useState(time.getMinutes())
    const [secondNow, setSecondNow] = useState(time.getSeconds())


    const updateTime = () => {
        const dayChange = day[time.getDay()]
        const hourChange = time.getHours()
        const minuteChange = time.getMinutes().toLocaleString()
        const secondChange = time.getSeconds()


        setDayNow(dayChange)
        setHourNow(hourChange)
        setMinuteNow(minuteChange)
        setSecondNow(secondChange)

    }


    useEffect(() => {
        setInterval(() => updateTime(), 1000)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.datetime}>
                <Text style={styles.text}>{dayNow}</Text>
                <Text style={styles.text}>{`${hourNow} : ${minuteNow} , ${month[time.getMonth()]} ${time.getDate()}`}</Text>
            </View>
            <View style={styles.profile}>
                <ProfilePic />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },

    datetime: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 40,
        paddingBottom: 10,
        justifyContent: 'center',
        flexDirection: "column",
    },

    profile: {
        alignSelf: 'flex-end',
        paddingRight: 40,
        paddingBottom: 10
    },

    text: {
        fontSize: 20,
        color: '#555B5A',
        fontWeight: 'bold'
    },

})


export default Header
