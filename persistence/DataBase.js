import * as SQLite from "expo-sqlite";
import Place from "../models/Place";
import Picture from "../models/Picture"

const dataBase = SQLite.openDatabase("places.db");

export const initDataBase = () => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL,
                    address TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL
                )`,
        [],
        () => {
          console.log("Database ok");
          resolve();
        },
        (_, error) => {
          console.log("Database false :(");
          reject(error);
        }
      );
    });

    dataBase.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS picture (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL,
                    description TEXT NOT NULL
                )`,
        [],
        () => {
          console.log("Database ok");
          resolve();
        },
        (_, error) => {
          console.log("Database false :(");
          reject(error);
        }
      );
    });

  });

  return promise;
};

export const insertPlace = (title, imageUri, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places(title, imageUri, address, lat, lng) 
                                VALUES(?, ?, ?, ?, ?)`,
        [title, imageUri, address, lat, lng],
        (_, result) => {
          console.log("good");
          console.log(result);
        },
        (_, error) => {
          console.log("ERROR");
          console.log(error);
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const insertPictures = (title, imageUri, description) => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO picture(title, imageUri, description) 
                                VALUES(?, ?, ?)`,
        [title, imageUri, description],
        (_, result) => {
          console.log("added a new picture");
          console.log(result);
        },
        (_, error) => {
          console.log("ERROR");
          console.log(error);
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          console.log("List of Places");
          
          const places = [];

          for( const dp of result.rows._array){ 
            places.push( new Place(
              dp.id, 
              dp.title,
              dp.imageUri,
              dp.address,
              dp.lat
            ));
          }

          resolve(places);
        },
        (_, error) => {
          console.log("List of Places - ERROR -");
          console.log(error);
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const fetchPictures = () => {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM picture`,
        [],
        (_, result) => {
          console.log("List of Pictures");
          
          const places = [];

          for( const dp of result.rows._array){ 
            places.push( new Picture(
              dp.id, 
              dp.title,
              dp.imageUri,
              dp.description
            ));
          }

          resolve(places);
        },
        (_, error) => {
          console.log("List of Pictures - ERROR -");
          console.log(error);
          reject(error);
        }
      );
    });
  });
  return promise;
};
