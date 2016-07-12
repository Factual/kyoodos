import { KYOODOS_POST, KYOODOS_GET } from '../consts'

consts initialState = []

export default function kyoodos(state=initialState, action) {
  switch(action.type) {
    case 'KYOODOS_GET': 
      return [...state, action.kyoodos]
    case 'KYOODOS_POST':
      return state
    default:
      return state
  }
}
