import {StyleSheet} from 'react-native';

export const defaultTheme = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_logo: {
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  header: {
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  normalText: {
    color: '#000',
  },
  largeText: {
    color: '#000',
    fontSize: 20,
  },
  largeBoldText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    padding: 10,
  },
  feedback: {
    margin: 20,
  },
  feedbackInput: {
    color: '#000',
    backgroundColor: '#f2f2f2',
    height: 120,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d1d1d1',
    textAlignVertical: 'top',
    marginVertical: 10,
  },
  btn: {
    borderRadius: 5,
  },
  faq: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  faqItem: {
    padding: 0,
  },
});

export const darkmodeTheme = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
  },
  header_logo: {
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  header: {
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  normalText: {
    color: '#fff',
  },
  largeText: {
    color: '#fff',
    fontSize: 20,
  },
  largeBoldText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    padding: 10,
  },
  feedback: {
    margin: 20,
  },
  feedbackInput: {
    color: '#fff',
    backgroundColor: '#303030',
    height: 120,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d1d1d1',
    textAlignVertical: 'top',
    marginVertical: 10,
  },
  btn: {
    borderRadius: 5,
  },
  faq: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  faqItem: {
    padding: 0,
  },
});
