import "./Table.style.css";
import React from "react";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
const usersList = [
  { id: 1, firstName: "Sahar", lastName: "mansouri", job: "Developer" },
  {
    id: 2,
    firstName: "ali",
    lastName: "komijani",
    job: "jonior",
  },
];
export const Table = () => {
  const [users, setUsers] = useState(usersList);
  const [user,setUser]=useState({id: 3, firstName:"",lastName:"",job:""})
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };


  const makeUniqId=()=>{
    return parseInt(100*Math.random())
  }

  
  const handleAdd = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const firstName = data.get("firstName")
    const lastName = data.get("lastName")
    const job = data.get("job")
    setUsers([...users, { id:makeUniqId,firstName, lastName, job }])
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>first name</td>
            <td>last name</td>
            <td>job</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.job}</td>
              <td>
                <Button size="sm"> Update </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleDelete(user.id)}
                >
                  {" "}
                  Delete{" "}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container-form">
        <Form onSubmit={handleAdd}>
          <label className="lable-contain" htmlFor="firstName">
            First Name
          </label>
          <input className="input-contain" placeholder="First name" />

          <label className="lable-contain" htmlFor="lastName">
            Last Name :{" "}
          </label>
          <input
            className="input-contain"
            type="text"
            placeholder="Last name"
          />

          <label className="lable-contain" htmlFor="job">
            job :{" "}
          </label>
          <input className="input-contain" type="text" placeholder="job" />

          <input type="submit" />
        </Form>
      </div>
    </div>
  )
}
