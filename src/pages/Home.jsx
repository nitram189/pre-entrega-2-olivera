import { Form, Hero, SectionHome } from "../components";


export default function Home() {
  return (
    <main>
      <Hero />

      <SectionHome
        titulo='tornetas'
        descripcion='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        linkText='Ver tornetas'
        imagen='https://i.ibb.co/XS2Js5m/15122021-DSC0054.jpg'
        bgColor='bg-red-400'
      />

      <SectionHome
        titulo='laminadoras'
        descripcion='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        linkText='Ver laminadoras'
        imagen='https://i.ibb.co/FBWC0tg/PHOTO-2023-12-05-22-04-21.jpg'
        bgColor='bg-red-500'
      />

      <SectionHome
        titulo='nosotros'
        descripcion='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        linkText='Leer más'
        imagen='https://i.ibb.co/KyXGpV1/pexels-tima-miroshnichenko-5846132.jpg'
        bgColor='bg-red-600'
      />

      <Form
        titulo='Contacto'
        texto='Dudas? Comentarios? Estamos a disposición para lo que necesites. Escribinos y nos pondremos en contacto a la brevedad.'
      />

    </main>
  )
}
