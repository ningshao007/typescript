// 递归
// 在类型体操中,遇到数量不确定的问题 -> 递归(数组长度不确定 / 字符串长度不确定 / 索引类型层数不确定)

type DeepPromiseValueType<P extends Promise<unknown>> = P extends Promise<infer ValueType> ? (ValueType extends Promise<unknown> ? DeepPromiseValueType<ValueType> : ValueType) : never;
type DeepPromiseValueType2<T> = T extends Promise<infer ValueType> ? DeepPromiseValueType2<ValueType> : T;
type DeepPromiseValueTypeResult = DeepPromiseValueType<Promise<Promise<Promise<Record<string, any>>>>>;
type DeepPromiseValueTypeResult2 = DeepPromiseValueType2<Promise<Promise<Promise<Record<string, any>>>>>;

type ReverseArr<Arr extends unknown[]> = Arr extends [infer First, ...infer Rest] ? [...ReverseArr<Rest>, First] : Arr;
type ReverseArrResult = ReverseArr<[1, 2, 3, 4, 5]>;

type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false);
type Includes<Arr extends unknown[], FindItem> = Arr extends [infer First, ...infer Rest] ? (IsEqual<First, FindItem> extends true ? true : Includes<Rest, FindItem>) : false;
type IncludesResult = Includes<[1, 2, 3, 4], 13>;

type StringToUnion<Str extends string> = Str extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : never;
type StringToUnionResult = StringToUnion<'lai'>;

type num1 = [unknown]['length'];
type num2 = [unknown]['length'];
type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>;
type Add<Num1 extends number, Num2 extends number> = [...BuildArray<Num1>, ...BuildArray<Num2>]['length'];
type AddResult = Add<1, 3>;
