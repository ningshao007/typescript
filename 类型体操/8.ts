// 从string数组中提取的元素,默认会推导为unknown类型,infer的时候加上extends来约束推导的类型,约束
type TestLast<Arr extends string[]> = Arr extends [...infer Rest, infer Last extends string] ? `最后一个是: ${Last}` : never;

// dts中,如果没有import / export 语法,那所有的类型声明都是全局的,否则是模块内的.为了避免这种情况,可以使用reference的编译器指令 /// <reference path="async_hooks.d.ts"/>

// 判断父子类型
// 只要结构上是一致的,那么就可以确定父子关系(鸭子类型),结构中更具体的是子类型

// 协变与逆变
// 协变: 子类型可以赋值给父类型
interface Person {
	name: string;
	age: number;
}
interface Lai {
	name: string;
	age: number;
	hobbies: string[];
}
let person: Person = {
	name: 'lyn',
	age: 30,
};
let Ning: Lai = {
	name: 'ning',
	age: 30,
	hobbies: ['basketball'],
};
person = Ning;

// 逆变
// printHobbies的参数是printName参数的子类型
let printHobbies: (name: Lai) => void;
printHobbies = (name) => {
	console.log(name.hobbies);
};
let printName: (person: Person) => void;
printName = (person) => {
	console.log(person.name);
};
printHobbies = printName;
