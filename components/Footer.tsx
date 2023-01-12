import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Footer.module.scss'

const contactsInfo =[
  {id:1, path:'tel: +380967181951', text:'+380967181951', src: '/Telegram.png'},
  {id:2, path:'tel: +380967181951', text:'+380967181951', src: '/Viber.png'},
  {id:3, path:'https://uk-ua.facebook.com/', text:'Facebook', src: '/Facebook.png'},
  {id:4, path:'https://www.instagram.com/', text:'Instagram', src: '/Instagram.png'},
  {id:5, path:'https://www.ukr.net/ua/', text:'Email', src: '/Email.png'},
  {id:6, path:'https://twitter.com/?lang=uk', text:'Twitter', src: '/Twitter.png'},
];

const Footer = () => (
  <footer className={styles.footer}>
    {/* <Link href='/'>
      <Image src='/logo.png' width={160} height={80} alt='Логотип'/>
    </Link> */}
    <div className={styles.contacts}>
    {contactsInfo.map(({id, path, text, src})=>
    <Link className={styles.link} key={id} href={path}>
      <Image src={src} width={30} height={30} alt='Логотип'/>
      <span className={styles.text}>{text}</span>
    </Link>)}
    </div>    
  </footer>
);

export default Footer;
