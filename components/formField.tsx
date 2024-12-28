import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'


import { icons } from '@/constants'

interface formProps {
    title: string,
    values: string,
    handleChangeText: (text: string) => void,
    otherStyles?: string,
    keyboardTypes?: string,
    placeholder: string
}

const FormField = ({ title, values, handleChangeText, otherStyles, keyboardTypes, placeholder }: formProps) => {
    const [ showPassword, setShowPassword ] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
            <View className='flex-row w-full h-16 bg-black-100 rounded-xl focus:border-secondary justify-center border border-black-200'>
                <TextInput
                    className='flex-1 text-white font-psemibold text-base'
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    placeholder={placeholder}
                    value={values}
                    secureTextEntry={title === 'Password' && !showPassword}
                />
                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className='w-6 h-6 mt-5 mr-2'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField