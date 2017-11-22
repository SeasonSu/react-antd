import React from 'react';
import { Table,Button } from 'antd';
import reqwest from 'reqwest'
import './index.scss'
import {ExportJsonExcel} from '../../utils'
// const ExportJsonExcel = require('js-export-excel')
var option={};

option.fileName = 'excel'
option.datas=[
  {
    sheetData:[{one:'一行一列',two:'一行二列'},{one:'二行一列',two:'二行二列'}],
    sheetName:'sheet',
    sheetFilter:['two','one'],
    sheetHeader:['第一列','第二列']
  },
  {
    sheetData:[{one:'一行一列',two:'一行二列'},{one:'二行一列',two:'二行二列'}]
  }
];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  render: name => `${name.first} ${name.last}`,
  width: '20%'
}, {
  title: 'Gender',
  dataIndex: 'gender',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' }
  ],
  width: '20%'
}, {
  title: 'Email',
  dataIndex: 'email'
}];

class TableComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false
        }
    }
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters
        });
    }
    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({ loading: true });
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 10,
                ...params
            },
            type: 'json'
        }).then((data) => {
            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination
            });
        });
    }
    exportExcel(){
        var toExcel = new ExportJsonExcel(option); //new
        toExcel.saveExcel(); //保存
    }
    componentDidMount() {
        this.fetch();
    }
    render() {
        return (
            <div className="tableBox">
                <div className="control">
                    <Button onClick={this.exportExcel}>导出EXCEL</Button>
                </div>
                <Table columns={columns}
                rowKey={record => record.registered}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                bordered
                onChange={this.handleTableChange}
                />
            </div>
        );
    }
}

export default TableComp
