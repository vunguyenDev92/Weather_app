import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'

const Input = (props) => {
    return (
        <View style={[styles.container, props.containerStyles && props.containerStyles]}>
            {
                props.icon && props.icon
            }
            <TextInput
                style={{ flex: 1 }}
                placeholderTextColor={theme.colors.textLight}
                ref={props.inputRef && props.inputRef}
                {...props}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: hp(7.2),
        justifyContent: 'center',
        borderWidth: 0.4,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        borderCurve: 'continuous',
        paddingHorizontal: 18,
        gap: 12
    }
})