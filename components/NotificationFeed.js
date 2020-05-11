import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import ProfilePic from './ProfilePic'
import axios from 'axios'

function NotificationFeed() {

    const [serverData, setServerData] = useState([])

    useEffect(() => {
        axios.get('http://192.168.1.70:8081/api/notifications')
            .then((response) => {
                setServerData(response.data)
                console.log(response.data)
            }, [serverData])
            .catch((error) => console.log(error))
    }, [])

    return (
        <FlatList
            data={serverData}
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
