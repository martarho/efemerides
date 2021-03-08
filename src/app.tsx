import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/global";
import { theme } from "./style/theme";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { TopHeader } from "./components/index";
import { Home, Area } from "./routes/index"
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    link: createHttpLink({
        uri: 'http://127.0.0.1:8000/graphiql'
    }),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <TopHeader />
                <ApolloProvider client={client}>
                    <Router>
                        <Switch>
                            <Route path="/" exact component={() => <Home />} />
                            <Route path="/area/:areaId" exact component={() => <Area />} />

                        </Switch>
                    </Router>
                </ApolloProvider>
            </ThemeProvider>
        </div>


    );
}

export default App;