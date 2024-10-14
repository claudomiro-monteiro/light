import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import img1 from '/circuito-aguia.jpg'
import img2 from '/anuncie-aqui.jpg'

// const animation = { duration: 5000, easing: (t: number) => t }

export function Carousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )
  return (
    <div ref={sliderRef} className='keen-slider bg-zinc-800'>
      <div className='keen-slider__slide number-slide1 flex justify-center'>
        <img src={img1} alt='imagem 1' width='100%' />
      </div>
      <div className='keen-slider__slide number-slide2 flex justify-center'>
        <img src={img2} alt='imagem 2' />
      </div>
    </div>
  )
}
