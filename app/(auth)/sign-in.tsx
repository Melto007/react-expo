import { View, ScrollView, Image, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/formField'
import CustomButton from '@/components/customButton'
import { Link } from 'expo-router'

interface FormState {
    email: string;
    password: string;
}

const SignIn = () => {
    const [ form, setForm ] = useState<FormState>({
        email: '',
        password: ''
    })
    const [ isSubmitting, setIsSubmitting ] = useState(false)

    return (
        <>
            <SafeAreaView className='bg-primary w-full h-full'>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                >
                    <ScrollView>
                        <View className='w-full h-[90vh] justify-center px-4 my-4'>
                            <Image
                                source={images.logo}
                                resizeMode='contain'
                                className='w-[8em] h-[2.3em]'
                            />
                            <Text className='text-white text-lg mt-[1em] font-psemibold'>Sign in</Text>
                            <FormField
                                title="Email"
                                values={form.email}
                                handleChangeText={(e) => setForm({...form, email: e})}
                                otherStyles="mt-7"
                                keyboardTypes="email-address"
                                placeholder="Enter the email address"
                            />
                            <FormField
                                title="Password"
                                values={form.password}
                                handleChangeText={(e) => setForm({...form, password: e})}
                                otherStyles="mt-7"
                                placeholder="Enter the Password"
                            />
                            <CustomButton
                                title="Sign In"
                                handlePress={() => {}}
                                containerStyles="my-7"
                                isLoading={isSubmitting}
                            />

                            <View className='flex-row justify-center gap-2 items-center'>
                                <Text className='text-gray-100 font-pregular font-lg '>Already have an account?</Text>
                                <Link href="/sign-up" className='text-lg text-secondary font-psemibold'>Login</Link>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    )
}

export default SignIn