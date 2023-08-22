/* eslint-disable react/prop-types */

import EditClientes from "../../components/Admin/ListaClientes/EditClientes";

const UpdateClient = ({URL, getApi}) => {
  return (
    <div className="bg-color">
      <EditClientes URL={URL} getApi={getApi}/>
    </div>
  );
};

export default UpdateClient;
