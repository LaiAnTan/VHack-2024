import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { React, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PlantTile from '../components/PlantTile'
import AddTile from '../components/AddTile'

/* <SafeAreaView className='p-2 bg-darker_user_bg absolute inset-x-0 top-0 h-auto'>
<Text className='font-extrabold text-4xl'>
	Hello {username}
</Text>
</SafeAreaView> */

const HomeScreen= () => {
	const username = "Test"

	// pov: no backend
	const fake_data = [
		{
			id: "00001",
			plant: "tomato",
			amount: 20,
			status: "healthy",
			harvest_date: new Date(2024, 3, 20) // dont ask
		},
		{
			id: "00002",
			plant: "tomato",
			amount: 25,
			status: "healthy",
			harvest_date: new Date(2024, 7, 10)
		}
	]

	return (
	<View className='flex h-full bg-user_bg'>
		<Header username={username} />
		<View className='flex-1 flex align-center justify-center'>
			<View className='m-5 space-y-5 p-2 bg-[#f9b2a5] rounded-xl'>

				<Text className='font-extrabold text-[25px] text-center'>
					Currently Planting
				</Text>

				<View className='flex-column'>
					{
						(fake_data && fake_data.length) ?
						fake_data.map((value) => <PlantTile data={value} key={value.id}/>) :
						<Text className='text-center text-base'>
							No plants planted
						</Text>
					}
				</View>

				<AddTile />
			</View>
		</View>
		<Footer />
	</View>
	)
	// note, very wrong way of doing this, im doing like this cuz im running out of time
}

export default HomeScreen
