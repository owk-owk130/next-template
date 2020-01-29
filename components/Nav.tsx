import React from 'react'
import Link from 'next/link'
import { css } from 'emotion'

interface link {
    href: string
    label: string
    key: string | null
}

const links :link[] = [
  { href: 'https://zeit.co/now', label: 'ZEIT', key: '' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub', key: '' }
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})

const nav = css({
    textAlign: 'center',
    margin: '0',
    fontFamily: '-apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif',
    'ul': {
        display: 'flex',
        justifyContent: 'space-between'
    },
    'nav > ul': {
        padding: '4px 16px'
    },
    'li': {
        display: 'flex',
        padding: '6px 8px'
    },
    'a': {
        color: '#067df7',
        textDecoration: 'none',
        fontSize: '13px'
    }
})

const Nav = () => (
  <nav className={nav}>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
