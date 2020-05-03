import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

function Card({ text, color }) {


    return (
        <View style={[{ backgroundColor: color }, styles.container]}>
            <Text>{text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 135,
        height: 135,
        elevation: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        shadowOffset: { height: 2 },
        shadowColor: '#000000',
        shadowRadius: 5,
        shadowOpacity: 0.9,
        marginHorizontal: 20,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },

})

export default Card
