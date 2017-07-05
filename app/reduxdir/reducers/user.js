import { handleActions } from 'redux-actions'
import { hasResponseError } from 'utils/public'

export const userListResult = handleActions(
  {
    'request usrt list': (state, action) => {
      return { ...state, loading: true }
    },
    'receive user list': (state, action) => {
      const { res } = action.payload
      if (hasResponseError(res)) {
        return { ...state, loading: false }
      }
      return { ...res.data, loading: false }
    }
  },
  { list: [] }
)
