import * as React from 'react'
import { Link, Script } from 'gatsby'

const newsletterOptions = {
  settings: {
    after_subscribe: {
      action: 'message',
      success_message:
        'Success! Now check your email to confirm your subscription.',
      redirect_url: '',
    },
    analytics: {
      google: null,
      fathom: null,
      facebook: null,
      segment: null,
      pinterest: null,
      sparkloop: null,
      googletagmanager: null,
    },
    modal: {
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15,
    },
    powered_by: {
      show: false,
      url: 'https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic',
    },
    recaptcha: { enabled: true },
    return_visitor: { action: 'show', custom_content: '' },
    slide_in: {
      display_in: 'bottom_right',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15,
    },
    sticky_bar: {
      display_in: 'top',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15,
    },
  },
  version: '5',
}

export default function Newsletter() {
  return (
    <div tw="bg-sky-800">
      <div tw="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
        <div tw="lg:w-0 lg:flex-1">
          <h2
            tw="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Subscribe to our newsletter
          </h2>
          <p tw="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            The latest news, articles, and resources, sent to your inbox
            monthly.
          </p>
        </div>
        <div tw="mt-8 lg:mt-0 lg:ml-8">
          <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="idle" />
          <form
            tw="flex flex-1 w-full"
            method="post"
            action="https://app.convertkit.com/forms/4007854/subscriptions"
            data-sv-form="4007854"
            data-uid="a7732813ca"
            data-format="inline"
            data-version="5"
            data-options={JSON.stringify(newsletterOptions)}
          >
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            ></ul>
            <label htmlFor="email-address" tw="sr-only">
              Email address
            </label>
            <div
              data-element="fields"
              data-stacked="false"
              tw="flex flex-col md:flex-row w-full"
            >
              <input
                id="email-address"
                name="email_address"
                type="email"
                autoComplete="email"
                aria-label="Email address"
                required
                tw="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Enter your email"
              />
              {/*<div tw="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">*/}
              <button
                data-element="submit"
                type="submit"
                tw="mt-3 md:mt-0 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 flex w-full items-center justify-center rounded-md border border-transparent bg-sky-100 text-base px-5 py-3 font-medium text-sky-700 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <div className="formkit-spinner"></div>
                Subscribe
              </button>
              {/*</div>*/}
            </div>
          </form>
          <p tw="mt-3 text-sm text-gray-300">
            We care about the protection of your data. Read our{' '}
            <Link to="/privacy">
              <span tw="font-medium text-white underline">Privacy Policy.</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
