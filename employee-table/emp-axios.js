import React from 'react';
import axios from 'axios'
import Table from './table';

class Employee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employeeList: []
        }
    }
    componentWillMount() {
        this.getdata()
    }
    getdata = () => {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => {
                console.log(response.data.data)
                this.setState({ employeeList: response.data.data })
            }, error => {
                console.log("Error....!!!")
            })
    }
    tabledata = () => {
        return this.state.employeeList.map(emp => {
            return(
            <Table
                key={emp.id}
                id={emp.id}
                name={emp.employee_name}
                salary={emp.employee_salary}
                age={emp.employee_salary}>
            </Table>)
        })
    }
    render() {
        return (
            <table border='solid black 0.5px'>
                <caption>Employee Detail</caption>
                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tabledata()}
                </tbody>
            </table>
        );
    }
}

export default Employee;