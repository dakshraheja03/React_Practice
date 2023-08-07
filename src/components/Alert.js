import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className="alert alert-success" role="alert">
        {props.alertText}
    </div>
  )
}
