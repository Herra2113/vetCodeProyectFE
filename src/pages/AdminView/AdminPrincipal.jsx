
import AdminClientesCreate from '../../components/Admin/AdminClientesCreate'
import AdminClientes from '../../components/Admin/AdminClientes'



const AdminPrincipal = ({URL , getApi, patients}) => {
  return (
    <div>
      <AdminClientesCreate URL={URL} getApi={getApi}/>
      <AdminClientes patients={patients} URL={URL} getApi={getApi} />
    </div>
  )
}

export default AdminPrincipal