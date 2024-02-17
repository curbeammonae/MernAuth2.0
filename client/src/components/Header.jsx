import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
       {/*will send user to localhost:4242/  */}
        <Link to ='/'>  
        <h1 className='font-bold'>Auth App</h1>
        </Link>

        <ul className='flex gap-4'>
        {/*will send user to localhost:4242/home  */}
          <Link to='/home'>
          <li>Home</li>
          </Link>
          {/*will send user to localhost:4242/about  */}
          <Link to='/about'>
          <li>About</li>
          </Link>
      {/*will send user to localhost:4242/signup  */}
          <Link to='/signin'>
          <li>Sign in</li>

          </Link>
        </ul>
        </div>

    </div>
  )
}
