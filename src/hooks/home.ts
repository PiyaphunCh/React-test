import { setNameNa, getAllTimeZone } from '../redux/home/homeActions'
import { useAppDispatch, useAppSelector } from './redux-hooks'

export const useHome = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector

  const name = selector((state) => state.homes.name)
  const listTimeZone = selector((state) => state.homes.listTimeZone)

  const handleSetName = () => {
    dispatch(setNameNa())
  }

  const handleGetAllTimeZone = () => {
    dispatch(getAllTimeZone())
  }

  return { name, listTimeZone, handleSetName, handleGetAllTimeZone }
}
