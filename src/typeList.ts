/* eslint-disable @typescript-eslint/no-unused-vars */

/* typeScriptの基本の型 */
/* 変数宣言の際に型を指定する */

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "文字列";

//Array
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple
let tuple: [number, string] = [0, "A"];

//any なんでも良し
let any1: any = false;

//void 関数の戻り値が無し
//: voidは省略可
const funcA = (): void => {
  const test = "Test";
};

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
