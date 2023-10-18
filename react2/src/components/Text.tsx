import { useState } from "react";
function Text() {
  const [isTextVisible, setIsTextVisible] = useState<boolean>(false);
  const toggleTextHandler = (): void => {
    setIsTextVisible(!isTextVisible);
  };
  return (
    <div>
      <button onClick={toggleTextHandler}>Toggle Text</button>
      {isTextVisible ? <div> 'Text' </div> : null}
    </div>
  );
}
export default Text;
