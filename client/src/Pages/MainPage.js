import { useState } from 'react';
import AddCarForm from '../Components/AddCarForm';
import AddPersonForm from '../Components/AddPersonForm';
import RecordList from '../Components/RecordList';


function MainPage() {
  const [name, setName] = useState("");

  return (
<div>
    <h2 className='mainheading'>PEOPLE AND THEIR CARS</h2>
    <div className='devider'></div>

    
    <div class="separator"><h3 className='subheading'>Add Person</h3></div>
    <AddPersonForm/>
    <div class="separator"><h3 className='subheading'>Add Car</h3></div>
    <AddCarForm/>
    <div class="separator"><h3 className='subheading'>Records</h3></div>
    <RecordList/>
</div>
  )

}

export default MainPage