import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import Notifications from '../database/notification.json'
import ProfilePic from './ProfilePic'
import Axios from 'axios'

function NotificationFeed() {

    const [serverNotification, setServerNotification] = useState([])
    useEffect(() => {
        Axios.get('http://192.168.1.70:8081/api/notifications')
            .then((response) => setServerNotification(response.data))
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error))
    }, [])

    const [notification, setNotification] = useState(Notifications)
    return (
        <FlatList
            data={serverNotification}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
                <View style={style.postBlock}>
                    <View style={style.profile}>
                        <ProfilePic />
                        <Text>{item.poster}</Text>
                    </View>
                    <View style={style.post}>
                        <Text>{item.post}</Text>
                        <Text style={{ alignSelf: 'flex-end' }}>{item.time}</Text>
                    </View>
                </View>
            )}
        />
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },

    postBlock: {
        flexDirection: 'row',
        marginTop: 20

    },

    profile: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly'
    },

    post: {
        flex: 3,
        marginTop: 10,
        paddingLeft: 20
    }
})

export default NotificationFeed
