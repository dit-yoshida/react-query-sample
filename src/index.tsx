import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./pages/app";
import Todo from "./pages/todo";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/todo">
          <Todo />
        </Route>
      </Router>
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
