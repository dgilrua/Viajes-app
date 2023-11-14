import {NextResponse} from 'next/server'
import User from '@/models/user'
import {conectDB} from '@/libs/mongodb'
import bcrypt from 'bcryptjs'

export async function POST (req: Request) {

  const {email, password} = await req.json()

  try {
    await conectDB()

    const userFound = await User.findOne({email: email}).select('+password')
    if (!userFound) throw new Error('Credenciales invalidas')

    const passwordMatch = await bcrypt.compare(password, userFound.password)
    if (!passwordMatch) throw new Error('Credenciales invalidas')

    return NextResponse.json(userFound);

  } catch (error) {
    console.log(error)
    return NextResponse.json({message: 'Las credenciales de inicio de sesion son incorrectas'}, {status: 500})
  }
}