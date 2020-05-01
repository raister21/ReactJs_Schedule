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
        marginTop: 45,
        marginRight: 20
    }
})

export default ProfilePic
