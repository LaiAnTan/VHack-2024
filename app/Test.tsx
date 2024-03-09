import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'

import "../global.css"

function Test(): React.JSX.Element {
    return (
        <View>
            <View className="w-100% h-full bg-blue-500">
                <LinearGradient colors={['white', 'green']} className="flex-1 items-center content-center justify-center">
                    <Text className="font-bold text-center">
                        I Like Big Hot Sweaty Men
                    </Text>
                </LinearGradient>
            </View>
        </View>
    );
};

export default Test;