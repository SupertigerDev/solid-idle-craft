export const MiningLevel = {
  FIST: 0,
  WOOD: 1
} as const

export interface Block {
  id: string;
  name: string;
  mineable?: boolean;
  rarity?: number;
  miningLevel?: typeof MiningLevel[keyof typeof MiningLevel];
  stackable?: boolean;
  recipe?: { blockId: string; count: number }[];
}

export type Blocks = Record<string, Block>;