import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    flex: 3,
    fontFamily: 'arial',
  },
  header: {
    color: 'white',
    fontSize: 48,
    textAlign: 'center',
    marginTop: 25,
  },
  btn: {
    backgroundColor: '#FFF',
    borderRadius: 100,
    padding: 10,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  btnLabel: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#131'
  },
  input: {
    backgroundColor: '#FFF',
    marginTop: 50,
    fontSize: 24,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5
  },
  game: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  gamePlayScore: {
    flex: 1,
    backgroundColor: '#000',

  },
  gamePlay: {
    flex: 3,
    backgroundColor: '#7FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  scoreLabel: {
    color: '#FFF',
    fontSize: 30,
    // backgroundColor: '#F00',
    width: '30%',
    textAlign: 'center'
  },
  btnClick: {
    borderRadius: 100,
    backgroundColor: '#F00',
    borderColor: '#A00',
    borderWidth: 5,
    borderTopWidth: 0,
    width: '80%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnClickLabel: {
    fontSize: 64,
    textAlign: 'center',
    color: '#FF0'
  },
  btnClose:{
    position:'absolute',
    width: 30,
    height: 30,
    left:15,
    bottom:15,
    borderRadius: 100,
    borderWidth:1,
    borderColor: '#EEE',
    backgroundColor: '#BBB'
  },
  btnCloseLabel:{
    textAlign:'center',
    alignItems:'center',
    fontSize: 20,
    fontFamily:'arial',
    color: '#EEE'
  }
});

export default styles;
