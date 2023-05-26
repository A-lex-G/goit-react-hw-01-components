import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css";
import { Status } from './FriendListItemStyles';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (<li className={css.item}>
                <Status className={css.status}
                // style={{ backgroundColor: isOnline ? 'yellowgreen' : 'crimson' }}
                isOnline={isOnline} //StyledComponents used...
                >{isOnline}
                </Status>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}