import icon from '../../assets/img/notification-icon.svg'
import './style.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="user" />
        </div>
    )
}

export default NotificationButton