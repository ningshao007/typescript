// 函数重载
declare function func1(name: string): string;
declare function func1(name: number): number;

interface Func {
	(name: string): string;
	(name: number): number;
}
declare const func2: Func;

type Func2 = ((name: string) => string) & ((name: number) => number);
declare const func3: Func2;
