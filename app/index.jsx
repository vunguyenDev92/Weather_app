import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Navigation from '../constants/navigation/navigation'
const index = () => {
    return (
        <View style={styles.container}>
            <Text>index</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})



export default index