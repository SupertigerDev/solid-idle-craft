import { Blocks } from "./BlockTypes.ts";


export const RegisteredBlocks = {
  wood: await import("./Wood.tsx"),
  crafter: await import("./Crafter.tsx"),
  wooden_stick: await import("./WoodenStick.tsx"),
} as Blocks;

export const MinableBlocks = Object.values(RegisteredBlocks).filter(
  (block) => block.mineable
);

export const CraftableBlocks = Object.values(RegisteredBlocks).filter(
  (block) => block.recipe
);