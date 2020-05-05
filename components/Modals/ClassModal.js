import React, { useState, useEffect } from 'react'
import { Modal, Button, Text, View } from 'react-native'

function ClassModal({ visibility }) {

    const [visible, setVisible] = useState(visibility)

    useEffect(() => {
        console.log(visible)
        setVisible(true)
    })
    return (
        <Modal visible={visible}>

            <Text>In class</Text>
            <Text>OLLLAA</Text>
            <Button onPress={() => setVisible(false)} title="Click" />

        </Modal>
    )
}

export default ClassModal
