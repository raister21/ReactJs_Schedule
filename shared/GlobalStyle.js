import { StyleSheet } from 'react-native'

export const globalStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#629CEC',
    },

    header: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: '#629CEC',
        alignItems: 'flex-start',
        marginLeft: 30

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
