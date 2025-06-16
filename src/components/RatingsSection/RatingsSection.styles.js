import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ratingsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginTop: 30,
    marginBottom: 30,
  },
  ratingItem: {
    alignItems: 'center',
    flex: 1,
  },
  ratingValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  ratingSubtext: {
    color: '#999',
    fontSize: 14,
  },
  ratingDetails: {
    color: '#999',
    fontSize: 12,
    marginTop: 2,
  },
  rateText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  metascoreBox: {
    backgroundColor: '#66CC33',
    width: 32,
    height: 32,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  metascoreText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  metascoreLabel: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  metascoreDetails: {
    color: '#999',
    fontSize: 10,
    marginTop: 2,
    textAlign: 'center',
  },
}); 