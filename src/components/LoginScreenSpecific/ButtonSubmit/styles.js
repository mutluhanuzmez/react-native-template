import {StyleSheet, Dimensions} from 'react-native';

const MARGIN = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b1ec',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#00b1ec',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#00b1ec',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: 'Gill Sans'
  },
  failedBorder: {
    borderWidth: MARGIN/2,
    borderColor: 'red'
},
});


export default styles;