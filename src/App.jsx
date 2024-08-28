import { useState } from "react";

function App() {
  // Initialize color state to "white"
  const [color, setColor] = useState("white");

  return (
    <div className="w-full h-screen duration-200 background" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          {/* Red Button */}
          <button
            onClick={() => {
              setColor("red");
              console.log("Color changed to red");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          
          {/* Green Button */}
          <button
            onClick={() => {
              setColor("green");
              console.log("Color changed to green");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          
          {/* Blue Button */}
          <button
            onClick={() => {
              setColor("blue");
              console.log("Color changed to blue");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          
          {/* White Button */}
          <button
            onClick={() => {
              setColor("white");
              console.log("Color changed to white");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
