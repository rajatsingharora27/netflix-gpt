import { Provider } from "react-redux";
import Body from "./componenets/Body";
import appStore from "./redux/appStore/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
