import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import { React } from 'react'
import Footer from '../components/Footer'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const PlantingDetailScreen = () => {
	const navigation = useNavigation()
	// pov: no backend
	const fake_data = 
		{
			id: "00001",
			plant: "tomato",
			amount: 20,
			status: "healthy",
			harvest_date: new Date(2024, 3, 20) // dont ask
		}

	return (
		<View className='flex h-full bg-user_bg'>
			<View className='flex align-center justify-center'>
				<TouchableOpacity onPress={() => navigation.goBack()}
				className="flex justify-center content-center bg-primary p-2 my-3 rounded-tr-2xl rounded-bl-2xl ml-3 w-9 h-9 bg-user_back">
					<ArrowLeftIcon size="20" color="#000000"></ArrowLeftIcon>
				</TouchableOpacity>
			</View>

			<ScrollView className='flex-1 px-10'>
				
				<View>
					<Text className='text-2xl font-bold'>Overview</Text>
					<View className='flex-row justify-around'>
						<View className='flex-0 flex-col justify-center bg-green-500 py-2 my-5 rounded-[15px] w-[16vh] h-[15vh]'>
							<Text className='text-center font-extrabold text-5xl'>
								OK
							</Text>
							<Text className='text-center'>
								health
							</Text>
						</View>

						<View className='flex-0 flex-col justify-center bg-green-500 py-2 my-5 rounded-[15px] w-[16vh] h-[15vh]'>
							<Text className='text-center font-bold text-2xl'>
								20
							</Text>
							<Text className='text-center font-bold text-2xl'>
								Feb
							</Text>
							<Text className='text-center'>
								maturity
							</Text>
						</View>
					</View>
				</View>

				<View className='mt-5'>
					<Text className='text-2xl font-bold mb-2'>Alerts</Text>
					<View className='flex-row bg-[#FFF4DDDD] p-2 rounded-xl my-1 justify-content'>
						<View className='flex-1'>
							<Image className='w-6 h-6' source={require("../../asset/logo/watering.png")}/>
						</View>
						<Text className='flex-[4]'>Water</Text>
						<Text className='flex-[4] text-right'>7pm Daily</Text>
					</View>
					<View className='flex-row bg-[#FFF4DDDD] p-2 rounded-xl my-1 justify-content'>
						<View className='flex-1'>
							<Image className='w-6 h-6' source={require("../../asset/logo/fertilizer.png")}/>
						</View>
						<Text className='flex-[4]'>Fertillizer</Text>
						<Text className='flex-[4] text-right'>3 Feb</Text>
					</View>
				</View>

				<View>
					<Text className='text-2xl font-bold my-5'>Current Step</Text>
					{ /** big block of random green block */}
					<View className='h-[15vh] bg-green-400 w-full rounded-xl' />
				</View>

				<View>
					<Text className='text-2xl font-bold my-5'>Logging</Text>
					<View className='flex-row my-1 border-2 border-blue-300 bg-slate-50 rounded-xl p-2'>
						<Text className='flex-1 text-left'>height</Text>
						<Text className='flex-1 text-right'>12</Text>
					</View>
					<View className='flex-row my-1 border-2 border-blue-300 bg-slate-50 rounded-xl p-2'>
						<Text className='flex-1 text-left'>left size</Text>
						<Text className='flex-1 text-right'>12</Text>
					</View>
				</View>

				<View>
					<Text className='text-2xl font-bold my-2'>Actions</Text>
					<TouchableOpacity className='bg-red-500 m-1 mx-2 p-2 rounded-xl'>
						<Text className='text-center'>View Planting Directions</Text>
					</TouchableOpacity>
					<TouchableOpacity className='bg-red-500 m-1 mx-2 p-2 rounded-xl'>
						<Text className='text-center'>Check for Disease</Text>
					</TouchableOpacity>
					<TouchableOpacity className='bg-red-500 m-1 mx-2 p-2 rounded-xl'>
						<Text className='text-center'>Connect Sensors</Text>
					</TouchableOpacity>
				</View>

				<View className='w-full h-[10vh]' />
			</ScrollView>
			<Footer />
		</View>
	)
	// note, very wrong way of doing this, im doing like this cuz im running out of time
}

export default PlantingDetailScreen
