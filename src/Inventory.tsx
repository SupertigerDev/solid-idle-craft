import { createStore } from "solid-js/store";
import { Block } from "./blocks/BlockTypes";

export interface InventoryItem {
  count: number;
  block: Block;
}

const [inventory, setInventory] = createStore<InventoryItem[]>([]);

const addItem = (block: Block) => {
  if (block.stackable) {
    const itemIndex = inventory.findIndex(
      (i) => i.block.id === block.id && i.count < 64
    );
    const item = inventory[itemIndex];
    if (item) {
      setInventory(itemIndex, "count", item.count + 1);
      return;
    }
  }
  const item = { count: 1, block: { ...block } };
  setInventory(inventory.length, item);
};

const removeItem = (index: number) => {
  console.warn("Not implemented");
};

const builder = {
  items: inventory,
  addItem,
  removeItem,
};

export const useInventory = () => {
  return builder;
};
