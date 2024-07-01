import React from "react";
import DropdownButton from "../components/DropdownButton"
import { useState } from "react";

const OcupationArea = (props) => {
    const [ocupacion, setOcupacion] = useState("");
    const [department, setDepartment] = useState("");
    const [options, setOptions] = useState([]);
  
    const carrers = [
        { id: 1, name: "Ing. de Sistema" },
        { id: 2, name: "Ing. Quimica" },
        { id: 3, name: "Ing. Electrica" },
        { id: 4, name: "Ing. Mecanica" },
        { id: 5, name: "Ing. Produccion" },
        { id: 6, name: "Ing. Civil" },
      ];
    
      const depD = [
        { id: 1, name: "Ciencias Sociales" },
        { id: 2, name: "Ciencias Naturales" },
        { id: 3, name: "Ciencias Economicas y Administrativas" },
        { id: 4, name: "Ingenieria" },
        { id: 5, name: "Humanidades" },
      ];
      
      const depA = [
        { id: 1, name: "Administracion" },
        { id: 2, name: "Finanzas" },
        { id: 3, name: "Recursos Humanos" },
        { id: 4, name: "Mercadeo" },
        { id: 5, name: "Sistemas" },
        { id: 6, name: "Produccion" },
      ];
    

    const handleOcupacionChange = (event) => {
      setOcupacion(event.target.value);
      props.onOcupationChange(event.target.value);
      switch (event.target.value) {
        case "Estudiante":
          setOptions(carrers);
          break;
        case "Profesor":
          setOptions(depD);
          break;
        case "Administrativo":
          setOptions(depA);
          break;
        default:
          setOptions([]);
      }
    };
  
    const handleDepartmentChange = (event) => {
        const selectedDepartment = options.find((option) => option.id === parseInt(event.target.value));
      setDepartment(event.target.value);
      props.onDepartmentChange(selectedDepartment ? selectedDepartment.name : "");
    };
  
    return (
      <div>
        <DropdownButton
          id="user-ocupation"
          options={[
            { id: "Estudiante", name: "Estudiante" },
            { id: "Profesor", name: "Profesor" },
            { id: "Administrativo", name: "Administrativo" },

          ]}
          value={ocupacion}
          onChange={handleOcupacionChange}
          label="Ocupación"
          required={ocupacion !== null}
        />
        <DropdownButton
          id="user-department"
          options={options}
          value={department}
          onChange={handleDepartmentChange}
          label="Departamento/Carrera"
          required={ocupacion !== null}
        />
      </div>
    );
  };

  export default OcupationArea;