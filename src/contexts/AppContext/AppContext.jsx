import { createContext, useContext, useReducer } from 'react'

const AppContext = createContext()

const appActions = {
  SET_BREADCRUMBS: 'SET_BREADCRUMBS',
  SET_SHOPPING_CART_COUNT: 'SET_SHOPPING_CART_COUNT',
}

const appReducer = (state, action) => {
  if (action.type === appActions.SET_BREADCRUMBS) return { ...state, breadcrumbs: action.payload }
  if (action.type === appActions.SET_SHOPPING_CART_COUNT) return { ...state, shoppingCartCount: action.payload }
  return state
}

const initialState = {
  breadcrumbs: [],
  shoppingCartCount: 0,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const setBreadcrumbs = breadcrumbs => dispatch({ type: appActions.SET_BREADCRUMBS, payload: breadcrumbs })
  const setShoppingCartCount = countItems => {
    dispatch({ type: appActions.SET_SHOPPING_CART_COUNT, payload: countItems })
  }

  const value = {
    ...state,
    setBreadcrumbs,
    setShoppingCartCount,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
