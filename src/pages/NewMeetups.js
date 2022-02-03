import {useNavigate} from 'react-router-dom'
import NewMeetupForm from '../components/Meetups/NewMeetupForm'
function NewMeetupsPage(){
    const navigate=useNavigate();
    function addMeetupHandler(meetupData){
        fetch(
          "https://react-getting-started-3a05b-default-rtdb.firebaseio.com/meetups.json",
          {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: { "Content-Type": "application/json" },
          }
        ).then(()=>{navigate('/')});
    }
    
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
}
export default NewMeetupsPage;