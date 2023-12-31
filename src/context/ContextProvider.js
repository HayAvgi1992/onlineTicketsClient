import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useRef
} from 'react'
import reducer from './reducer';


const initialState = {
    // currentUser: null,
    // openLogin: false,
    // loading: false,
    alert: { open: false, severity: 'info', message: '' },
    // profile: { open: false, file: null, photoURL: '' },
    // images: [],
    // details: { title: '', description: '', price: 0 },
    location: { lng: 0, lat: 0 },
    tickets: [],
    // priceFilter: 50,
    // addressFilter: null,
    // filteredRooms: [],
    // room: null,
};

const Context = createContext(initialState)

export const useValue = () => {
    return useContext(Context)
}

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider