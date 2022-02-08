import * as React from 'react';
import { Table, Tag, Space } from 'antd';
import { useTranslation } from 'react-i18next';

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

const Article: React.FC = () => {
	const { t } = useTranslation();

	const columns = [
		{
			title: t('name'),
			dataIndex: 'name',
			key: 'name',
			render: (text: string) => <a>{text}</a>,
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
			render: (tags: any) => (
				<>
					{tags.map((tag: any) => {
						let color = tag.length > 5 ? 'geekblue' : 'green';
						if (tag === 'loser') {
							color = 'volcano';
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
		{
			title: t('action'),
			key: 'action',
			render: (text: string, record: any) => (
				<Space size="middle">
					<a>Invite {record.name}</a>
					<a>Delete</a>
				</Space>
			),
		},
	];

	return (
		<div className="hello">
			<div className="greeting">
				<Table columns={columns} dataSource={data} />
			</div>
		</div>
	);
};

export default Article;
