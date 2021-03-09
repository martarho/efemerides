import React from "react";
import ReactDOM from "react-dom";
//import App from "./App/App";
import App from "./app";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://127.0.0.1:8000/',
    // headers: {
    //     Authorization: 'Bearer Token',
    //     accept: 'application/json',
    //     'Content-Type': 'application/json'
    // },
    useGETForQueries: true,
    //fetchOptions: { mode: 'no-cors' }
  }),
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
