import "./App.css";
import logo from "./logo.png";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX Logo"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Routes>
            <Route path="/" element={<Launches />} />
            <Route path="/launch/:flight_number" element={<Launch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
