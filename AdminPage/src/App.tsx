import { useState } from "react";
import Admin from "./admin/Admin";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Admin />
    </>
  );
}

export default App;
