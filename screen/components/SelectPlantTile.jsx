import { Text, TouchableOpacity, View, Image } from 'react-native'
import { React } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../asset/images'
import { useNavigation } from '@react-navigation/native'

const SelectPlantTile = (props) => {
	const navigation = useNavigation()
	// UNFORTUNATELY, WE HAVE NO BACKEND :P

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const data = props.data
	const plant_name = data.plant_name
	const pic_key = data.plant
	const plant_time = data.plant_time
	const seasons = data.plant_seasons

	const initial_value = ""
	const season_out = seasons.reduce((accumulator, value) => {
		if (accumulator) {
			return accumulator + ", " + capitalizeFirstLetter(value)
		} else {
			return capitalizeFirstLetter(value)
		}
	}
	, initial_value)

	return (
		<TouchableOpacity onPress={() => navigation.navigate("PlantInfo")}>
			<View className='shadow-lg flex-row rounded-[20px] bg-slate-50 m-1 h-20'>
				<View className='flex-col flex-1 grow-[3] w-[20px] ml-5'>
					<View className='flex-column justify-center h-1/2 w-full'>
						<Text className='font-extrabold text-2xl'>
							{plant_name}
						</Text>
					</View>
					<View className='flex-row h-1/2 w-full space-x-5'>
						<View className='flex-[1]'>
							<Image source={require("../../asset/logo/timer.png")} className='w-4 h-4' />
							<Text>
								{plant_time} Days
							</Text>
						</View>
						<View className='flex-[2]'>
							<View className='flex-row space-x-1'>
							{
								seasons.map((value) => <Image source={images[value]} className='w-4 h-4'/>)
							}
							</View>
							<Text>{season_out}</Text>
						</View>
					</View>
				</View>
				<View className='flex-1 h-full w-[20px] bg-blue-300 rounded-r-[20px]'>
					<Image source={images[pic_key]} className='h-full w-full rounded-r-[20px]'></Image>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default SelectPlantTile
