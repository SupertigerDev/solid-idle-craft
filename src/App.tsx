import style from "./App.module.css";
import { CrafterArea } from "./CrafterArea";
import { InventoryArea } from "./InventoryArea";
import { MineArea } from "./MineArea";

const App = () => {
  return (
    <div class={style.app}>
      <MineArea />
      <InventoryArea />
      <CrafterArea />
    </div>
  );
};

export default App;
