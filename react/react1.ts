import react from 'react';

type Props = {};
type MyButtonWithForwardRef = {};

type AppProps = {
	message: string;
	count: number;
	disabled: boolean;
	names: string[];
	// name:Array<string>
	// obj: object;
	// obj2: {};
	obj3: {
		id: string;
		title: string;
	};
	objArr: {
		id: string;
		title: string;
	}[];
	dict1: {
		[key: string]: any;
	};
	dict2: Record<string, any>;
	// onSomething: Function;
	onClick: () => void;
	onChange: (id: number) => void;
	onChange1: (event: react.ChangeEvent<HTMLInputElement>) => void;
	onClick1(event: react.MouseEvent<HTMLButtonElement>): void;
	setState: react.Dispatch<react.SetStateAction<number>>;
	children?: react.ReactNode;
	style?: react.CSSProperties;
	props: Props & react.ComponentPropsWithoutRef<'button'>;
	prop1: Props & react.ComponentPropsWithRef<MyButtonWithForwardRef>;
};
