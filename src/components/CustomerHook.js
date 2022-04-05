import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import CustomerService from '../services/CustomerService';


const CustomerHook = (props) => {
    const history = useHistory();

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        console.log('le pathname de useEffect est  = ' + history.location.pathname); 
        CustomerService.getAllCustomers().then((res) => {
            setCustomers(res.data);
        })
    },[])

    const addCustomer = (() => {
        console.log('le pathname de addCustomer est  = ' + history.location.pathname); 
        props.history.push('/add/-1');
    });

    const editCustomer = ((id) => {
        console.log('le pathname de editCuster est  = ' + history.location.pathname); 
        props.history.push(`/add/${id}`);
    });

    const deleteCustomer = ((id) => {
        console.log('entre deleteCustomer avec id = ' + id);
        CustomerService.deleteCustomer(id).then((res) => {
            console.log('le pathname est  = ' + history.location.pathname); 
            history.push('/home');
        });
    });

    return (
        <div>
            <h2 className="text-center">These Companies are our Customers</h2>
            <div>
                <button className="btn btn-primary" onClick={addCustomer}>
                    Add New Customer
                </button>
            </div>

            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(
                            cust =>
                                <tr key={cust.id}>
                                    <td>{cust.name}</td>
                                    <td>{cust.address}</td>
                                    <td>{cust.email}</td>
                                    <td>
                                        <button onClick={() => editCustomer(cust.id)} className="btn btn-info">Update</button>
                                        <button onClick={() => deleteCustomer(cust.id)} className="btn btn-danger">Delete</button>
                                    </td>

                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomerHook
