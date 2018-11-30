import {StyleSheet, Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
  },
  inputWrapper: {
    backgroundColor: 'rgba(255, 50, 50, 0.5)',
    width: DEVICE_WIDTH,
    height: 60,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparent: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: DEVICE_WIDTH,
    height: 60,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;