import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterView from '@router/Index';
import { routes } from '@router/config';
import { IntlProvider } from 'react-intl';
import { loadLocale } from './locale';
import 'antd/dist/antd.css';

const App: React.FC = () => {
	const { message } = loadLocale('zh-CN');
	return (
		<IntlProvider locale="zh-CN" messages={message}>
			子应用
			<BrowserRouter>
				<RouterView routes={routes} />
			</BrowserRouter>
		</IntlProvider>
	);
};

export default App;
