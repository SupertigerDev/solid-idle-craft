import style from "./InventoryArea.module.css";

import { For, Show } from "solid-js";
import { useInventory } from "./Inventory";
import { Area } from "./Area";

export const InventoryArea = () => {
  const inventory = useInventory();
  return (
    <Show when={inventory.items.length}>
      <Area title="Inventory">
        <div class={style.buttons}>
          <For each={inventory.items}>
            {(item) => (
              <button>
                {item.block.name} ({item.count})
              </button>
            )}
          </For>
        </div>
      </Area>
    </Show>
  );
};
