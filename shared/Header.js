import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProfilePic from '../components/ProfilePic'

function Header() {
    var time = new Date()
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const [dayNow, setDayNow] = useState('')
    const [hourNow, setHourNow] = useState('')
    const [minuteNow, setMinuteNow] = useState('')
    const [secondNow, setSecondNow] = useState('')


    const updateTime = () => {
        const dayChange = day[time.getDay()]
        const hourChange = time.getHours()
        const minuteChange = time.getMinutes()
        const secondChange = time.getSeconds()


        setDayNow(dayChange)
        setHourNow(hourChange)
        setMinuteNow(minuteChange)
        setSecondNow(secondChange)
    }


    useEffect(() => {
        setTimeout(() => { updateTime() }, 1000)
    })


    return (
        <View style={styles.container}>
            <View style={styles.datetime}>
                <Text style={styles.text}>{dayNow}</Text>
                <Text style={styles.text}>{`${hourNow} : ${minuteNow} : ${secondNow}, ${month[time.getMonth()]} ${time.getDate()}`}</Text>
            </View>
            <View style={styles.profile}>
                <ProfilePic />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },

    datetime: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 60,
        paddingLeft: 10,
        justifyContent: 'center',
        flexDirection: "column",
    },

    profile: {
        alignSelf: 'flex-end',
        marginRight: 20
    },

    text: {
        fontSize: 20,
        color: '#555B5A',
        fontWeight: 'bold'
    },

})


export default Header
