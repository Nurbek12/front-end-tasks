import { TableColumns, TableData } from './types'

export const colors = {
    red: 'text-red-600 border-red-600 bg-red-50',
    blue: 'text-blue-600 border-blue-600 bg-blue-50',
    green: 'text-green-600 border-green-600 bg-green-50',
}

export const tags_color = {
    'NICE': colors.green,
    'DEVELOPER': colors.blue,
    'LOSER': colors.red,
    'COOL': colors.green,
    'TEACHER': colors.blue,
}

export const collapse_data = [
    {
        name: 'Models',
        childrens: [
            {
                name: 'Data warehouse',
                childrens: [
                    { name: 'Report samples' },
                    { name: 'Sales perfomance' },
                ]
            }
        ]
    },
    {
        name: 'Statistics',
        childrens: []
    },
]

export const columns: TableColumns[] = [
    { title: 'Name', key: 'name', customClass: 'text-blue-500' },
    { title: 'Age', key: 'age', },
    { title: 'Address', key: 'address', },
    { title: 'Tags', key: 'tags' },
    { title: 'Actions', key: 'actions' },
]

export const data: TableData[] = [
    { id: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['NICE', 'DEVELOPER'] },
    { id: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['LOSER'] },
    { id: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['COOL', 'TEACHER'] },
]