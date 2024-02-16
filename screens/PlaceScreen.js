import { View, Button, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import PropertyList from "../components/Places/PlaceCard";
import { fetchBirds, fetchExpenses, storeBirds } from '../util/http';
import BirdModel from "../models/BirdModel";

import BirdsDataSource from '../components/Places/BirdsDataSource';
import React, { useEffect, useState} from 'react';

function PlaceScreen() {

    const [fetchedBirdList, setFetchedBirdList] = useState([]);

    function storeData() {
        for(const placeRawData of BirdsDataSource) {
            const bird = new BirdModel(placeRawData.author, placeRawData.path, placeRawData.category, "Jonathan Robles");
        
        }        
    }
        
    useEffect(() => {
        async function getBirdList() {
            const birds = await fetchBirds();
            console.log("FIREBASE BIRDS.........");
            setFetchedBirdList(birds);
        }

        getBirdList();

    }, []);

    function birdPressed(id) {
        console.log(id);
    
        // navigation.navigate("BirdsDetails", {
        //   placeId: id
        // });
    
      }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={birdPressed.bind(this, item.category)}>
          <Image source={{ uri: item.imageURL }} style={styles.image} />
          <View style={styles.cardBody}>
            <Text style={styles.price}>{item.author}</Text>
            <Text style={styles.address}>{item.category}</Text>
            <Text style={styles.squareMeters}>{"Mon 12 Feb 2024"}</Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.beds}>{item.beds} beds</Text>
            <Text style={styles.baths}>{item.baths} baths</Text>
            <Text style={styles.parking}>{item.parking} parking</Text>
          </View>
        </TouchableOpacity>
      );    

    return (
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.propertyListContainer}
            data={fetchedBirdList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
}

export default PlaceScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:60,
    },
    searchInputContainer:{
      paddingHorizontal:20,
    },
    searchInput: {
      height: 40,
      borderWidth: 1,
      borderColor:'#dcdcdc',
      backgroundColor:'#fff',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10
    },
    propertyListContainer:{
      paddingHorizontal:20,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 5,
      marginTop:10,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    image: {
      height: 150,
      marginBottom: 10,
      borderTopLeftRadius:5,
      borderTopRightRadius:5,
    },
    cardBody: {
      marginBottom: 10,
      padding: 10,
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5
    },
    address: {
      fontSize: 16,
      marginBottom: 5
    },
    squareMeters: {
      fontSize: 14,
      marginBottom: 5,
      color: '#666'
    },
    cardFooter: {
      padding: 10,
      flexDirection: 'row',
      borderTopWidth:1,
      borderTopColor:'#dcdcdc',
      justifyContent: 'space-between',
    },
    beds: {
      fontSize: 14,
      color:'#ffa500',
      fontWeight: 'bold'
    },
    baths: {
      fontSize: 14,
      color:'#ffa500',
      fontWeight: 'bold'
    },
    parking: {
      fontSize: 14,
      color:'#ffa500',
      fontWeight: 'bold'
    }
  });
