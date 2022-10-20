// 重新构造
type Push<Arr extends unknown[], item> = [...Arr, item];
type PushResult = Push<[1, 2, 3], 4>;

type unshift<Arr extends unknown[], item> = [item, ...Arr];

// type tuple1 = [1, 2];
// type tuple2 = ['赖', '阳宁'];
// type result1 = [[1, '赖'], [2, '阳宁']];
type Zip<One extends [unknown, unknown], Other extends [unknown, unknown]> = One extends [infer OneFirst, infer OneSecond]
	? Other extends [infer OtherFirst, infer OtherSecond]
		? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]]
		: []
	: [];
// 多个递归
type Zip2<One extends unknown[], Other extends unknown[]> = One extends [infer OneFirst, ...infer OneRest]
	? Other extends [infer OtherFirst, ...infer OtherRest]
		? [[OneFirst, OtherFirst], ...Zip2<OneRest, OtherRest>]
		: []
	: [];
type result2 = Zip2<[1, 2, 3, 4], ['赖', '阳', '宁', '帅']>;

// ---------------------------------
type CapitalizeStr<Str extends string> = Str extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : Str;
type CapitalizeStrResult = CapitalizeStr<'lai'>;

type CamelCase<Str extends string> = Str extends `${infer Left}_${infer Right}${infer Rest}` ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}` : Str;
type CamelCaseResult = CamelCase<'lai_yang_ning'>;

type DropSubStr<Str extends string, SubStr extends string> = Str extends `${infer Prefix}${SubStr}${infer Suffix}` ? DropSubStr<`${Prefix}${Suffix}`, SubStr> : Str;
type DropSubStrResult = DropSubStr<'lai~~~~~', '~'>;

// 索引类型的重新构造
type Mapping<Obj extends Record<string, any>> = {
	[Key in keyof Obj]: Obj[Key];
};
type MappingResult = Mapping<{ a: 1; b: 2 }>;

// as 重映射
type UppercaseKey<Obj extends Record<string, any>> = {
	[Key in keyof Obj as Uppercase<Key & string>]: Obj[Key];
};
type UppercaseKeyResult = UppercaseKey<{ lai: 1; yang: 2 }>;

type MyRecord<K extends string | number | symbol, T> = { [P in K]: T };
type MyReadonly<T> = {
	readonly [Key in keyof T]: T[Key];
};
type MyPartial<T> = {
	[Key in keyof T]?: T[Key];
};
type Mutable<T> = {
	-readonly [Key in keyof T]: T[Key];
};
type MutableResult = Mutable<{
	readonly name: 'lyn';
	age: 30;
}>;
type MyRequired<T> = {
	[Key in keyof T]-?: T[Key];
};
type FilterByValueType<Obj extends Record<string, any>, ValueType> = {
	[Key in keyof Obj as Obj[Key] extends ValueType ? Key : never]: Obj[Key];
};
type FilterByValueTypeReturn = FilterByValueType<{ name: string; age: number; hobby: string[] }, string | string[]>;
