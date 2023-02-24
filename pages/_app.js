import '../styles/global.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

const App = ({Component, pageProps}) => {
  const router = useRouter()
  console.log(router.pathname)

  return (
    <>
      <div>
        <h1>Our site</h1>
        <nav className='header-nav'>
          <ul>
            <li>
              <Link className={router.pathname == '/' ? 'active' : ''} href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == '/about' ? 'active' : ''}
                href='/about'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == '/blog' ? 'active' : ''}
                href='/blog'
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p>Header</p>
      <Component {...pageProps} />
      <p>Footer</p>
    </>
  )
}

export default App
