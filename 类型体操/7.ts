// 内置高级类型
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
// 提取构造器返回值的类型
type MyInstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;
type MyThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;
// 用ThisParameterType提取T的this类型,如果提取出来的类型是unknown或者any,那么unknown extends ThisParameterType成立 => 没有指定this类型,直接返回T
type MyOmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
type MyPartial<T> = {
	[P in keyof T]?: T[P];
};
type MyRequired<T> = {
	[P in keyof T]-?: T[P];
};
type MyReadonly<T> = {
	readonly [P in keyof T]: T[P];
};
type MyPick<T, K extends keyof T> = {
	[P in K]: T[P];
};
// type res = keyof any => string | number | symbol
type MyRecord<K extends keyof any, T> = {
	[P in K]: T;
};
type MyExclude<T, U> = T extends U ? never : T;
type MyExtract<T, U> = T extends U ? T : never;
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type AwaitedRes = Awaited<Promise<Promise<Promise<number>>>>;
type MyAwaited<T> = T extends null | undefined ? T : T extends object & { then(onfulfilled: infer F): any } ? (F extends (value: infer V, ...args: any) => any ? MyAwaited<V> : never) : T;
type MyNonNullable<T> = T extends null | undefined ? never : T;
