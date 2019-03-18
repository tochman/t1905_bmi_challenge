import React from 'react'

const DisplayResults = (props) => {
  return (
    <>
      {props.calculate(props.weight, props.height)}
    </>
  )
}

export default DisplayResults
