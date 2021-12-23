import style from './Contacts.module.css';
import Form from './form/Form';
import Card from '../common/Card';

const Contacts = () => {
    return (
        <div className={style.contacts}>
        <Card className={style.contactsContainer}>
            <div className={style.title}>
                <h3>Contact</h3>
                </div>
            <Form />
        </Card>
        </div>
    )
}

export default Contacts;