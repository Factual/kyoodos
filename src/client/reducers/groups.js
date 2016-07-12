import { GROUP_GET } from '../consts'

const initialState = []

export default function groups(state=initialState, action) {
  switch(action.type) {
    case 'GROUP_GET':
      return [...state, ...action.groups]
    default:
      return state
  }
    
}


