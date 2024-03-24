import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-tertiary">
      <View className="flex-1 justify-center space-y-14">
        <View className=" mx-10 flex-row justify-center ">
          <Image source={require("../../asset/planting.png")} className='w-[150px] h-[150px]'></Image>
        </View>
        <Text className="font-bold text-center text-4xl text-text">plant overflow</Text>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}className="bg-primary mx-8 rounded-xl py-3">
            <Text className="font-bold text-neutral text-center text-xl">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row py-5 justify-center">
        <Text className="font-semibold text-text ">
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="font-semibold text-primary ">  Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
  }

export default WelcomeScreen

