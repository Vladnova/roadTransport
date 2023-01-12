import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';

const navigations = [
  {id:1, path: '/', title: 'Головна'},
  {id:2, path: '/about', title: 'Про нас'},
  {id:3, path: '/services', title: 'Послуги'},
  {id:4, path: '/contacts', title: 'Контакти'}
]

const Navbar = () => {
  const {pathname} = useRouter();
  return (
  <nav className={styles.wrap}>
    <Link href ='/'>
      <Image src='/logo.png' width={160} height={80} alt='Логотип'/>
    </Link>
    <div className={styles.links}>
      {navigations.map(({id, path, title})=>
        <Link className={styles.nav} legacyBehavior key={id} href={path}>
          <a className={pathname===path?styles.active:undefined }>
            {title}
          </a>
        </Link>
      )}
    </div>
  </nav>
)};

export default Navbar;
