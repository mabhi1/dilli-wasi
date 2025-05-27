import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { LucideProps, Menu } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface HeaderProps {
  title: string;
  mobileFooter: string;
  logo: StaticImageData;
  rootPath: string;
  mobileMenu?: {
    title: string;
    items: {
      title: string;
      href: string;
    }[];
  }[];
  mainMenu: {
    title: string;
    href: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  }[];
}

function Header({ mobileMenu, mainMenu, rootPath, logo, title, mobileFooter }: HeaderProps) {
  return (
    <header className="bg-primary w-full border-b">
      <div className="mx-auto hidden max-w-[100rem] items-center justify-between gap-8 px-4 py-2 md:flex md:px-10">
        <Link href={rootPath} className="flex items-center gap-2">
          <Image src={logo} alt={title} width={464} height={132} priority className="h-14 w-auto" />
        </Link>
        <ul className="flex items-center gap-10">
          {mainMenu.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex items-center gap-1 text-base font-medium text-white/90 hover:text-white"
              >
                <item.icon className="aspect-square w-4" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row-reverse items-center justify-between gap-3 p-3 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white [&_svg:not([class*='size-'])]:size-6"
            >
              <Menu className="aspect-square w-8" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-primary border-primary flex flex-col gap-5 p-0" side="right">
            <SheetHeader className="bg-primary flex-row items-center gap-3 space-y-0">
              <Link href={rootPath} className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt={title}
                  width={464}
                  height={132}
                  priority
                  className="h-14 w-auto"
                />
              </Link>
              <SheetDescription className="hidden">Mobile menu</SheetDescription>
            </SheetHeader>
            <div className="flex-1 space-y-3 px-2">
              <ul className="ml-2 flex flex-col gap-4 text-base text-white">
                {mainMenu.map((item) => (
                  <li key={item.title} className="flex items-center gap-2">
                    <item.icon className="aspect-square w-4" />
                    <SheetClose asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <Separator />
              {mobileMenu && mobileMenu.length > 0 && (
                <div className="space-y-5">
                  {mobileMenu.map((menu) => (
                    <div key={menu.title} className="ml-2 flex flex-col gap-3">
                      <div className="flex items-center gap-2 font-medium">{menu.title}</div>
                      <ul className="flex flex-col gap-3">
                        {menu.items.map((item) => (
                          <li
                            key={item.title}
                            className="flex items-center gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                          >
                            <SheetClose asChild>
                              <Link href={item.href}>{item.title}</Link>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <SheetFooter className="border-t p-4 text-xs text-white">{mobileFooter}</SheetFooter>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Image src={logo} alt={title} width={464} height={132} priority className="h-14 w-auto" />
        </div>
      </div>
    </header>
  );
}
export default Header;
