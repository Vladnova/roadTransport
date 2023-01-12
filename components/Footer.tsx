import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <Link href='/'>
      <Image src='/logo.png' width={160} height={80} alt='Логотип'/>
    </Link>
    <div className={styles.contacts}>
    <Link href='tel: +380967181951'>
      <Image src='/Telegram.png' width={30} height={30} alt='Логотип'/>
      <span>+380967181951</span>
    </Link>
    <Link href='tel: +380967181951'>
      <Image src='/Viber.png' width={30} height={30} alt='Логотип'/>
      <span>+380967181951</span>
    </Link>
    <Link href='https://uk-ua.facebook.com/'>
      <Image src='/Facebook.png' width={30} height={30} alt='Логотип'/> 
      <span>Facebook</span>
    </Link>
    <Link href='https://www.instagram.com/'>
      <Image src='/Instagram.png' width={30} height={30} alt='Логотип'/>
      <span>Instagram</span>
    </Link>
    <Link href=''>
      <Image src='/Email.png' width={30} height={30} alt='Логотип'/>
      <span>Email</span>
    </Link>
    <Link href='https://twitter.com/?lang=uk'>
      <Image src='/Twitter.png' width={30} height={30} alt='Логотип'/>
      <span>Twitter</span>
    </Link>      
    </div>    
  </footer>
);

export default Footer;
