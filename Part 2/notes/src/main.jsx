import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'

// const promise1 = axios.get('http://localhost:3001/notes')
// console.log(promise1)

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)


// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true
//   }
// ]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// axios.get('http://localhost:3001/notes')
//      .then(response =>{
//       const notes = response.data
//       ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
//      })