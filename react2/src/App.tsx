import Text from "./components/Text";
import Select from "./components/Select";
import "./index.css";
import Card from "./components/Card";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState<string>("");

  return (
    <div>
      <Text />
      <Card color={color} />
      <Select changeColor={(e) => setColor(e)} />
    </div>
  );
};
export default App;
