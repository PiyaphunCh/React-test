import '../App.css'
import { useHome } from '../hooks/home'
import { useEffect, useState } from 'react'

const Home = () => {
  const { name, listTimeZone, handleSetName, handleGetAllTimeZone } = useHome()

  useEffect(() => {
    // const interval = setInterval(() => {
    handleSetName()
    // }, 1000)
    // return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    handleGetAllTimeZone()
  }, [])

  // useEffect(() => {
  //   setLoading
  // }, [loading])

  const [ChooseTimeZone, setChooseTimeZone] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSetTimeZone = (item: string) => {
    const newArr = ChooseTimeZone

    const checkDuplicate = newArr.indexOf(item)
    if (checkDuplicate !== -1) {
      newArr.splice(checkDuplicate, 1)

      setChooseTimeZone([...newArr])
    } else {
      setChooseTimeZone((ChooseTimeZone) => [...ChooseTimeZone, item])
    }

    setLoading(true)
  }

  console.log(ChooseTimeZone)

  return (
    <div className="">
      {ChooseTimeZone && loading && (
        <>
          {ChooseTimeZone.map((item, key) => {
            return (
              <div key={key} className="p-3 border-2">
                <div>{item.city}</div>
                <div>{item.time}</div>
              </div>
            )
          })}
        </>
      )}

      {listTimeZone && (
        <div className="flex flex-row flex-wrap">
          {listTimeZone.map((item, key) => {
            return (
              <div
                key={key}
                className="m-2 w-[20%] border-2 p-2"
                onClick={(e) => handleSetTimeZone(item)}
              >
                <div>{item.city}</div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Home
