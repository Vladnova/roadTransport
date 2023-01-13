import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import * as Icon from 'react-bootstrap-icons';

const contactsInfo = [
  // {
  //   id: 1,
  //   path: 'tel: +380967181951',

  //   src: '/Telegram.png',
  // },
  // {
  //   id: 2,
  //   path: 'tel: +380967181951',

  //   src: '/Viber.png',
  // },
  {
    id: 3,
    path: 'https://uk-ua.facebook.com/',

    src: '/Facebook.png',
  },
  {
    id: 4,
    path: 'https://www.instagram.com/',

    src: '/Instagram.png',
  },
  // { id: 5, path: 'https://www.ukr.net/ua/', src: '/Email.png' },
  {
    id: 6,
    path: 'https://twitter.com/?lang=uk',
    src: '/Twitter.png',
  },
];

const Footer = () => (
  <footer className={styles.footer}>
    <Link href="/">
      <Image src="/logo.png" width={160} height={80} alt="Логотип" />
    </Link>
    <div>
      <h4 className={styles.text}>Контактна інформація</h4>
      <address className={styles.address}>
        <Icon.Telephone color="red" size={15} />
        <a className={styles.contacts} href="tel:+380964585952">
          (096)-45-85-952
        </a>
        <Icon.EnvelopeOpen color="red" size={15} />
        <a className={styles.contacts} href="mailto:info-test@ukr.net">
          info-test@ukr.net
        </a>
        <Icon.HouseAdd color="red" size={15} />
        <a
          className={styles.contacts}
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D0%BE%D0%B3%D0%B8,+54%D0%90/@50.4566391,30.4376115,17z/data=!4m6!3m5!1s0x40d4cc30c38ac66f:0x10871f6d7be2d514!4b1!8m2!3d50.4566391!4d30.4398002"
        >
          м. Київ проспект Перемоги 54а
        </a>
      </address>
    </div>
    <div>
      <h4 className={styles.text}>Наші соцмережі</h4>
      <ul className={styles.socials}>
        {contactsInfo.map(({ id, path, src }) => (
          <li key={id}>
            <Link className={styles.icon} href={path} target="_blank">
              <Image src={src} width={30} height={30} alt="Логотип" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
