import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import AllPlaces from "./screens/AllPlaces";
import AddPlaces from "./screens/AddPlaces";
import PlaceScreen from "./screens/PlaceScreen";
import VideoScreen from "./screens/VideoScreen";
import HomeScreen from "./screens/HomeScreen";
import PlayMp3 from "./screens/PlayMp3";
import BirdsDetails from "./components/Places/BirdDetails";

import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/Colors";
import { initDataBase } from "./persistence/DataBase";
import { createDrawerNavigator } from "@react-navigation/drawer";

initDataBase()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.");
    console.log(err);
  });

const Stack = createNativeStackNavigator();

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />

          <Stack.Screen
            name="All Places"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Birds Dictionary",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlaces")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlaces"
            component={AddPlaces}
            options={{
              title: "Take a photo",
            }}
          />
          <Stack.Screen name="BirdsDetails" component={BirdsDetails} />
          <Stack.Screen name="Media Player" component={VideoScreen} />
          <Stack.Screen name="Podcast" component={PlayMp3} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
