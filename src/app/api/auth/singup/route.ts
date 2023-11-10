import {NextResponse} from 'next/server'
import User from '@/models/user'
import {conectDB} from '@/libs/mongodb'
import bcrypt from 'bcryptjs'

export async function POST (req: Request) {

  const {fullName, lastName, email, password, documentType, documentNumber, bornDate} = await req.json()

  if (fullName.length < 3) {
    return NextResponse.json({message: 'El nombre debe tener mas de 3 caracteres'}, {status: 400})
  }

  try {
    await conectDB()

    const userFound = await User.findOne({email})

    if (userFound) {
      return NextResponse.json({message: 'El usuario ya existe'}, {status: 400})
    }
  
    const hashedPassword = await bcrypt.hash(password, 12)
  
    const user = new User({
      fullName,
      lastName,
      email,
      password: hashedPassword,
      documentType,
      documentNumber,
      bornDate
    })
  
    const savedUser = await user.save()
    
    return NextResponse.json(savedUser)

  } catch (error) {
    console.log(error)
    return NextResponse.json({message: 'Error al crear el usuario'}, {status: 500})
  }
}