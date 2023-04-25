"use client"

import { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

interface FormData {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  phone_number: string;
  message: string;
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [processing, setProcessing] = useState(false)
  const [invalid, setInvalid] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    phone_number: '',
    message: '',
  })

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function validateInputs() {
    const Inputs: (keyof FormData)[] = ['first_name', 'last_name', 'email', 'message']
    return Inputs.every((input: keyof FormData) => formData[input])
  }

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!validateInputs()) {
      setInvalid(true)
      return
    }

    setProcessing(true)

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current as string | HTMLFormElement,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    ).then(() => {
      toast.success('Message sent successfully!')
      setFormData({
        first_name: '',
        last_name: '',
        company: '',
        email: '',
        phone_number: '',
        message: '',
      })
      setProcessing(false)
    }, () => {
      toast.error('Something went wrong, please try again later.')
      setProcessing(false)
    });
  };

  return (
    <>
      <Toaster position='top-right' />
      <div className="mt-32 mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact me</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          I usually respond within 24-48 hours.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">

        {invalid && (
          <p className="text-red-500 text-sm font-semibold mb-4">
            Please fill out all required fields.
          </p>
        )}

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name*
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first_name"
                id="first-name"
                autoComplete="given-name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name*
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last_name"
                id="last-name"
                autoComplete="family-name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email*
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phone_number"
                id="phone-number"
                autoComplete="tel"
                value={formData.phone_number}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message*
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={processing}
            className="block w-full disabled:bg-opacity-60 disabled:cursor-wait rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </>
  )
}
