import {Schema, model, models} from 'mongoose'

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  lastName: {
    type: String,
    required: [true, "El apellido es requerido"],
  },
  email: {
    type: String,
    required: true,
    unique:true,
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      'El email no tiene un formato válido'
    ]
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida"],
    select: false,
  },
  documentType: {
    type: String,
    required: [true, "El tipo de documento es requerido"],
  },
  documentNumber: {
    type: Number,
    required: [true, "El número de documento es requerido"],
  },
  bornDate: {
    type: String,
    required: [true, "La fecha de nacimiento es requerida"]
  }
})

const User = models.User || model('User', userSchema)
export default User