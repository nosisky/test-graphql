import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError} from '@apollo/client/link/error'
import './App.css';
import { Form } from './Components/Form';
/* Importing the GetUsers component from the Components folder. */
// import GetUsers from './Components/GetUsers';

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
      alert(`GraphQL Errors: ${message}`)
    })
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: 'http://localhost:3000/graphql'
  })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Form />
    </ApolloProvider>
  )
}

export default App;
