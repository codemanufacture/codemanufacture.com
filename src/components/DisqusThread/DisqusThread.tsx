import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'

const DisqusThread = () => {
  return (
    <>
      <h3>Check out the comments:</h3>
      <ReactDisqusComments
        shortname="codemanufacturecom"
        identifier="codemanufacturecom"
        title="Comments"
        url="https://codemanufacture.com/"
      />
    </>
  )
}

export default DisqusThread
