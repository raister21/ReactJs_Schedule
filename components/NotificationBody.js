import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import ItemSeperator from '../components/ItemSeperator'
import NotificationFeed from './NotificationFeed'

function NotificationBody() {
    return (
        <View style={styles.container}>
            <Text style={styles.listHeader}>Notification</Text>
            <ItemSeperator />
            <NotificationFeed />
            <View style={styles.clearBtn}>
                <Text style={{ textAlign: 'center', fontSize: 14 }}>Clear</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {

        width: '100%'

    },
    listHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    clearBtn: {
        marginTop: 120,
        borderRadius: 10,
        backgroundColor: '#FFD06B',
        padding: 20,
        borderRadius: 20,



    }
})

export default NotificationBody
