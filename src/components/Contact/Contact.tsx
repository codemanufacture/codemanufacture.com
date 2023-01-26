import * as React from 'react'
// tslint:disable-next-line:no-submodule-imports
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
// tslint:disable-next-line:no-submodule-imports
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Contact = () => {
  const [contact, setContact] = React.useState({
    name: '',
    email: '',
    subject: 'Contact Form',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: '196e8d30-406d-4887-a8a6-8828ee851c2e',
  })

  const [response, setResponse] = React.useState({
    type: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setContact({ ...contact, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      })

      const json = await res.json()

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.',
        })
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        })
      }
    } catch (e) {
      console.log('An error occurred', e)
      setResponse({
        type: 'error',
        message: 'An error occurred while submitting the form',
      })
    }
  }

  return (
    <div tw="relative bg-white">
      <div tw="absolute inset-0">
        <div tw="absolute inset-y-0 left-0 w-1/2" />
      </div>
      <div tw="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div tw="py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div tw="mx-auto max-w-lg">
            <h2 tw="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Let's work together
            </h2>
            <p tw="mt-3 text-lg leading-6 text-gray-500">
              We'd love to hear from you! Send us a message using the form or
              email us.
            </p>
            <dl tw="mt-8 text-base text-gray-500">
              <div tw="mt-6">
                <dt tw="sr-only">Phone number</dt>
                <dd tw="flex">
                  <PhoneIcon
                    tw="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span tw="ml-3">+39 345 523 5101</span>
                </dd>
              </div>
              <div tw="mt-3">
                <dt tw="sr-only">Email</dt>
                <dd tw="flex">
                  <EnvelopeIcon
                    tw="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span tw="ml-3">
                    <a href="mailto:contact@codemanufacture.com">
                      contact@codemanufacture.com
                    </a>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div tw="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div tw="mx-auto max-w-lg lg:max-w-none">
            {response?.type === 'success' && (
              <div tw="rounded-md bg-green-50 p-4 mb-6">
                <div tw="flex">
                  <div tw="flex-shrink-0">
                    <CheckCircleIcon
                      tw="h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div tw="ml-3">
                    <h3 tw="text-sm font-medium text-green-800">
                      {response.message}
                    </h3>
                  </div>
                </div>
              </div>
            )}
            <form
              action="https://api.staticforms.xyz/submit"
              method="post"
              onSubmit={handleSubmit}
              tw="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="full-name" tw="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="full-name"
                  required={true}
                  autoComplete="name"
                  tw="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Full name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" tw="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required={true}
                  type="email"
                  onChange={handleChange}
                  autoComplete="email"
                  tw="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" tw="sr-only">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={handleChange}
                  autoComplete="tel"
                  tw="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" tw="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required={true}
                  rows={4}
                  tw="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Message"
                  onChange={handleChange}
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  tw="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
              <input
                type="text"
                tw="hidden"
                name="honeypot"
                defaultValue={''}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
