import React, { useState, Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../shared/Header'
import { globalStyle } from '../shared/GlobalStyle'
import NoteBody from '../components/NoteBody'

class Note extends Component {

    render() {
        return (
            <View style={globalStyle.container} >
                <View style={globalStyle.header}>
                    <Header />
                </View>
                <View style={globalStyle.body}>
                    <NoteBody />
                </View>
            </View>
        )
    }
}




export default Note