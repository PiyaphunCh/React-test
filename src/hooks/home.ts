import { setNameNa } from '../redux/home/homeActions'
import { useAppDispatch, useAppSelector } from './redux-hooks'

export const useHome = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector

  const name = selector((state) => state.homes.name)
  const handleSetName = () => {
    dispatch(setNameNa())
  }
  return { name, handleSetName }
}
