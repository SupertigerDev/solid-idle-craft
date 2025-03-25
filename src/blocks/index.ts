import { Blocks } from "./BlockTypes.ts";


export const RegisteredBlocks = {
  wood: await import("./Wood.tsx"),
  crafter: await import("./Crafter.tsx")
} as Blocks;

export const MinableBlocks = Object.values(RegisteredBlocks).filter(
  (block) => block.mineable
);