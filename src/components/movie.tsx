export function Movie() {
  return (
    <div className='relative flex w-full'>
      <video
        width='1368'
        height='480'
        preload='auto'
        autoPlay
        muted
        loop
        className='h-80 object-cover'
      >
        <source src='/run.mp4' type='video/mp4' />
      </video>
      <h1 className='absolute flex h-full w-full items-center justify-center px-52 text-center font-extrabold text-7xl text-white uppercase drop-shadow-lg'>
        as melhores corridas estão aqui!
      </h1>
    </div>
  )
}
