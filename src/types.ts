export interface TreeProps {
    name: string
    childrens?: TreeProps[]
}

export interface TableColumns {
    title: string
    key: string
    dataIndex?: string
    customClass?: string
}

export interface TableData {
    id: number
    age: number
    name: string
    tags: string[]
    address: string
}