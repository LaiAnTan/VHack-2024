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
			<View className='flex-1 flex align-center justify-center'>
				<TouchableOpacity onPress={() => navigation.goBack()}
				className="flex justify-center content-center bg-primary p-2 my-3 rounded-tr-2xl rounded-bl-2xl ml-3 w-9 h-9 bg-user_back">
					<ArrowLeftIcon size="20" color="#000000"></ArrowLeftIcon>
				</TouchableOpacity>
			</View>
			<ScrollView className='mx-5'>
				<View className='bg-green-100'>
					<Text className='text-2xl font-bold'>Overview</Text>
					<View className='flex-col'>
						<Text>
							OK
						</Text>
						<Text>
							health
						</Text>
					</View>

					<View className=''>
						<Text>
							20
						</Text>
						<Text>
							Feb
						</Text>
						<Text>
							maturity
						</Text>
					</View>
				</View>

				<View className='bg-blue-50'>
					<Text className='text-2xl font-bold'>Alerts</Text>
					<View>
						<Text>Water</Text>
						<Text>7pm Daily</Text>
					</View>
					<View>
						<Text>Fertillizer</Text>
						<Text>3 Feb</Text>
					</View>
				</View>

				<View>
					<Text className='text-2xl font-bold'>Current Step</Text>
					{ /** big block of random green block */}
					<View className='h-50 bg-green-500 w-full' />
				</View>

				<View>
					<Text className='text-2xl font-bold'>Logging</Text>
					<Text>height</Text>
					<Text></Text>
					<Text>left size</Text>
					<Text></Text>
				</View>

				<View>
					<Text className='text-2xl font-bold'>Actions</Text>
					<TouchableOpacity className='bg-red-500 m-1 p-2 rounded-xl'>
						<Text className='text-center'>View Planting Directions</Text>
					</TouchableOpacity>
					<TouchableOpacity className='bg-red-500 m-1 p-2 rounded-xl'>
						<Text className='text-center'>Check for Disease</Text>
					</TouchableOpacity>
					<TouchableOpacity className='bg-red-500 m-1 p-2 rounded-xl'>
						<Text className='text-center'>Connect Sensors</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			<Footer />
		</View>
	)
	// note, very wrong way of doing this, im doing like this cuz im running out of time
}

export default PlantingDetailScreen
