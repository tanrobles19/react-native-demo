import { FlatList, StyleSheet, View, Text, Button } from "react-native";
import { Colors } from "../../constants/Colors";
import { fetchPlaces } from "../../persistence/DataBase";
import PlaceItem from "./PlaceItem";

async function test() {

    const placesList = await fetchPlaces();
    
    for(const place of placesList) {
        console.log(place.id);
        console.log(place.title);
    }
    
}

function PlacesList({ places }) {

    test();

    if(!places || places.length === 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>
                    No places added yet!
                </Text>
                <Button title="Test!" onPress={test}></Button>
            </View>
        );
    }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item}/>}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary200
    }
});