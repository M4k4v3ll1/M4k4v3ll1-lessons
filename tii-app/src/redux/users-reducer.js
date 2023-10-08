import React from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZfUHi2Gyx9xhAQzhJ2WVfB6UxTix2L1ubQ&usqp=CAU',
            followed: false,
            fullName: 'Ivan',
            status: 'I am the boss',
            location: {city: 'Samara', country: 'Russia'}
        },
        {
            id: 2,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeU4nxkj9n745UM85qul_NG7IFw-b1avF3-Q&usqp=CAU',
            followed: true,
            fullName: 'Mandy',
            status: 'The whole world in me!',
            location: {city: 'Los-Angeles', country: 'Kurgystan'}
        },
        {
            id: 3,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Drt1ewPwIMxcWoRXwAUN79V6n_YQRY3B1g&usqp=CAU',
            followed: false,
            fullName: 'DoomGuy',
            status: 'Arrrrrgh!',
            location: {city: 'OAK', country: 'Mars'}
        }
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
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return (state);
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;