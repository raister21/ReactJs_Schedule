import React from 'react'
import { View, StyleSheet } from 'react-native'
import Body from '../components/Body'
import Header from '../shared/Header'
import ProfilePic from '../components/ProfilePic'

function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
                <ProfilePic />
            </View>
            <View style={styles.body}>
                <Body />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#629CEC',
    },

    header: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#629CEC',
        alignItems: 'flex-start',
        marginLeft: 30

    },

    body: {
        flex: 8,
        width: '100%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 60

    }
});

export default Home
