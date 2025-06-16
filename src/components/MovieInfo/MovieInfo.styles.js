import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  movieTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  movieInfo: {
    color: '#999',
    fontSize: 14,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  mainSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  posterContainer: {
    marginRight: 16,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  description: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  watchlistButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 16,
  },
  watchlistButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
}); 