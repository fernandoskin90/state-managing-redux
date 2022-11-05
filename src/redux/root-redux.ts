import { combineReducers } from 'redux'

const test = (state = {}, action: any) => {
  switch (action.type) {
    case 'Fetch characters':
      return { ...state, data: action.data }

    default:
      return state
  }
}

export const rootReducer = combineReducers({
  test,
})
