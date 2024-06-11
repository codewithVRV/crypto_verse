import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "./Component/Header";
import { store } from "./Redux/store";
import AllRoutes from "./Routes/AllRoutes";

function App() {

  return (

    <BrowserRouter>
    <Provider store={store}>
      
      <Header />
      <AllRoutes />
    </Provider>
    </BrowserRouter>

  );
}

export default App;
