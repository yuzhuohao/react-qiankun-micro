import Article from '@pages/articleManage/Index';
import User from '@pages/userManege/Index';
import Login from '@pages/Login/Index';
import { RouteConfig } from '@/types/common';

export const routes: RouteConfig[] = [
	{
		path: '/react-qiankun-micro/login',
		component: Login,
	},
	{
		path: '/react-qiankun-micro/article',
		component: Article,
	},
	{
		path: '/react-qiankun-micro/user',
		component: User,
	},
];
