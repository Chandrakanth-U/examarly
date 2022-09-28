import { Route } from "react-router-dom";

import History from "./components/History";

import "./App.css";

const App = () => (
  <div className="page-container">
    <Route component={History} />
  </div>
);

export default App;
