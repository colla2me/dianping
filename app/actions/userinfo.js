import * as actionTypes from '../constants/userinfo'

export function login(data) {
  return {
    type: actionTypes.USERINFO_LOGIN,
    data: data
  }
}

export function update(data) {
  return {
    type: actionTypes.UPDATE_CITYNAME,
    data: data
  }
}