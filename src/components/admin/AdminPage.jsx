import { useState } from "react"
import Login from "./Login"
import AdminHome from "./AdminHome"
import DataStore from "../../data/DataStore"
import { observer } from "mobx-react"

const AdminPage = (observer(() => {
    // const [isLogin, setIsLogin] = useState(false)

    return (
        <>
            {!DataStore.isLogin ? <Login /> : <AdminHome />}
        </>
    )
}))

export default AdminPage