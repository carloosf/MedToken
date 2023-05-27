import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    padding: '10%',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: '20%',
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
  dropdownText: {
    fontSize: 16,
  },
  dropdownContainer: {
    borderColor: 'gray',
  },
  dropdownItemText: {
    fontSize: 16,
    paddingHorizontal: 20,
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
})
