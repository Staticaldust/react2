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
// import React, { useState } from "react";

// interface CardProps {
//   title: string;
//   image: string;
//   text: string;
//   backgroundColor: string;
// }

// function Card({ title, image, text, backgroundColor }: CardProps) {
//   return (
//     <div
//       style={{
//         backgroundColor: backgroundColor,
//         padding: "3px",
//         border: "solid red 3px",
//         width: "200px",
//         margin: "10px",
//       }}
//     >
//       <h2>{title}</h2>
//       <img src={image} alt={title} style={{ width: "200px" }} />
//       <p>{text}</p>
//     </div>
//   );
// }

// interface SelectProps {
//   options: string[];
//   onChange: (selectedColor: string) => void;
// }

// function Select({ options, onChange }: SelectProps) {
//   const [selectedColor, setSelectedColor] = useState<string>("");

//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedValue = e.target.value;
//     setSelectedColor(selectedValue);
//     onChange(selectedValue);
//   };

//   return (
//     <div>
//       <select value={selectedColor} onChange={handleSelectChange}>
// <option value="">בחר צבע רקע</option>
// {options.map((color, index) => (
//   <option key={index} value={color}>
//     {color}
//   </option>
// ))}
//       </select>
//     </div>
//   );
// }

// function App() {
//   const [cardBackgroundColor, setCardBackgroundColor] = useState<string>("");

//   const cardOptions: string[] = ["blue", "red", "green", "yellow"];

//   const handleSelectChange = (selectedColor: string) => {
//     setCardBackgroundColor(selectedColor);
//   };

//   return (
//     <div>
//       <Card
//         title="כותרת קומפוננטת Card"
//         image="https://cdn.kobo.com/book-images/9d863d07-4a3f-4ccf-95bb-faf1660d25df/353/569/90/False/harry-potter-and-the-deathly-hallows-4.jpg"
//         text="זהו הטקסט שבתוך הקומפוננטה"
//         backgroundColor={cardBackgroundColor}
//       />
//       <Select options={cardOptions} onChange={handleSelectChange} />
//     </div>
//   );
// }

// export default App;
