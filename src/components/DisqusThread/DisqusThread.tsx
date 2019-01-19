import React from 'react'

declare global {
  interface Window {
    DISQUS: any
  }
}

function renderDisqus() {
  if (window.DISQUS === undefined) {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://codemanufacturecom.disqus.com/embed.js'
    script.setAttribute('data-timestamp', `${new Date()}`)
    ;(document.head || document.body).appendChild(script)
  } else {
    window.DISQUS.reset({ reload: true })
  }
}

class DisqusThread extends React.Component {
  componentDidMount() {
    renderDisqus()
  }

  componentDidUpdate() {
    renderDisqus()
  }

  render() {
    const { ...other } = this.props

    return <div {...other} id="disqus_thread" />
  }
}

export default DisqusThread
