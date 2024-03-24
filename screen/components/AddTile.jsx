import { Text, TouchableOpacity, View, Image } from 'react-native'
import { React } from 'react'
import { PlusIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const AddTile = (props) => {
	const navigation = useNavigation()

	return (
		<TouchableOpacity onPress={() => navigation.navigate("NewPlant")}>
			<View className='shadow-lg flex-row justify-center rounded-[20px] bg-[#F0D3D3] m-1'>
				<PlusIcon size="20" color="#000000" />
			</View>
		</TouchableOpacity>
	)
}

export default AddTile
