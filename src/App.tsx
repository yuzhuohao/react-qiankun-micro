import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterView from '@router/Index';
import { routes } from '@router/config';

import 'antd/dist/antd.css';
import './locale/index';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<RouterView routes={routes} />
		</BrowserRouter>
	);
};

export default App;
