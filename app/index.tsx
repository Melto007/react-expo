import React from 'react'
import { ScrollView, View, Image, Text, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../constants'
import CustomButton from '../components/customButton'
import { router } from 'expo-router'

const index = () => {
    StatusBar.setHidden(true)
    return (
        <>
            <SafeAreaView className='bg-primary h-full'>
                <ScrollView contentContainerStyle={{ height: '100%' }}>
                    <View
                        className='w-full items-center justify-center h-[90vh] px-2'
                    >
                        <Image
                            source={images.logo}
                            className='w-[9em] h-[8em]'
                            resizeMode='contain'
                        />
                        <Image
                            source={images.cards}
                            className='max-w-[30em] h-[20em]'
                            resizeMode='contain'
                        />
                        <View className='relative mt-5'>
                            <Text className='text-white text-3xl text-center font-bold mt-5'>Discover Endless Possibilities with <Text className='text-secondary-200'>Aora</Text></Text>
                            <Image
                                source={images.path}
                                resizeMode='contain'
                                className='w-[6.4em] h-[1em] absolute -bottom-2 right-[7.6em]'
                            />
                        </View>
                        <Text className='text-gray-100 mt-7 font-pregular text-center'>
                            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
                        </Text>
                        <CustomButton
                            title="Continue with Email"
                            handlePress={() => router.push('/sign-in')}
                            containerStyles="w-[90%] mt-7"
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default index