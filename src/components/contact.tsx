import { FormProvider, useForm } from 'react-hook-form'
import { Form } from './forms'
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaPhoneAlt,
  FaUserCircle,
} from 'react-icons/fa'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MdSubject } from 'react-icons/md'
import { useEffect } from 'react'
import { phoneNumberMask } from '../utils/phone'

const createFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Digite seu nome.' })
    .min(3, { message: 'Digite um nome válido' }),
  email: z
    .string()
    .nonempty({ message: 'Digite seu email.' })
    .min(3, { message: 'Digite um email válido.' }),
  cellphone: z
    .string()
    .nonempty({ message: 'Digite seu celular.' })
    .min(15, { message: 'Digite um celular válido.' }),
  subject: z
    .string()
    .nonempty({ message: 'Digite um assunto.' })
    .min(10, { message: 'O assunto deve ter no mínimo 10 caracteres.' }),
  message: z
    .string()
    .nonempty({ message: 'Deixe sua mensagem.' })
    .min(3, { message: 'Sua mensagem deve ter no mínimo 10 caracteres.' }),
})

type CreateFormData = z.infer<typeof createFormSchema>

export function ContactUS() {
  const createForm = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
  })

  const { handleSubmit, setValue, watch } = createForm

  const phoneValue = watch('cellphone')

  useEffect(() => {
    setValue('cellphone', phoneNumberMask(phoneValue))
  }, [phoneValue, setValue])

  function newContact(data: CreateFormData) {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <div className='flex min-h-screen w-full flex-col justify-center'>
      <h1 className='w-full py-10 text-center text-3xl'>Contato</h1>

      <div className='flex flex-col items-center'>
        <FormProvider {...createForm}>
          <form
            id='sendcontact'
            onSubmit={handleSubmit(newContact)}
            className='flex w-2/3 flex-col gap-4'
          >
            <Form.Field>
              <Form.Prefix>
                <FaUserCircle className='size-5' />
              </Form.Prefix>
              <Form.Input
                type='name'
                name='name'
                placeholder='Digite seu nome.'
              />
            </Form.Field>
            <Form.ErrorMessage field='name' />
            <Form.Field>
              <Form.Prefix>
                <FaEnvelope className='size-5' />
              </Form.Prefix>
              <Form.Input
                type='email'
                name='email'
                placeholder='Digite seu email.'
              />
            </Form.Field>
            <Form.ErrorMessage field='email' />
            <Form.Field>
              <Form.Prefix>
                <FaPhoneAlt className='size-5' />
              </Form.Prefix>
              <Form.Input
                type='cellphone'
                name='cellphone'
                placeholder='Digite seu celular.'
              />
            </Form.Field>
            <Form.ErrorMessage field='cellphone' />
            <Form.Field>
              <Form.Prefix>
                <MdSubject className='size-5' />
              </Form.Prefix>
              <Form.Input
                type='subject'
                name='subject'
                placeholder='Digite o assunto.'
              />
            </Form.Field>
            <Form.ErrorMessage field='subject' />
            <Form.Field>
              <Form.Prefix>
                <FaEnvelopeOpen className='size-5' />
              </Form.Prefix>
              <Form.Input
                type='message'
                name='message'
                placeholder='Digite sua mensagem.'
              />
            </Form.Field>
            <Form.ErrorMessage field='message' />
          </form>

          <button
            type='submit'
            form='sendcontact'
            className='py2 mt-4 flex items-center justify-center gap-2 rounded-md border border-red-500 bg-red-600 px-8 py-2 font-semibold text-white'
          >
            Enviar
          </button>
        </FormProvider>
      </div>
    </div>
  )
}
