import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddPlaces from "./AddPlaces";
import PlaceScreen from "./PlaceScreen";
import VideoScreen from "./VideoScreen";
import PlayMp3 from "./PlayMp3";

const Tab = createBottomTabNavigator();

const screenOptions = { headerShown: false };

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Birds"
        options={screenOptions}
        component={PlaceScreen}
      />
      <Tab.Screen
        name="Take photo"
        options={screenOptions}
        component={AddPlaces}
      />
      <Tab.Screen
        name="Media Player"
        options={screenOptions}
        component={VideoScreen}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;
