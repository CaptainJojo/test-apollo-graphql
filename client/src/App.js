import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddChannel from './AddChannel';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import gql from 'graphql-tag';
import { ApolloProvider, graphql } from 'react-apollo';
import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
 import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
 import { typeDefs } from './schema';
 import { SchemaLink } from "apollo-link-schema";
import ChannelsListWithData from './ChannelsListWithData';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

const client = new ApolloClient({
   link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
   cache: new InMemoryCache(),
 });

 class App extends Component {
    render() {
      return (
        <ApolloProvider client={client}>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to Apollo</h2>
            </div>
            <ChannelsListWithData />
          </div>
        </ApolloProvider>
      );
    }
  }

export default App;
