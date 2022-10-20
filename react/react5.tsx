import React from 'react';
import { Button } from 'antd';

// Intersection Types(which are and operations)
interface PrimaryButtonProps {
	label: string;
}
const PrimaryButton = (props: PrimaryButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return <button {...props}>{props.label}</button>;
};

type BaseProps = {
	className?: string;
	style?: React.CSSProperties;
	name: string;
};
type DogProps = {
	tailsCount: number;
};
type HumanProps = {
	handCount: number;
};
export const Human = (props: BaseProps & HumanProps) => <div>Human</div>;
export const Dog = (props: BaseProps & DogProps) => <div>Dog</div>;

// using inferred types
const [state, setState] = React.useState({ foo: 1, bar: 2 });
const someMethod = (obj: typeof state) => {
	setState(obj);
};
// using partial types
const partialStateUpdate = (obj: Partial<typeof state>) => setState({ ...state, ...obj });
partialStateUpdate({ foo: 2 });

// The types i need weren't exported
type ButtonProps = React.ComponentProps<typeof Button>;
type AlertButtonProps = Omit<ButtonProps, 'onClick'>;
const AlertButton = (props: AlertButtonProps) => <Button onClick={() => alert('hello')} {...props} />;

function foo(bar: string) {
	return { baz: 1 };
}
function bar() {
	return {
		a: 1,
		b: 2,
		subInstArr: [{ c: 3, d: 4 }],
	};
}

type InstType = ReturnType<typeof bar>;
type SubInstArr = InstType['subInstArr'];
type SubInstType = SubInstArr[0];
