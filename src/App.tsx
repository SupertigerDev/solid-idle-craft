import style from "./App.module.css";
import { InventoryArea } from "./InventoryArea";
import { MineArea } from "./MineArea";

const App = () => {
  return (
    <div class={style.app}>
      <MineArea />
      <InventoryArea />
    </div>
  );
};

export default App;
