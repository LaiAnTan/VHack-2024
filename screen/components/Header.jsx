import { Text, View } from 'react-native'
import { React } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = (props) => {
	const username = props.username

	return (
		<SafeAreaView className='bg-blue-500'>
			<Text className='font-extrabold text-[35px]'>
				Not sure what to put for header
			</Text>
		</SafeAreaView>
	)
}

export default Header
