import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface buttonProps {
    title: String,
    handlePress: () => void,
    containerStyles?: String,
    textStyles?: String,
    isLoading?: boolean
}

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }: buttonProps) => {
    return (
        <TouchableOpacity
            disabled={isLoading}
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary rounded-md min-h-[3.5em] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        >
            <Text className={`text-primary font-psemibold text-md px-8 text-center ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton