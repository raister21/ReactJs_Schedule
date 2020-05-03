import React, { Component } from 'react'
import { View } from 'react-native'
import Header from '../shared/Header'
import { globalStyle } from '../shared/GlobalStyle'
import NotificationBody from '../components/NotificationBody'

class Notification extends Component {

    render() {
        return (
            <View style={globalStyle.container}>
                <View style={globalStyle.header}>
                    <Header />
                </View>
                <View style={globalStyle.body}>
                    <NotificationBody />
                </View>
            </View>
        )

    }
}


export default Notification
