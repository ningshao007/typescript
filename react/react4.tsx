import React from 'react';
import { createPortal } from 'react-dom';

// use object default values
type GreetProps = { age?: number };
const Greet = ({ age = 21 }: GreetProps) => <div>hello world</div>;

// portals
const modalRoot = document.querySelector('#modal-root') as HTMLElement; // NOTE: 注意这里的断言

type ModalProps = {
	children: React.ReactNode;
};

function Modal({ children }: ModalProps) {
	const elRef = React.useRef<HTMLDivElement | null>(null);
	if (!elRef.current) {
		elRef.current = document.createElement('div');
	}

	React.useEffect(() => {
		// NOTE: non-null assertion because it will never be null,不加非空断言后面的appendChild会报❌
		const el = elRef.current!;
		modalRoot?.appendChild(el);

		return () => {
			modalRoot.removeChild(el);
		};
	}, []);

	return createPortal(children, elRef.current);
}
