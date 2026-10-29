import { useState } from 'react'
import './App.css'

function ButtonSubmit({ text = "Submit", color = "blue", fontSize=  12}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  }
  return <button style={buttonStyle}>{text}</button>;
};

function ButtonEdit({ text = "Edit", color = "blue", fontSize=  12}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  }
  return <button style={buttonStyle}>{text}</button>;
};

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <form>
        <fieldset>
          <legend>Basic Information</legend>
          <div className='entryfield'>
            <label for="firstname">Firstname: </label>
            <input type="text" id="firstname" name="firstname"/>
          </div>
          <div className='entryfield'>
            <label for="surname">Surname: </label>
            <input type="text" id="surname" name="surname"/>
          </div>
          <div className='entryfield'>
            <label for="email">Email: </label>
            <input type="email" id="email" name="email"/>
          </div>
          <div className='entryfield'>
            <label for="phoneNumber">Phone Number: </label>
            <input type="tel" id="phoneNumber" name="phoneNumber"/>
          </div>
          <ButtonSubmit />
          <ButtonEdit />
        </fieldset>
        <fieldset>
          <legend>Educational Experience</legend>
          <div className='entryfield'>
            <label for="university">University Name: </label>
            <input type="text" id="university" name="university"/>
          </div>
          <div className='entryfield'>
            <label for="study">Title of study: </label>
            <input type="text" id="study" name="study"/>
          </div>
          <div className='entryfield'>
            <label for="startYear">Started: </label>
            <input type="month" id="startYear" name="startYear"/>
          </div>
          <div className='entryfield'>
            <label for="endYear">Completed: </label>
            <input type="month" id="endYear" name="endYear"/>
          </div>
          <ButtonSubmit />
          <ButtonEdit />
        </fieldset>
        <fieldset>
          <legend>Work Experience</legend>
          <div className='entryfield'>
            <label for="companyName">Company Name: </label>
            <input type="text" id="companyName" name="companyName"/>
          </div>
          <div className='entryfield'>
            <label for="position">Position: </label>
            <input type="text" id="position" name="position"/>
          </div>
          <div className='entryfield'>
            <label for="workStart">Start Date: </label>
            <input type="date" id="workStart" name="workStart"/>
          </div>
          <div className='entryfield'>
            <label for="workEnd">End Date: </label>
            <input type="date" id="workEnd" name="workEnd"/>
          </div>
          <ButtonSubmit />
          <ButtonEdit />
        </fieldset>
      </form>
    </>
  )
}

export default App
