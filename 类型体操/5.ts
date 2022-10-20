// 当类型参数为联合类型时,并且在条件类型左边直接引用该类型参数的时候,ts会把每一个元素单独传入来做类型运算,最后再合并成联合类型,因为联合类型的每个元素都是互不相关的
type Union = 'a' | 'b' | 'c';
type UppercaseA<Item extends string> = Item extends 'a' ? Uppercase<Item> : Item;
type result = UppercaseA<Union>;
type str = `${Union}~~~~`;

type Camelcase<Str extends string> = Str extends `${infer Left}_${infer Right}${infer Rest}` ? `${Left}${Uppercase<Right>}${Camelcase<Rest>}` : Str;
type CamelCaseResult1 = Camelcase<'aa_aa_aa'>;

type CamelcaseArr<Arr extends unknown[]> = Arr extends [infer Item, ...infer RestArr] ? [Camelcase<Item & string>, ...CamelcaseArr<RestArr>] : [];
type CamelcaseArrResult = CamelcaseArr<['aa_bb_cc', 'cc_bb_aa']>;
