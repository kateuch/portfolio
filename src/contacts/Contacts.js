import style from './Contacts.module.scss';
import Form from './form/Form';
import Card from "../common/components/Card/Card";
import Title from '../common/components/Title/Title';

const Contacts = () => {
    return (
        <div className={style.contacts} id={'contacts'} >
       <Card className={style.contactsContainer}>
            <Title title={'Contact'}/>
            <Form />
        </Card>
        </div>
    )
}

export default Contacts;