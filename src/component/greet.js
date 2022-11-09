import React from 'react'

export default function greet(props) {
  return (
    <div className="container card p-4 mt-4 registered-container">
        <h3>{props.name}</h3>
        <h3>Thank You for Joining Us.</h3>
        <h3>Verification link send to {props.email}</h3>
    </div>
  )
}
