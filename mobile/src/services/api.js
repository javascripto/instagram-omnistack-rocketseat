import axios from 'axios';

// const currentOrigin = 'http://localhost:3333'; // rodando emulador
// const currentOrigin = 'http://10.0.3.2:3333'; // rodando emulador geanymotion
// const currentOrigin = 'http://10.0.2.2:3333'; // rodando emulador do Android Studio
const currentOrigin = 'http://192.168.15.14:3333'; // Meu IP local atual

export default axios.create({
    baseURL: currentOrigin
});
