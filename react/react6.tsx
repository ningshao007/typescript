import React from 'react';

// declaration merging
declare module 'some.js' {
	interface someHTMLElement {
		removeAllListeners(): void;
	}
}

// grab all the native attributes of an HTML element as the props type of your component.
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	specialProps?: string;
}
export function Button(props: ButtonProps) {
	const { specialProps, ...rest } = props;

	return <button {...rest} />;
}

// passing a component to be rendered
function PassThrough(props: { as: React.ElementType<any> }) {
	const { as: Component } = props;

	return <Component />;
}
