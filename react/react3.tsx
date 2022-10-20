// Function Components
import React from 'react';
import { Reducer } from 'redux';

type AppProps = {
	message: string;
};

// Easiest way to declare a function component;return type is inferred;
const App = ({ message }: AppProps) => <div>{message}</div>;

const Title: React.FC<{ title: string; children: React.ReactNode }> = ({ children, title }) => <div title={title}>{children}</div>;

// --------------- Hooks -----------------------
type User = {
	name: string;
	age: number;
};

// useState
const App1 = () => {
	const [state, setState] = React.useState<User | null>(null);
	// const [user,setUser] = React.useState<User>({} as User)
};

// useReducer
const initialState = { count: 0 };

type ACTIONTYPE = { type: 'increment'; payload: number } | { type: 'decrement'; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + action.payload };

		case 'decrement':
			return { count: state.count - Number(action.payload) };
		default:
			throw new Error();
	}
}

function Counter() {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: 'decrement', payload: '5' })}> -</button>
			<button onClick={() => dispatch({ type: 'increment', payload: 5 })}> + </button>
		</>
	);
}

// useRef
// In Typescript,useRef returns a reference that is either read-only or mutable
function Foo() {
	// this returns RefObject<HTMLDivElement>
	const divRef = React.useRef<HTMLDivElement>(null);
	// this returns MutableRefObject<number | null>
	const intervalRef = React.useRef<number | null>(null);
}

// useImperativeHandle
type CountdownHandle = {
	start: () => void;
};
type CountdownProps = {
	children: React.ReactNode;
};

const Countdown = React.forwardRef<CountdownHandle, CountdownProps>((props, ref) => {
	React.useImperativeHandle(ref, () => ({
		start() {
			alert('start');
		},
	}));

	return <div>{props.children}</div>;
});

function App2() {
	const countdownEl = React.useRef<CountdownHandle>(null);
	React.useEffect(() => {
		if (countdownEl.current) {
			countdownEl.current.start();
		}
	}, []);

	return <Countdown ref={countdownEl}>hello</Countdown>;
}

// Custom Hooks
export function useLoading() {
	const [isLoading, setState] = React.useState(false);
	const load = (aPromise: Promise<any>) => {
		setState(true);
		return aPromise.finally(() => setState(false));
	};
	// infers [boolean,typeof load] instead of (boolean|typeof load)[]
	return [isLoading, load] as const;
}

// Context
type AppContextInterface = {
	name: string;
	author: string;
	url: string;
};

const AppCtx = React.createContext<AppContextInterface | null>(null);
const sampleAppContext: AppContextInterface = {
	name: 'using React Context in a TypeScript App',
	author: 'lyn',
	url: 'http://www.baidu.com',
};

const App3 = () => <AppCtx.Provider value={sampleAppContext}></AppCtx.Provider>;

const PostInfo = () => {
	const appContext = React.useContext(AppCtx);
	return (
		<div>
			Name:{appContext?.name},Author:{appContext?.author},Url:{appContext?.url}
		</div>
	);
};

// forwardRef
interface Props {
	children?: React.ReactNode;
	type: 'submit' | 'button';
}
type Ref = HTMLButtonElement;

const FancyButton = React.forwardRef<Ref, Props>((props, ref) => (
	<button ref={ref} type={props.type}>
		{props.children}
	</button>
));
