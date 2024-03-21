import React from "react";
import "./Dashboard.css";
import { useCount } from "host/store";

const Button = React.lazy(() => import("ui/Button"));

const App = () => {
  const [count, setCount] = useCount();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Button
        text={`count: ${count}`}
        onClick={() => setCount((count) => count + 1)}
      />
    </div>
  );
};

export default App;
