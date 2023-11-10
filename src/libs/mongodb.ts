import mongoose from "mongoose";

const {MONGODB_URI} = process.env;

if (!MONGODB_URI) {
  throw new Error('MongoDB_URI debe estar definida');
}

export const conectDB = async () => {
  try {
    const {connection} = await mongoose.connect(MONGODB_URI);
    if (connection.readyState === 1) {
      console.log('Conectado a MongoDB');
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log('Error al conectar a MongoDB', error);
    return Promise.reject(false);
  }
} 