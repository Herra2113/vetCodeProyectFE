/* eslint-disable react/prop-types */

import AdminClientesCreate from '../../components/Admin/AdminClientesCreate'
import AdminClientes from '../../components/Admin/AdminClientes'
import './admin.css'



const AdminPrincipal = ({URL , getApi, patients}) => {
  return (
    <div className='bg-color'>
      <AdminClientesCreate URL={URL} getApi={getApi}/>
      <AdminClientes patients={patients} URL={URL} getApi={getApi} />
    </div>
  )
}

export default AdminPrincipal