import * as React from 'react';
import { Table, Tag, Space } from 'antd';
import { useTranslation, Trans } from 'react-i18next';

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];

const User: React.FC = () => {
	const { t } = useTranslation();

	const columns = [
		{
			title: t('name'),
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: t('age'),
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: t('address'),
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: t('tags'),
			key: 'tags',
			dataIndex: 'tags',
		},
	];

	return (
		<div className="hello">
			{/* <h1>{t('addressee-tip')}</h1> */}
			<Trans>addressee-tip</Trans>
			<Table columns={columns} dataSource={data} />
		</div>
	);
};

export default User;
