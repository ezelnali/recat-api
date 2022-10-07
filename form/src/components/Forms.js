import React, { useState, useEffect } from "react";
import { get, post, put, remove } from "../utility/api";



const Forms = () => {
  const [forms, setForms] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [utbildning, setUtbildning] = useState('')
  const [email, setEmail] = useState('')
  const [counter, setCounter] = useState(Date.now());
  const [id, setId] = useState('');
  const baseURL = 'http://localhost:8080'

  useEffect(() => {
    get(`${baseURL}/read`).then((response) => setForms(response.data));
  }, []);

  const createData = (e) => {
    e.preventDefault();

    post(`${baseURL}/create`, {
      id: counter,
      firstName: firstName,
      lastName: lastName,
      email: email,
      utbildning: utbildning,
    });
    setCounter(Date.now());
    get(`${baseURL}/read`).then((response) => setForms(response.data))
  }

  const updateData = (e) => {
    e.preventDefault();

    put(`${baseURL}/update/${id}`, {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      utbildning: utbildning,

    }).then(() => get(`${baseURL}/read`).then((response) => setForms(response.data))
    )
  }

  const deleteData = (e) => {
    e.preventDefault();

    remove(`${baseURL}/delete/${id}`);
    get(`${baseURL}/read`).then((response) => setForms(response.data));
  }

  return (
    <div>
      <form>
        <select value={forms?.id} onChange={(e) => setId(e.target.value)}>
          <option value="" defaultValue display={forms?.display} hidden>Välj id</option>
          {
            forms?.map((contact) => {
              return (
                <option className="" key={contact.id}>{`${contact.id}`}</option>
              )
            })
          }
        </select>
        <input type="text" value={firstName} placeholder="FirstName" onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" value={lastName} placeholder="LastName" onChange={(e) => setLastName(e.target.value)} />
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={utbildning} placeholder="Utbildning" onChange={(e) => setUtbildning(e.target.value)} />

        <button onClick={createData}>Add</button>

        <button onClick={updateData}>Edit</button>

        <button onClick={deleteData}>Delete</button>

      </form>
      {
        forms.map((contacts) => {
          return (
            <div key={contacts.id}>
              <li className="" key={contacts.id}>
                <p>{contacts.id}</p>
                <p>{contacts.firstName}</p>
                <p>{contacts.lastName}</p>
                <p>{contacts.email}</p>
                <p>{contacts.utbildning}</p>
              </li>
            </div>
          )
        })
      }

    </div>
  );
};


export default Forms;