import Header from './header';
import logo from '@/public/logo.png';
import { BookOpenText, Contact, Home, NotebookPen } from 'lucide-react';

const mainMenu = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },
  {
    title: 'Menu',
    href: '/menu',
    icon: NotebookPen,
  },
  {
    title: 'About Us',
    href: '/about',
    icon: BookOpenText,
  },
  {
    title: 'Contact Us',
    href: '/contact',
    icon: Contact,
  },
];

function Navigation() {
  return (
    <Header
      title="Delite UI"
      rootPath="/"
      logo={logo}
      mainMenu={mainMenu}
      mobileFooter="&copy; 2025. All Rights Reserved"
    />
  );
}
export default Navigation;
