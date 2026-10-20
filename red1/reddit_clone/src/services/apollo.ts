import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: GraphQL endpoint'inizi buraya ekleyin
const GRAPHQL_URL = 'YOUR_GRAPHQL_ENDPOINT'; // Örnek: 'http://localhost:8000/graphql'

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('userToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
}); 