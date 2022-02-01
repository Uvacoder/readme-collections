import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <a
          href="https://twitter.com/AlecCam43544378"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        <a
          href="https://github.com/uvacoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </footer>
    )
  }
}

export default Footer
