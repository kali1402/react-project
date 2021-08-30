import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import DragandDrop from "./components/DragandDrop";
import Menu from "./components/Menu";
import Aexd from "./components/Aexd";

import "./css/dnd.css";

const App = () => {
  return (
    <div className="App">
      {/* <Aexd /> */}
      <DndProvider backend={HTML5Backend}>
        <div className="app-wrapper">
          <Menu />
          <DragandDrop />
        </div>
      </DndProvider>
    </div>
  );
};

export default App;
