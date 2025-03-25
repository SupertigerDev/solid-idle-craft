import style from "./MineArea.module.css";

import { For } from "solid-js";
import { MinableBlocks } from "./blocks";
import { useInventory } from "./Inventory";

export const MineArea = () => {
  const inventory = useInventory();
  return (
    <div class={style.area}>
      <div class={style.title}>Mine</div>
      <div class={style.areaInner}>
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
      </div>
    </div>
  );
};
