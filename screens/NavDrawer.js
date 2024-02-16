import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddPlaces from "./AddPlaces";
import PlaceScreen from "./PlaceScreen";
import VideoScreen from "./VideoScreen";
import PlayMp3 from "./PlayMp3";

const Tab = createBottomTabNavigator();

function NavDrawer() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AddPlaces" component={AddPlaces} />
      <Tab.Screen name="PlaceScreen" component={PlaceScreen} />
      <Tab.Screen name="PlayMp3" component={PlayMp3} />
    </Tab.Navigator>
  );
}

export default NavDrawer;