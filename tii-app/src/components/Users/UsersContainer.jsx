import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToPoprs = (state) => {
    return (
        users: state.usersPage.users
    )
};

let mapDispatchToProps = (dispatch) => {
    return (
        follow: (userId) => {
        dispatch(followAC(userId));
    },
        unfollow: (userId) => {
        dispatch(unfollowAC(userId));
    },
        setUsers: (setUserSAC) => {
            dispatch()
    }
:
    (userId) => {

    }
)
}

export default connect(mapStateToPoprs, mapDispatchToProps)(Users);