import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
export default function Users() {
    const [data, setData] = useState([]);
    const [mode, setMode] = useState('online');
    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users"
        fetch(url).then((res) => {
            res.json().then((result) => {
                console.warn(result)
                setData(result);
                localStorage.setItem("users", JSON.stringify(result));
            })
        }).catch((err)=>{
            setMode('offline');
            let collection = localStorage.getItem("users");
            setData(JSON.parse(collection));
        })
    }, [])
    return (
        <div>
            {
                mode === 'offline' ? <div className="alert alert-warning" role="alert">You Are In Offline Mode. Please Check Your Network Connection.</div> : null
            }
            <h1>Users</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address.street}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}