import {StyleSheet, Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});

export default styles;
