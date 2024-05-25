import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../views/Home";
import { Deteils } from "../../views/Details";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Deteils} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/* install expo packages */