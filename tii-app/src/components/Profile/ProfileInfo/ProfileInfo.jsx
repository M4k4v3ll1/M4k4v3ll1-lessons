import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;