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

const removeItem = (blockId: string) => {
  const itemIndex = inventory.findLastIndex((i) => i.block.id === blockId);
  if (itemIndex === -1) return;
  const item = inventory[itemIndex];
  if (item.count === 1) {
    setInventory((inventory) => {
      return inventory.filter((item, index) => index !== itemIndex);
    });
    return;
  }
  setInventory(itemIndex, "count", item.count - 1);

};


const getBlock = (blockId: string) => inventory.find((i) => i.block.id === blockId);

const builder = {
  items: inventory,
  addItem,
  removeItem,
  getBlock
};

export const useInventory = () => {
  return builder;
};
