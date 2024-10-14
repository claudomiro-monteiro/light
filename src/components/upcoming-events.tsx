import picture from '/picture.jpg'
import qrcode from '/qrcode.jpg'

export function UpcomingEvents() {
  return (
    <div className='flex flex-col items-center justify-center bg-zinc-950 py-20'>
      <div className='flex flex-col gap-32 text-center'>
        <h1 className='font-bold text-7xl text-white uppercase'>
          próximos eventos
        </h1>
        <span className='mb-12 text-3xl text-red-500'>
          Não há eventos no momento
        </span>
      </div>
      <div className='relative flex items-center justify-center'>
        <img src={picture} alt='fotografo' width='100%' />
        <div className='absolute flex w-full flex-col items-center justify-center'>
          <span className='text-center font-bold text-6xl text-white uppercase'>
            fotos
          </span>
          <img src={qrcode} alt='qr code' width={220} className='flex ' />
          <span className='mt-1 rounded-md bg-zinc-500 px-2 py-1 text-center font-semibold text-white'>
            1º Corrida Quadrangular de Canas-SP
          </span>
        </div>
      </div>
    </div>
  )
}
