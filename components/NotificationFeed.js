import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import Notifications from '../database/notification.json'
import ProfilePic from './ProfilePic'

function NotificationFeed() {
    const [notification, setNotification] = useState(Notifications)
    return (
        <FlatList
            data={notification}
            renderItem={({ item }) => (
                <View style={style.postBlock}>
                    <View style={style.profile}>
                        <ProfilePic />
                        <Text>{item.poster}</Text>
                    </View>
                    <View style={style.post}>
                        <Text>{item.post}</Text>
                        <Text>{item.time}</Text>
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
        marginTop: 10
    }
})

export default NotificationFeed
