import React, { useState } from 'react'

export default function Buttons({projects}) {
  console.log(projects, 'buttons')

  const [page, setPage] = useState(0)
  const [ nbPages, setNbpages] = useState(0)
  const [paginate, setPginate] = useState[[]]
    
  return (
    <div>Buttons</div>
  )
}
