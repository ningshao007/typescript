// 模式匹配
type GetValueType<P> = P extends Promise<infer Value> ? Value : never;
type a = GetValueType<'2222'>;
type b = GetValueType<Promise<'aaa'>>;

type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]] ? First : never;
type GetFirstResult = GetFirst<[1, 2, 3, 4]>;

type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last] ? Last : never;

type PopArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [...infer Rest, unknown] ? Rest : never;
type PopArrResult = PopArr<[1, 2, 3]>;

type ShiftArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [unknown, ...infer Rest] ? Rest : never;

type StartsWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true : false;
type StartsWithResult = StartsWith<'lynLove', 'lyn'>;

type GetParameters<Func extends Function> = Func extends (...args: infer Args) => unknown ? Args : never;
type ParametersResult = GetParameters<(name: string, age: number) => string>;

type GetReturnType<Func extends Function> = Func extends (...args: any[]) => infer ReturnType ? ReturnType : never;
type ReturnTypeResult = GetReturnType<() => 'hello world'>;
