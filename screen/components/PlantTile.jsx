import { Text, TouchableOpacity, View, Image } from 'react-native'
import { React } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../asset/images'
import { useNavigation } from '@react-navigation/native'

const PlantTile = (props) => {
	// UNFORTUNATELY, WE HAVE NO BACKEND :P
	const navigation = useNavigation()

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const data = props.data
	const plant = capitalizeFirstLetter(data.plant)
	const pic_key = data.plant
	const amount = data.amount
	const status = capitalizeFirstLetter(data.status)
	const date = data.harvest_date

	return (
		<TouchableOpacity onPress={() => { navigation.navigate("PlantingDetail") }}>
			<View className='shadow-lg flex-row rounded-[20px] bg-[#F0D3D3] m-1 h-20'>
				<View className='flex-col flex-1 grow-[3] w-[20px] ml-5'>
					<View className='flex-column justify-center h-1/2 w-full'>
						<Text className='font-extrabold text-2xl'>
							{plant}
						</Text>
					</View>
					<View className='flex-row h-1/2 w-full space-x-5'>
						<View>
							<Image source={require("../../asset/logo/plant.png")} className='w-4 h-4'>
							</Image>
							<Text>
								{amount} crops
							</Text>
						</View>
						<View>
							<Image source={require("../../asset/logo/heart.png")} className='w-4 h-4'>
							</Image>
							<Text>
								{status}
							</Text>
						</View>
						<View>
							<Image source={require("../../asset/logo/timer.png")} className='w-4 h-4'>
							</Image>
							<Text>
								{date.toLocaleDateString('en-us', { year:"numeric", month:"short"})}
							</Text>
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

export default PlantTile
