import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  },

  header: {
    backgroundColor: '#0D0D0D',
    width: '100%',
    height: 173,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 110.34,
    height: 32
  },

  input: {
    flex: 1,
    height: 52,
    borderRadius: 5,
    backgroundColor: '#262626',
    margin: 24,
    marginTop: -24,
    marginRight: 4,
    padding: 10,
    color: '#FFF',
    fontSize: 16,
    borderWidth: 1,

  },

  button: {
    width: 52,
    height: 52,
    marginTop: -24,
    marginRight: 24,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    width: '100%',
    flexDirection: 'row'
  },

  tipos: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  form2: {
    marginTop: 10,
    flexDirection: 'row'
  },
  
  textCriadas: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 24,
    marginRight: 8
  },

  textConcluidas: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 24,
    marginRight: 8
  },

  inputCriadas: {
    width: 25,
    height: 19,
    color: '#FFF',
    backgroundColor: '#333333',
    borderRadius: 999,
    textAlign: 'center',
    fontSize: 12,
  },

  inputConcluidas: {
    width: 25,
    height: 19,
    color: '#FFF',
    backgroundColor: '#333333',
    borderRadius: 999,
    textAlign: 'center',
    fontSize: 12,
    marginRight: 24
  },

  separador: {
    height: 1,
    backgroundColor: '#333333',
    marginTop: 20,
    marginLeft: 24,
    marginRight: 24
  },

  cardsContainer: {
    backgroundColor: '#262626',
    margin: 5,
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8
  },

  textCard: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
    textAlign: 'center'
  },

  check: {
    marginLeft: 15,
    marginRight: 10
  },

  trash: {
    marginRight: 15,
    marginLeft: 10
  },

  emptyListContainer: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  emptyListText: {
    fontWeight: 'bold',
    marginTop: 10,
    color: '#808080',
    textAlign: 'center'
  },

  emptyListText2: {
    color: '#808080',
    textAlign: 'center'
  }

})