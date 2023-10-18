import { useState } from "react";
interface ChildProps {
  changeColor: (data: string) => void;
}
function Select(props: ChildProps) {
  const [color, setColor] = useState("null");
  console.log(color);
  const [addcolor, setAddcolor] = useState("#ffffff");
  console.log(addcolor);
  //למה המערך צריך להיות בסטייט ולא מספיק פוש?
  const [cardOptions, setCardOptions] = useState<string[]>([
    "blue",
    "red",
    "green",
    "yellow",
  ]);
  return (
    <div>
      <input
        type="color"
        value={"#ffffff"}
        placeholder="בחר צבע"
        onChange={(e) => setAddcolor(e.target.value)}
      />
      <button
        onClick={() => {
          cardOptions.includes(addcolor) === false
            ? setCardOptions([...cardOptions, addcolor])
            : alert("This color is already added");
        }}
      >
        הוסף צבע
      </button>
      <select id="myInput" onChange={(e) => setColor(e.target.value)}>
        <option value="">בחר צבע רקע</option>
        {cardOptions.map((color) => (
          <option key={cardOptions.indexOf(color)} value={color}>
            {color}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          props.changeColor(color);
          console.log(color);
        }}
      >
        Get the Selected Color
      </button>
    </div>
  );
}
export default Select;
