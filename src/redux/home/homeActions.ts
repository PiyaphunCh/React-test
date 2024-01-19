import { homeSlice } from './homeSlice'
import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import moment from 'moment-timezone'
import axios from 'axios'

export const homeActions = homeSlice.actions

export const getAllTimeZone = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const allTimeZone = await axios.get(
      'https://worldtimeapi.org/api/timezone/Europe'
    )
    const timeZoneList = allTimeZone.data

    const dataPrepare = timeZoneList.map((item) => {
      const time = moment().tz(item).format('LTS')
      return { city: item.split('/')[1], time: time }
    })

    dispatch(homeActions.setAllTimeZone(dataPrepare))
  }
}
export const setNameNa = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const setTimezone = [
      'Europe/London',
      'Asia/Tokyo',
      'America/New_York',
      'Asia/Bangkok'
    ]

    const dataPrepare = setTimezone.map((item) => {
      const time = moment().tz(item).format('LTS')
      return { city: item.split('/')[1], time: time }
    })

    dispatch(homeActions.setName(dataPrepare))
  }
}
