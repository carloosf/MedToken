import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    minWidth: '100%',
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  form: {
    padding: '10%',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: '10%',
    marginTop: '10%',
    height: 350,
    alignItems: 'center',
    gap: 10,
  },
  input: {
    backgroundColor: 'white',
    width: 250,
    fontSize: 20,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 19,
    justifyContent: 'center',
    color: 'black',
  },
  tipoAtendimentoContainer: {
    marginVertical: 15,
  },
  optionContainer: {
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Oswald_400Regular',
  },
  label: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'flex-start',
    fontFamily: 'Oswald_400Regular',
  },
  logo: {
    position: 'relative',
    bottom: 5,
    alignSelf: 'center',
    width: 40,
    height: 40,
  },
  btnStyle: {
    backgroundColor: '#fff',
    padding: 5,
    width: 80,
    height: 28,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: 'center',
  },
  textBtn: {
    color: '#4F4343',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Oswald_400Regular',
  },
  selectedButton: {
    backgroundColor: 'rgb(122, 62, 62)',
  },
  selectedButtonText: {
    color: 'white',
  },
})
