import { Text, TouchableOpacity, View } from 'react-native'
import { React } from 'react'
import { UserCircleIcon, Bars3Icon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const Footer = (props) => {
	const username = props.username
	const navigation = useNavigation()

	return (
		<View className='p-2 bg-[#00000045] flex-row'>
			<View className='flex-1'>
				<TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
					<Bars3Icon size="35" color="#000000"/>
				</TouchableOpacity>
			</View>
			<View className='flex-1 flex-row-reverse'>
				<TouchableOpacity>
					<UserCircleIcon size="35" color="#000000"/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Footer

