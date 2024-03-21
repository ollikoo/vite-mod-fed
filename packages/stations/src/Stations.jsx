import React from "react";
import "./Stations.css";
import { useCount } from "host/store";

const Button = React.lazy(() => import("ui/Button"));

const App = () => {
  const [count, setCount] = useCount();

  return (
    <div className="stations">
      <h1>Stations</h1>
      <Button text={`count: ${count}`} onClick={() => setCount(count + 1)} />
    </div>
  );
};

export default App;
