import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import ImagePicker from "./ImagePicker";
import { fetchPictures, insertPlace } from "../../persistence/DataBase";
import TextInputComponent from "../UI/TextInputComponent";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  const [pictureList, setPictureList] = useState([]);

  function changeTitleHandler(params) {
    setEnteredTitle(params);
  }

  useEffect(() => {
    async function addPlace() {
      // console.log("AddPlace 1");
      // const dbResult = await insertPlace("Zurich", "https://images.hola.com/imagenes/viajes/20220609211379/que-hacer-en-zurich-en-dos-dias/1-99-67/gettyimages-1267692130-t.jpg", "Zurich Switzerland" , 47.369328425923285, 8.552778991435181);
      // console.log(dbResult);
      const list = await fetchPictures();

      for (const picture of list) {
        console.log(picture.id);
        console.log(picture.title);
      }

      setPictureList(list);
    }

    addPlace();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.imageURL }} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.idValueStyle}>{item.id}</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.beds}>{item.beds} beds</Text>
        <Text style={styles.baths}>{item.baths} baths</Text>
        <Text style={styles.parking}>{item.parking} parking</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.form}>
        <TextInputComponent
          changeTitleHandler={changeTitleHandler}
          enteredValue={enteredTitle}
        >
          Title
        </TextInputComponent>

        <ImagePicker />
      </View>
      <Text>My pictures</Text>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.propertyListContainer}
          data={pictureList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: Colors.accent500,
  },
  propertyListContainer: {
    paddingHorizontal: 10,
  },
  form: {
    padding: 12,
  },
  image: {
    height: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardBody: {
    marginBottom: 5,
    padding: 5,
    marginLeft: 5,
  },
  idValueStyle: {
    fontSize: 16,
    marginBottom: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
  },
  cardFooter: {
    padding: 10,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dcdcdc",
    justifyContent: "space-between",
  },
  beds: {
    fontSize: 14,
    color: "#ffa500",
    fontWeight: "bold",
  },
  baths: {
    fontSize: 14,
    color: "#ffa500",
    fontWeight: "bold",
  },
  parking: {
    fontSize: 14,
    color: "#ffa500",
    fontWeight: "bold",
  },
});
