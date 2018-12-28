import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  transparent: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
});

export default styles;