import axios from "axios";
import React, { useEffect, useState } from "react";
const baseURL = 'http://localhost:3000/usuarios/listar';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZGVudGlmaWNhY2lvbiI6MTAyOTg4MDMwNiwibm9tYnJlIjoic2VyZ2lvIiwidGVsZWZvbm8iOiIzMjI3NTgyMzgyIiwidGlwb191c3VhcmlvIjoiY2FmaWN1bHRvciIsImVzdGFkbyI6ImFjdGl2byJ9XSwiaWF0IjoxNzExMTMyMjM3LCJleHAiOjE3MTEyMTg2Mzd9.x9gwTm-1aNJu-VyxZyjVYPPM2L9Q57i29RfXwOKexW4";

export default function Listar() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL, {
          headers: { token }
        });
        setUsuarios(response.data.usuarios);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [baseURL, token]);
  if (usuarios.length === 0) return null;

  return (
    <div>
      {usuarios.map((usuario, mostrar) => (
        <div key={mostrar}>
          <p>NOMBRE : {usuario.nombre}</p>
          <p>TELEFONO : {usuario.telefono}</p>
          <p>CORREO : {usuario.correo_electronico}</p>
          <p>TIPO USUARIO : {usuario.tipo_usuario}</p>
          <p>ESTADO : {usuario.estado}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
}
