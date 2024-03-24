import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image,TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'

const SignUpScreen = () => {
  const navigation=useNavigation();

  return (
    <View className="flex-1 bg-[#789461]">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={() => navigation.goBack()}
            className="bg-primary p-2 my-3 rounded-tr-2xl rounded-bl-2xl ml-3">
            <ArrowLeftIcon size="20" color="#DBE7C9"></ArrowLeftIcon>
          </TouchableOpacity>
        </View>
        <View className="my-2 flex-row justify-center">
          <Image source={require("../../asset/signup.png")} className='w-[150px] h-[150px]'></Image>
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-neutral px-8 pt-8 rounded-tr-[25px] rounded-tl-[25px]">
        <View className="space-y-2">
          <Text className="text-gray-700 mx-4 font-semibold text-base">
                  Username
          </Text>
          <TextInput className=" text-secondary mx-2 mb-3 font-medium bg-[#f5f5f5] rounded-2xl p-[10px]"
                  placeholder='Enter Username'>
          </TextInput>
        </View>
        <View className="space-y-2">
          <Text className="text-gray-700 mx-4 font-semibold text-base">
                  Email Address
          </Text>
          <TextInput className=" text-secondary mx-2 mb-3 font-medium bg-[#f5f5f5] rounded-2xl p-[10px]" 
                  placeholder='Enter Email'>
          </TextInput>
        </View>
        <View className="space-y-2">
          <Text className="text-gray-700 mx-4 font-semibold text-base">
                  Password
          </Text>
          <TextInput  className=" text-secondary mx-2 mb-3 font-medium bg-[#f5f5f5] rounded-2xl p-[10px]"
                placeholder='Enter Password'
                secureTextEntry>
          </TextInput>
        </View>
        <TouchableOpacity className="py-2 my-3 mx-2 bg-primary rounded-xl">
          <Text onPress={() => {navigation.navigate("Home")}}
		  className="text-text text-xl font-bold text-center">Sign Up</Text>
        </TouchableOpacity>
          <Text className="font-bold text-center text-2xl mb-3 text-[#616161]">
                Or
          </Text>
        <View className="flex-row justify-around">
          <TouchableOpacity className="p-2 rounded-2xl bg-slate-50">
            <Image source={require("../../asset/google.png")} className="w-10 h-10">
            </Image>
          </TouchableOpacity>
          <TouchableOpacity className="p-2 rounded-2xl bg-slate-50">
            <Image source={require("../../asset/facebook.png")} className="w-10 h-10">
            </Image>
          </TouchableOpacity>
          <TouchableOpacity className="p-2 rounded-2xl bg-slate-50">
            <Image source={require("../../asset/instagram.png")} className="w-10 h-10">
            </Image>
          </TouchableOpacity>
        </View>
        <View className="flex-row py-5 justify-center">
          <Text className="font-semibold text-[#616161]">
             Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-semibold text-primary ">  Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})