import { StyleSheet } from 'react-native'

export const globalStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#629CEC',
    },

    header: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: '#629CEC',
        alignItems: 'flex-end',


    },

    body: {
        flex: 18,
        width: '100%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 30,
        paddingHorizontal: 50

    }
})
