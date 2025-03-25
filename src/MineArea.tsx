import style from "./MineArea.module.css";

import { For } from "solid-js";
import { MinableBlocks } from "./blocks";
import { useInventory } from "./Inventory";
import { Area } from "./Area";

export const MineArea = () => {
  const inventory = useInventory();
  return (
    <Area title="Mine">
      <div class={style.buttons}>
        <For each={MinableBlocks}>
          {(block) => (
            <button onClick={() => inventory.addItem(block)}>
              {block.name}
            </button>
          )}
        </For>
        <button>Cave (Top)</button>
        <button>Cave (Middle)</button>
        <button>Cave (Bottom)</button>
      </div>
    </Area>
  );
};
