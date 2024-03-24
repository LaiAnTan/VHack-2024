import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'
import SelectPlantTile from '../components/SelectPlantTile'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import images from '../../asset/images'
import NewBatch from "../components/NewBatch"

// mmm, probably need to pass in the state
const PlantInfoScreen = () => {
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const navigation = useNavigation()

	// get this in backend also
	const fake_data = 
		{
			plant_id: "tomato_1",
			plant: "tomato",
			plant_name: "Tomatoes",
			plant_time: 100,
			plant_temp: 21,
			plant_diff: 0, // 0 easy, 1 ok, 2 hard
			plant_seasons: ["summer"],
		}

	const { plant_id, plant, plant_name, plant_time, plant_seasons, plant_diff, plant_temp } = fake_data

	const initial_value = ""
	const season_list = plant_seasons.reduce((accumulator, value) => {
		if (accumulator) {
			return accumulator + " / " + capitalizeFirstLetter(value)
		} else {
			return capitalizeFirstLetter(value)
		}
	}
	, initial_value)

	const difficulty_list = ["Easy", "Medium", "Hard"]

	return (
	<View className='h-full bg-user_bg'>
		<TouchableOpacity onPress={() => navigation.goBack()}
			className="flex justify-center content-center bg-primary p-2 my-3 rounded-tr-2xl rounded-bl-2xl ml-3 w-9 h-9 bg-user_back">
			<ArrowLeftIcon size="20" color="#DBE7C9"></ArrowLeftIcon>
		</TouchableOpacity>

		<View className='flex-1 mt-12'>
			<View>
				<ImageBackground source={images[plant]} className='flex justify-center h-[20vh] w-full'>
					<Text className='font-extrabold text-slate-50 text-center text-5xl'>{plant_name}</Text>
				</ImageBackground>
			</View>
			<View className='flex-column content-center justify-center'>
				<Text className='font-extrabold text-4xl text-center m-5'>Info</Text>

				<View className='flex-row m-1 mx-16'>
					<View className='h-auto justify-center'>
						<Image source={require("../../asset/logo/timer.png")} className='h-8 w-8'/>
					</View>
					<Text className='text-lg ml-5'>{plant_time} days to mature</Text>
				</View>

				<View className='flex-row m-1 mx-16'>
					<View className='h-auto justify-center'>
						<Image source={require("../../asset/logo/seasons.png")} className='h-8 w-8'/>
					</View>
					<Text className='text-lg ml-5'>Plant in {season_list}</Text>
				</View>

				<View className='flex-row m-1 mx-16'>
					<View className='h-auto justify-center'>
						<Image source={require("../../asset/logo/thermometer.png")} className='h-8 w-8'/>
					</View>
					<Text className='text-lg ml-5'>{plant_temp}° Celcius</Text>
				</View>

				<View className='flex-row m-1 mx-16'>
					<View className='h-auto justify-center'>
						<Image source={require("../../asset/logo/speedometer.png")} className='h-8 w-8'/>
					</View>
					<Text className='text-lg ml-5'>{difficulty_list[plant_diff]} overall difficulty</Text>
				</View>
			</View>
			<NewBatch />
		</View>

		<Footer />
	</View>
	)
}

export default PlantInfoScreen
