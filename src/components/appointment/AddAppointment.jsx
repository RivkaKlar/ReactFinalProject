import dataStore from "../../data/DataStore"
import  {Observer}  from "mobx-react"

const AddAppointment = (Observer(() => {

  //const name and password from inputs

  return (
      <>
          login
          <Button onClick={() => CheckLogin('admin', '123456')}>to login</Button>
      </>
  )
}))
export default AddAppointment
  