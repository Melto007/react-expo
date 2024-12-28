import { View, Image, Text, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '../../constants'

type HexColor = `#${string}`

interface TabIconData {
    icon: ImageSourcePropType,
    color: HexColor,
    name: String,
    focused: Boolean
}

const TabIcon = ({ color, icon, name, focused }: TabIconData) => {
    return (
        <View className='items-center justify-center gap-2 w-20 pt-10'>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={focused ? color : '#fff'}
                className='w-6 h-6'
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular text-white'} text-xs`} style={{
                color: focused ? color : '#fff'
            }}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopColor: '#232533',
                        borderTopWidth: 1,
                        height: 70
                    }
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                color="#f0ae22"
                                icon={icons.home}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                color="#f0ae22"
                                icon={icons.profile}
                                name="Profile"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="create"
                    options={{
                        title: "Create",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                color="#f0ae22"
                                icon={icons.plus}
                                name="Create"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="bookmark"
                    options={{
                        title: "Bookmark",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                color="#f0ae22"
                                icon={icons.bookmark}
                                name="Saved"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout
