import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
    StatusBar.setBackgroundColor('#161622')
    StatusBar.setBarStyle('light-content')

    return (
        <>
            <Stack>
                <Stack.Screen
                    name="sign-in"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="sign-up"
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>
        </>
    )
}

export default AuthLayout