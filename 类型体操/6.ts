// any类型与任何类型的交叉都是any, 1 & any => any
type IsAny<T> = 'lai' extends 'yang' & T ? true : false;
type IsAnyResult = IsAny<any>;
type IsAnyResult2 = IsAny<'hello world'>;

type IsNever<T> = [T] extends [never] ? true : false;
