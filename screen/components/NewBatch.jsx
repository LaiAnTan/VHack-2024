import { Text, TouchableOpacity, View, Image } from 'react-native'
import { React } from 'react'
import { useNavigation } from '@react-navigation/native'

const NewBatch = (props) => {
	const navigation = useNavigation()

	return (
		<TouchableOpacity onPress={() => navigation.navigate("Home")}>
			<View className='shadow-lg flex-row justify-center rounded-[20px] bg-[#cf7373] p-2 mx-20 mt-5'>
				<Text className='color-slate-50'>New Batch</Text>
			</View>
		</TouchableOpacity>
	)
}

export default NewBatch
