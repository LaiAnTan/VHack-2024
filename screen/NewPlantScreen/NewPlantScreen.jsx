import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'
import SelectPlantTile from '../components/SelectPlantTile'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

// mmm, probably need to pass in the state
const NewPlantScreen = () => {

	const navigation = useNavigation()

	// get this in backend also
	const fake_data = [
		{
			plant_id: "tomato_1",
			plant: "tomato",
			plant_name: "Tomatoes",
			plant_time: 100,
			plant_seasons: ["summer"],
		},
		{
			plant_id: "bokchoy_1",
			plant: "bokchoy",
			plant_name: "Bok Choy",
			plant_time: 45,
			plant_seasons: ["spring", "fall"],
		}
	]

	return (
	<View className='h-full bg-user_bg'>
		<TouchableOpacity onPress={() => navigation.goBack()}
			className="flex justify-center content-center bg-primary p-2 my-3 rounded-tr-2xl rounded-bl-2xl ml-3 w-9 h-9 bg-user_back">
			<ArrowLeftIcon size="20" color="#000000"></ArrowLeftIcon>
		</TouchableOpacity>

		<View className='flex-1 mt-12'>
			<View className='m-5 space-y-5 p-2 rounded-xl'>

				<Text className='font-extrabold text-[25px] text-center'>
					Select Plants
				</Text>

				<View className='flex-column'>
					{
						(fake_data && fake_data.length) ?
						fake_data.map((value) => <SelectPlantTile data={value} key={value.plant_id} />) :
						<Text className='text-center text-base'>
							No plants planted
						</Text>
					}
				</View>
			</View>
		</View>
		<Footer />
	</View>
	)
	// note, very wrong way of doing this, im doing like this cuz im running out of time
}

export default NewPlantScreen
