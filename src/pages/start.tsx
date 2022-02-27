import axios from "axios"
import { useState } from "react"

const Start = () => {
  const [data, setData ] = useState("haha")
  const getRequest = () => {
    axios.get('/index/:name', {
      params: {
        name : 'chj'
      }
    }).then((res) => {
      setData(res.data)
    })
  }
  return (
    <div>
      <p>{data}</p>
      <button onClick={getRequest}>点击</button>
    </div>
  )
}

export default Start
