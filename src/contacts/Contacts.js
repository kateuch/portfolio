import style from './Contacts.module.scss';
import Form from './form/Form';
import Card from "../common/components/Card/Card";
import Title from '../common/components/Title/Title';


const Contacts = () => {
    return (
        <div className={style.contacts} id={'contacts'} >
       <Card className={style.contactsContainer}>

            <Title title={'Contact'}/>

            <div className={style.map}><iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Moscow,%20+(My%20current%20location)&amp;t=k&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="300" frameborder="0"><a href="https://www.gps.ie/golf-gps/">golf range finders</a></iframe></div>
            <Form />
        </Card>
        </div>
    )
}

export default Contacts;