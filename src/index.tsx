import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RouterView from '@router/Index';
import { routes } from '@router/config';
import App from './App';
import 'antd/dist/antd.css';
import './public_path';

function render(props: any) {
	const { container } = props;
	ReactDOM.render(
		<React.StrictMode>
			<App></App>
		</React.StrictMode>,
		container
			? container.querySelector('#root')
			: document.querySelector('#root')
	);
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
	render({});
}

export async function bootstrap() {
	console.log('react app bootstraped');
}

export async function mount(props: any) {
	console.log('props from main framework', props);
	render(props);
	props.onGlobalStateChange((state: any, prev: any) => {
		console.log('子应用监听');
		console.log(state, prev);
	});
}

export async function unmount(props: any) {
	const { container } = props;
	ReactDOM.unmountComponentAtNode(
		container
			? container.querySelector('#root')
			: document.querySelector('#root')
	);
}

export async function update(props: any) {
	console.log('update props', props);
}
