import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import profile from '../../public/images/profile.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='w-full grid grid-cols-2 text-gray-900'>
        <div className='col-span-1 grid items-center justify-center'>
          <div className='font-semibold text-3xl tracking-widest'>
            <div className='text-xl py-6'>Hello</div>
            <div className='uppercase'>
            i&apos;m <a className='text-red-600'>Wildan</a> taufik wibowo nasution
            </div>
            <p className='text-lg'>I&apos;am a student in university of north sumatera, i like programming and i want become a professional in programing so i keep learning and never quit!.</p>
          </div>
        </div>
        <div className='col-span-1 grid place-content-center'>
          <Image width={600} src={profile} alt="profile"/>
        </div>
      </div>
    </main>
  )
}
