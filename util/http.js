import axios from "axios";

const BACKEND_URL = "https://react-native-course-99cde-default-rtdb.firebaseio.com";

export function storeBirds(expenseData) {
  console.log(expenseData);
  axios.post(
    BACKEND_URL + "/birds.json",
    expenseData
  );
}

export async function fetchBirds() {
  const response = await axios.get( BACKEND_URL + "/birds.json");

  const birdsList = [];

  for( const key in response.data) {
    const bird = {
      id: key,
      author: response.data[key].author,
      category: response.data[key].category,
      imageURL: response.data[key].imageURL,
      title: response.data[key].title,
    };
    birdsList.push(bird);
  }

  return birdsList;

}
