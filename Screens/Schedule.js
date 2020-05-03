import React, { Component } from 'react'
import { View } from 'react-native'
import Body from '../components/Body'
import Header from '../shared/Header'
import { globalStyle } from '../shared/GlobalStyle'

class Schedule extends Component {

    render() {

        return (
            <View style={globalStyle.container} >
                <View style={globalStyle.header}>
                    <Header />
                </View>
                <View style={globalStyle.body}>
                    <Body />
                </View>
            </View>
        )
    }
}


export default Schedule
