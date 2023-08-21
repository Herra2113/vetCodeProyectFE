
import EditClientes from "../../components/Admin/ListaClientes/EditClientes";

const UpdateClient = ({URL, getApi}) => {
  return (
    <>
      <EditClientes URL={URL} getApi={getApi}/>
    </>
  );
};

export default UpdateClient;
