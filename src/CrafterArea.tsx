import style from "./CrafterArea.module.css";
import { batch, For, Show } from "solid-js";
import { Area } from "./Area";
import { useInventory } from "./Inventory";
import { CraftableBlocks } from "./blocks";
import { Block } from "./blocks/BlockTypes";

export const CrafterArea = () => {
    const inventory = useInventory();

    const hasCrafter = () => inventory.getBlock("crafter");

    const canCraft = (block: Block) => {
        const hasItemsToCraft = block.recipe!.every((item) => {
            const invBlock = inventory.getBlock(item.blockId);
            return invBlock && invBlock.count >= item.count;
        })
        return hasItemsToCraft
    }

    const craftableBlocks = () => CraftableBlocks.map((block) => {
        const hasItemsToCraft = canCraft(block)
        return {
            ...block,
            hasItemsToCraft
        }
    })

    const craft = (block: Block) => {
        if (!canCraft(block)) return
        batch(() => {
            block.recipe!.forEach((item) => {
                for (let i = 0; i < item.count; i++) {
                    inventory.removeItem(item.blockId)
                }
            })
            if (block.craftCount) {
                for (let i = 0; i < block.craftCount; i++) {
                    inventory.addItem(block)
                }
            } else {
                inventory.addItem(block)
            }
        })
    }

    return (
        <Area title={hasCrafter() ? "Advanced Crafter" : "Basic Crafter"}>
            <div class={style.buttons}>
                <For each={craftableBlocks()}>
                    {(block) => (
                        <button data-disabled={!block.hasItemsToCraft} onclick={() => craft(block)}>
                            {block.name} <Show when={block.craftCount && block.craftCount > 1}>({block.craftCount})</Show>
                        </button>
                    )}
                </For>
            </div>
        </Area>
    );
};