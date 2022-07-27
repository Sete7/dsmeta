import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './style.css';

type Props = {
    saleId:number;
}

function handleClik(id:number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(resp => {
        toast.info("SMS enviado com sucesso");
    });
}

function NotificationButton({saleId} : Props ) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClik(saleId)}>
            <img src={icon} alt="user" />
        </div>
    )
}

export default NotificationButton;