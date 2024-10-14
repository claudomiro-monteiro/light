import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export function Footer() {
  return (
    <div className='flex flex-col bg-black p-10'>
      <div className='flex flex-col items-center gap-4 text-white'>
        <img src='/logo.webp' alt='logomarca' />
        <div className='flex gap-2'>
          <span>
            <FaWhatsapp size={28} />
          </span>
          <span>
            <FaInstagram size={28} />
          </span>
        </div>
        <span>Ligeirinho Sports</span>
        <span>cnpj 50.737.480.0001/46</span>
        <span> todos os direitos reservados | {new Date().getFullYear()}</span>
      </div>
    </div>
  )
}
