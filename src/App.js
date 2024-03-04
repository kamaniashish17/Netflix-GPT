import HomePage from "./containers/HomePage";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
        {/* <Browse/> */}
      </div>
    </Provider>
  );
}

export default App;
