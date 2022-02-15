import Article from '@pages/articleManage/Index';
import User from '@pages/userManege/Index';
import Login from '@pages/Login/Index';
import { RouteConfig } from '@/types/common';

export const routes: RouteConfig[] = [
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/article',
		component: Article,
	},
	{
		path: '/user',
		component: User,
	},
];
