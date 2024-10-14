import { FaUserCircle } from 'react-icons/fa'

export default function Header() {
  return (
    <div className='flex h-40 w-full items-center justify-center gap-8 bg-black px-8'>
      <img src='/logo.webp' alt='logomarca' />
      <nav className='flex items-center gap-8 text-white'>
        <a href='/' className='text-red-600'>
          Inicio
        </a>
        <a href='/'>Próximos eventos</a>
        <a href='/'>Resultados</a>
        <a href='/'>Serviços</a>
        <a href='/'>Quem somos</a>
        <a href='/'>Contato</a>
        <a href='/'>Membros</a>
      </nav>
      <div className='flex items-center gap-2'>
        <FaUserCircle color='#dc2626' size={28} />
        <span className='text-red-600'>Fazer login</span>
      </div>
    </div>
  )
}
