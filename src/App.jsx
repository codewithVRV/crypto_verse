import { BrowserRouter } from "react-router-dom";

import Header from "./Component/Header";
import AllRoutes from "./Routes/AllRoutes";

function App() {

  return (

    <BrowserRouter>
      <Header />
      <AllRoutes />
    </BrowserRouter>

  );
}

export default App;
