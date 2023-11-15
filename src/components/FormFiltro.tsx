import {useContext} from 'react'
import { ManejoContext } from '@/context/manejoContext'

interface Props {
  datos: {
    id_viaje: string,
    destino: string,
    fecha_viaje: string,
    precio_puesto: number,
    imagen: string
  }[]
}

const FormFiltro: React.FC<Props> = ({datos}) => {

  const fechas = datos.map((viaje) => viaje.fecha_viaje)
  const precio = datos.map((viaje) => viaje.precio_puesto)
  const precioSinDuplicados = precio.filter((valor, indice) => precio.indexOf(valor) === indice)
  precioSinDuplicados.sort((a, b) => a - b)

  const {setFechaFiltro, fechaFiltro, setPrecioFiltro, precioFiltro} = useContext(ManejoContext)

  return (
    <form>
      <label htmlFor='fecha'>Fecha</label>
      <select name="fecha" id='fecha' value={fechaFiltro} onChange={(e) => {setFechaFiltro(e.target.value)}}>
        {fechas.map((fecha) => (
          <option key={crypto.randomUUID()} value={fecha}>{fecha}</option>
        ))}
      </select>
      <select name="fecha" id='fecha' value={precioFiltro} onChange={(e) => {setPrecioFiltro(e.target.value)}}>
        {precioSinDuplicados.map((precio) => (
          <option key={crypto.randomUUID()} value={precio}>{precio}</option>
        ))}
      </select>
    </form>
  )
}

export default FormFiltro