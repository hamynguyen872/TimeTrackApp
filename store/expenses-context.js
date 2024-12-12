import { children, createContext, useReducer } from "react";
const DUMMY_TIME = [
    {
        id: 'e1',
        description: 'React Native',
        amount: 2.1,
        date: new Date('2024-10-19')
    },
    {
        id: 'e2',
        description: 'Econ 101',
        amount: 3.5,
        date: new Date('2024-10-08')
    },
    {
        id: 'e3',
        description: 'Linear Algebra',
        amount: 3.3,
        date: new Date('2024-10-13')
    },
    {
        id: 'e4',
        description: 'Algorithm Design',
        amount: 4.5,
        date: new Date('2024-10-16')
    },
    {
        id: 'e5',
        description: 'History',
        amount: 2.4,
        date: new Date('2024-10-12')
    },
    {
        id: 'e6',
        description: 'Piano Private Lession',
        amount: 2.5,
        date: new Date('2024-10-14')
    },
    {
        id: 'e7',
        description: 'React Native',
        amount: 5.3,
        date: new Date('2024-1015')
    },
    {
        id: 'e8',
        description: 'Anthropology',
        amount: 2.8,
        date: new Date('2024-10-19')
    },
    {
        id: 'e9',
        description: 'Photography',
        amount: 3.5,
        date: new Date('2024-10-17')
    },
    {
        id: 'e12',
        description: 'React Native',
        amount: 2.1,
        date: new Date('2024-10-19')
    },
    {
        id: 'e11',
        description: 'Intro to Psy',
        amount: 3.7,
        date: new Date('2024-10-7')
    },
    {
        id: 'e13',
        description: 'Data Analysis',
        amount: 5.6,
        date: new Date('2024-10-20')
    },
]
export const TimeContext = createContext({
    time: [],
    addTime: ({ description, amount, date }) => { },
    deleteTime: (id) => { },
    updateTime: (id, { description, amount, date }) => { }
});

function timeReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updatableTimeIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updateableTime = state[updatableTimeIndex];
            const updatedItem = { ...updateableTime, ...action.payload.data }
            const updatedTime = [...state];
            updatedTime[updatableTimeIndex] = updatedItem
            return updatedTime
        case 'DELETE':
            return state.filter((time) => time.id !== action.payload)
        default:
            return state;
    }
}

function TimeContextProvider({ children }) {
    const [timeState, dispatch] = useReducer(timeReducer, DUMMY_TIME);

    function addTime(timeData) {
        dispatch({ type: 'ADD', payload: timeData });
    }

    function deleteTime(id) {
        dispatch({ type: 'DELETE', payload: id })
    }

    function updateTime(id, timeData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: timeData } })
    }

    const value = {
        time: timeState,
        addTime: addTime,
        deleteTime: deleteTime,
        updateTime: updateTime
    }

    return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>
}

export default TimeContextProvider;