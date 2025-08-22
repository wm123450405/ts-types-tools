import type { GenerateArray } from "../array";
import type { IntChars } from "./int";

// type HexSize = 8;

// type Hexes = [
// 	0x10000000, 
// 	0x1000000, 
// 	0x100000, 
// 	0x10000, 
// 	0x1000, 
// 	0x100, 
// 	0x10, 
// 	0x1
// ];

type HexChars = [...IntChars, 'A', 'B', 'C', 'D', 'E', 'F']

type HexChar = HexChars[number];


export type Hex = GenerateArray<HexChar, 8>;