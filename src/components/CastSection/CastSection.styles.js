import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  castSection: {
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  castHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  castTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: 'bold',
  },
  castScrollView: {
    flexGrow: 0,
  },
  actorCard: {
    marginRight: 12,
    width: 120,
  },
  actorImage: {
    width: 120,
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
  },
  actorName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  characterName: {
    color: '#999',
    fontSize: 12,
  },
}); 