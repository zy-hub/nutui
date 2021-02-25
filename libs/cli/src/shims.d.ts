declare module 'signale';
declare module 'fs-extra';
declare module 'webpackbar';
declare module 'html-webpack-plugin';

declare module NodeJS {
	interface Global {
		expect: any;
	}
}

declare module '*.json' {
	const value: any;
	export default value;
}
