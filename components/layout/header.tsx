import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-primary">
      <div className="mx-auto flex max-w-[90rem] justify-between px-10">
        <div>
          <Image
            src="/logo.png"
            alt="Dilliwasi logo"
            width={666}
            height={375}
            className="h-24 w-auto"
          />
        </div>
        <ul className="hidden items-center gap-8 text-base font-medium text-white md:flex">
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
