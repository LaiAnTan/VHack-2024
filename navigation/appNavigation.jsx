import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen/HomeScreen";
import WelcomeScreen from "../screen/WelcomeScreen/WelcomeScreen";
import SignUpScreen from "../screen/SignUpScreen/SignUpScreen";
import LoginScreen from "../screen/LoginScreen/LoginScreen";
import NewPlantScreen from "../screen/NewPlantScreen/NewPlantScreen"
import PlantInfoScreen from "../screen/PlantsMoreInfoScreen/PlantsMoreInfoScreen";
import PlantingDetailScreen from "../screen/PlantingDetailScreen/PlantingDetailScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
return (
	<NavigationContainer>
	<Stack.Navigator initialRouteName="Welcome">
		<Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
		<Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
		<Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
		<Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
		<Stack.Screen name="NewPlant" options={{headerShown: false}} component={NewPlantScreen} />
		<Stack.Screen name="PlantInfo" options={{headerShown: false}} component={PlantInfoScreen} />
		<Stack.Screen name="PlantingDetail" options={{headerShown: false}} component={PlantingDetailScreen} />
	</Stack.Navigator>
	</NavigationContainer>
);
}

export default AppNavigation


  