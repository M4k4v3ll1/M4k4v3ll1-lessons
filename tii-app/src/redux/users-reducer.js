const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET_USERS';

let initialState = {
    users: [/*
        {
            id: 1,
            followed: false,
            fullName: 'Ivan',
            status: 'I am the boss',
            location: {city: 'Samara', country: 'Russia'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Mandy',
            status: 'The whole world in me!',
            location: {city: 'Los-Angeles', country: 'Kurgystan'}
        },
        {id: 3, followed: false, fullName: 'DoomGuy', status: 'Arrrrrgh!', location: {city: 'OAK', country: 'Mars'}}*/
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                }
                return u;
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                }
                return u;
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users] }
        default:
            return (state);
    }
}

export const followAC = () => ({type: FOLLOW, userID});
export const unfollowAC = () => ({type: UNFOLLOW, userID});
export const setUsersAC = () => ({type: SET_USERS, users);

export default usersReducer;