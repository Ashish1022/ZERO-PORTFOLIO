import React from 'react'

const page = ({params}:{params:{projectId:string}}) => {
  return (
    <div>Project details for {params.projectId}</div>
  )
}

export default page