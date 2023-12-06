import { useState } from 'react';

export default function Form({ titulo, texto }) {

  const [userData, setUserData] = useState({
    nombre: '',
    tel: '',
    email: '',
    remail: '',
    consulta: ''
  });


  const handleUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(userData).includes('')) {
      return alert('Todos los campos deben estar completos')
    }
    if (userData.email !== userData.remail) {
      return alert('Las direcciones de email no coiciden')
    }
    alert('Gracias por contactarnos!')
    setUserData({
      nombre: '',
      tel: '',
      email: '',
      remail: '',
      consulta: ''
    })

  }

  return (
    <section className="w-full bg-red-800">

      <div className="pt-5 pb-16 w-5/6 mx-auto">

        <h4 className="text-5xl font-bold text-red-100 py-3">{titulo}</h4>

        <p className="text-red-50">{texto}</p>

        <div className='flex' data-aos="zoom-in">

          <form            
            onSubmit={handleSubmit}
            className="w-1/2 py-5">

            <div className="space-y-4">
              <input
                type="text"
                name='nombre'
                value={userData.nombre}
                onChange={(e) => { handleUserData(e) }}
                placeholder="Nombre"
                className="p-2 rounded w-full"
                maxLength={20} />

              <input
                type="tel"
                name='tel'
                value={userData.tel}
                onChange={(e) => { handleUserData(e) }}
                placeholder="Número de teléfono"
                className="p-2 rounded w-full"
                maxLength={16} />

              <input
                type="email"
                name='email'
                value={userData.email}
                onChange={(e) => { handleUserData(e) }}
                placeholder="Email"
                className="p-2 rounded w-full" />
              <input
                type="email"
                name='remail'
                value={userData.remail}
                onChange={(e) => { handleUserData(e) }}
                placeholder="Confirma tu email"
                className="p-2 rounded w-full" />

              <textarea
                rows={4}
                cols={30}
                name='consulta'
                value={userData.consulta}
                onChange={(e) => { handleUserData(e) }}
                className="p-2 rounded w-full"
                maxLength={2000}
                placeholder="Escribi tu consulta aqui"
              />

              <button
                type='submit'
                className="py-2 w-full rounded font-bold text-lg bg-orange-50 text-red-800 hover:bg-orange-100 duration-200 ease-in-out"
              >
                Enviar
              </button>
            </div>
          </form>

          <div className='w-1/2 p-5'>

            <div className='flex justify-center'>
              <img
                src='https://i.ibb.co/dMhJhkR/15122021-DSC0051.jpg'
                alt='Imagen torneta con gramil'
                className='rounded max-h-[400px]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

