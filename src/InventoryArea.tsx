import style from "./InventoryArea.module.css";

import { For, Show } from "solid-js";
import { useInventory } from "./Inventory";

export const InventoryArea = () => {
  const inventory = useInventory();
  return (
    <Show when={inventory.items.length}>
      <div class={style.area}>
        <div class={style.title}>Inventory</div>
        <div class={style.areaInner}>
          <div class={style.buttons}>
            <For each={inventory.items}>
              {(item) => (
                <button>
                  {item.block.name} ({item.count})
                </button>
              )}
            </For>
          </div>
        </div>
      </div>
    </Show>
  );
};
