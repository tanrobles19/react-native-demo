import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';

function BirdsDetails({route}) {
    
    // const selectedBirdId = route.params.placeId;

    // console.log(selectedBirdId);

    // useEffect(() => {

    // }, selectedBirdId);

    return (<View>
        <Text>{"Test details"}</Text>
    </View>);
}

export default BirdsDetails;

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center'
    },
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%'
    },
    locationContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});