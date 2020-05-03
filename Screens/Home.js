import React from 'react'
import { View, StyleSheet } from 'react-native'
import Body from '../components/Body'
import Header from '../shared/Header'
import { globalStyle } from '../shared/GlobalStyle'
import Card from '../components/Card'

function Home() {
    return (
        <View style={globalStyle.container}>
            <View style={globalStyle.header}>
                <Header />
            </View>
            <View style={globalStyle.body}>
                <View style={style.body}>
                    <Card text={'Class'} color={'#FF6363'} />
                    <Card text={'Note'} color={'#A6F4FF'} />
                </View>
                <View style={style.body}>
                    <Card text={'Attend'} color={'#FFC164'} />
                    <Card text={'Setting'} color={'#87FF93'} />
                </View>


            </View>
        </View>
    )
}

const style = StyleSheet.create({
    body: {
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    }
})


export default Home
