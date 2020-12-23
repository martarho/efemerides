import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/global";
import { theme } from "./style/theme";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { TopHeader } from "./components/index";
import { Home, Area } from "./routes/index"


function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <TopHeader />
                <Router>
                    <Switch>
                        <Route path="/" exact component={() => <Home />} />
                        <Route path="/area/:areaId" exact component={() => <Area />} />

                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;