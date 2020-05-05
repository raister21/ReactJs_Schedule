import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../shared/Header'
import { globalStyle } from '../shared/GlobalStyle'
import Card from '../components/Card'
import ClassModal from '../components/Modals/ClassModal'


function Home() {

    const [classVisible, setClassVisible] = useState(false)
    const [noteVisible, setNoteVisible] = useState(false)
    const [attendVisible, setAttendVisible] = useState(false)
    const [settingVisible, setSettingVisible] = useState(false)

    function display() {
        setClassVisible(true)
        setClassVisible(false)
    }



    return (
        <View style={globalStyle.container}>
            <View style={globalStyle.header}>
                <Header />
            </View>
            <View style={globalStyle.body}>
                <View style={style.body}>
                    <TouchableOpacity onPress={display}>
                        <Card text={'Class'} color={'#FF6363'} icon={'class'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Card text={'Note'} color={'#A6F4FF'} icon={'note'} />
                    </TouchableOpacity>
                </View>
                <View style={style.body}>
                    <TouchableOpacity>
                        <Card text={'Attend'} color={'#FFC164'} icon={'done'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Card text={'Setting'} color={'#87FF93'} icon={'settings'} />
                    </TouchableOpacity>
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
