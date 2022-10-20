function getPropValue<T extends object, Key extends keyof T>(obj: T, key: Key): T[Key] {
	return obj[key];
}

// 约束以某个字符串开头的字符串字面量
function func(str: `#${string}`) {}
func('#aaa');

type isTwo<T> = T extends 2 ? true : false;
type res = isTwo<1>;
type res2 = isTwo<2>;

// 推导
type First<Tuple extends unknown[]> = Tuple extends [infer T, ...infer R] ? T : never;
type res3 = First<[1, 2, 3]>;

// 映射类型 as重映射
// 索引类型(对象 class等)可用string|number|symbol作为key,这里keyof T 取出的索引就是 -> string|number|symbol的联合类型,和string交叉部分就只剩下string了(交叉类型会把同一类型合并,不同类型舍弃)
type MapType<T> = {
	[Key in keyof T as `${Key & string}${Key & string}${Key & string}`]: [T[Key], T[Key], T[Key]];
};
type res4 = MapType<{ a: 1; b: 2 }>;
