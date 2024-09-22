import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { wp } from '../helpers/common'
import { hp } from '../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/Button'
//import { router } from 'expo-router'
import { useRouter } from 'expo-router'
const Welcome = () => {
    const router = useRouter();
    return (
        <ScreenWrapper bg="white">
            <StatusBar style="dark" />
            <View style={styles.container}>
                {/* welcome image*/}
                <Image style={styles.welcomeImage} resizeMode="contain" source={require('../assets/images/welcome.png')} />
                {/* title*/}
                <View style={{ gap: 20 }}>
                    <Text style={styles.title}>LinkUp!</Text>
                    <Text style={styles.punchLine}>
                        Where every moment is a memory
                    </Text>
                </View>
                {/* footer*/}
                <View style={styles.footer}>
                    <Button
                        title='Getting Started'
                        buttonStyle={{ marginHorizontal: wp(3) }}
                        onPress={() => { router.push('signUp') }}
                    />
                    <View style={styles.bottomTextContainer}>
                        <Text style={styles.loginText}>
                            Already have an account?
                        </Text>
                        <Pressable onPress={() => { router.push('login') }}>
                            <Text style={[styles.loginText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: wp(4)
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100),
        alignSelf: 'center'
    },

    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: 'center',
        fontWeight: theme.fonts.extraBold
    },

    punchLine: {
        color: theme.colors.text,
        fontSize: hp(1.7),
        textAlign: 'center',
        paddingHorizontal: wp(10),
    },
    footer: {
        width: '100%',
        gap: 30
    },

    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    loginText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6),
    }

})