import { FormProvider, useForm } from 'react-hook-form'
import { Form } from './forms'
import {
  FaCalendarAlt,
  FaCity,
  FaPhoneAlt,
  FaRunning,
  FaUserCircle,
} from 'react-icons/fa'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { phoneNumberMask } from '../utils/phone'
import { MdEmail } from 'react-icons/md'

import equipe from '/equipe.webp'
import equipe1 from '/portico_edited.webp'

const createFormSchema = z.object({
  running: z
    .string()
    .nonempty({ message: 'Digite o nome da corrida.' })
    .min(3, { message: 'Digite um nome válido.' }),
  organizer: z
    .string()
    .nonempty({ message: 'Digite seu nome.' })
    .min(3, { message: 'Digite um nome válido.' }),
  city: z
    .string()
    .nonempty({ message: 'Digite onde será a corrida.' })
    .min(3, { message: 'Digite um nome válido.' }),
  date: z.coerce
    .date({
      errorMap: ({ code }, { defaultError }) => {
        if (code === 'invalid_date')
          return { message: 'Digite uma data válida.' }
        return { message: defaultError }
      },
    })
    .refine((date) => date > new Date(), {
      message: 'Evento não pode ser nesta data.',
    }),
  cellphone: z
    .string()
    .nonempty({ message: 'Digite seu telefone.' })
    .min(15, { message: 'Telefone inválido, digite um telefone válido.' }),
  email: z
    .string()
    .nonempty({ message: 'Digite seu email.' })
    .email({ message: 'Email inválido.' }),
})

type CreateFormData = z.infer<typeof createFormSchema>

export function Services() {
  const createForm = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
  })

  const { handleSubmit, setValue, watch } = createForm

  // console.log(createFormSchema)

  const phoneValue = watch('cellphone')

  useEffect(() => {
    setValue('cellphone', phoneNumberMask(phoneValue))
  }, [phoneValue, setValue])

  function newForm(data: CreateFormData) {
    console.log(JSON.stringify(data, null, 2))
    // console.log('Hello Running')
  }

  return (
    <div className='flex flex-col items-center justify-center gap-6 bg-image-patter bg-zinc-700 p-4'>
      <h1 className='p-10 font-extrabold text-6xl text-red-600 uppercase'>
        organize sua corrida conosco!
      </h1>
      <div className='grid w-full grid-cols-3 justify-center gap-4 pt-5'>
        <div className='col-span-2 flex w-full flex-col items-start justify-center px-10'>
          <div className='flex w-full justify-evenly'>
            <div className='flex w-full items-start justify-center'>
              <img src={equipe1} alt='equipe' className='rounded-sm' />
            </div>
            <div className='flex w-full flex-col gap-4 py-0 font-semibold text-2xl text-red-600'>
              <span className='flex rounded-sm bg-slate-300 p-2'>
                Cronometragem eletronica através de Chip de ultima geração.
              </span>
              <span className='flex rounded-sm bg-slate-300 p-2'>
                {' '}
                - Resultados rapidos.
              </span>
              <span className='flex rounded-sm bg-slate-300 p-2'>
                {' '}
                - Precisos.
              </span>
              <span className='flex rounded-sm bg-slate-300 p-2'>
                {' '}
                - E em tempo real.
              </span>
            </div>
          </div>

          <div className='flex w-full justify-evenly pt-10'>
            <div className='flex h-96 w-full flex-col justify-center gap-4 py-10 font-semibold text-2xl text-red-600'>
              <span className='flex rounded-sm bg-slate-300 p-2'>
                Uma equipe preparada para fazer de seu evento o melhor!.
              </span>
            </div>
            <div className='flex w-full items-center justify-center'>
              <img src={equipe} alt='equipe' className='rounded-sm' />
            </div>
          </div>
        </div>

        <div>
          <FormProvider {...createForm}>
            <form
              id='send'
              onSubmit={handleSubmit(newForm)}
              className='flex w-full max-w-md flex-col gap-3 rounded-md bg-white/30 p-2 backdrop-blur-sm'
            >
              <Form.Field>
                <Form.Prefix>
                  <FaRunning className='size-5' />
                </Form.Prefix>
                <Form.Input
                  type='name'
                  name='running'
                  placeholder='Nome da Corrida'
                />
              </Form.Field>
              <Form.ErrorMessage field='running' />

              <Form.Field>
                <Form.Prefix>
                  <FaUserCircle className='size-5' />
                </Form.Prefix>
                <Form.Input
                  type='name'
                  name='organizer'
                  placeholder='Nome do organizador'
                />
              </Form.Field>
              <Form.ErrorMessage field='organizer' />

              <Form.Field>
                <Form.Prefix>
                  <FaCity className='size-5' />
                </Form.Prefix>
                <Form.Input
                  type='name'
                  name='city'
                  placeholder='Cidade onde será realizado'
                />
              </Form.Field>
              <Form.ErrorMessage field='city' />

              <Form.Field>
                <Form.Prefix>
                  <FaCalendarAlt className='size-5' />
                </Form.Prefix>
                <Form.Input
                  type='date'
                  name='date'
                  placeholder='Data em que será realizado o evento'
                />
              </Form.Field>
              <Form.ErrorMessage field='date' />

              <Form.Field>
                <Form.Prefix>
                  <FaPhoneAlt className='size-5' />
                </Form.Prefix>
                <Form.Input
                  type='name'
                  name='cellphone'
                  placeholder='Celular com DDD'
                />
              </Form.Field>
              <Form.ErrorMessage field='cellphone' />

              <Form.Field>
                <Form.Prefix>
                  <MdEmail className='size-5' />
                </Form.Prefix>
                <Form.Input type='name' name='email' placeholder='Email' />
              </Form.Field>
              <Form.ErrorMessage field='email' />
            </form>
            <button
              type='submit'
              form='send'
              className='py2 mt-4 flex items-center justify-center gap-2 rounded-md border border-red-500 bg-red-600 px-8 py-2 font-semibold'
            >
              Enviar
            </button>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}
