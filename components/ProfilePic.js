import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Img from '../assets/insta.png'

function ProfilePic() {
    return (
        <Image
            style={styles.profile}
            source={Img}
        />
    )
}

const styles = StyleSheet.create({
    profile: {
        height: 55,
        width: 55,
        borderRadius: 60,
        shadowColor: 'black',
        shadowRadius: 2
    }
})

export default ProfilePic
