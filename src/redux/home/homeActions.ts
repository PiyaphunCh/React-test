import { homeSlice } from './homeSlice'
import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const homeActions = homeSlice.actions

export const setNameNa = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const res = 'aun'
    dispatch(homeActions.setName(res))
  }
}
