import { Button } from '@/components/ui/button';
import { Beer } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mt-20 flex items-center justify-center gap-20 px-52">
      <div className="h-full w-fit space-y-10">
        <h1 className="text-primary flex items-end gap-2 text-base font-medium">
          <span>Welcome</span> <Beer />
        </h1>
        <div className="text-5xl">A Restaurant by the Dilliwasi Group.</div>
        <div>
          At Dilliwasi Fine Dine Restaurant & Rooftop Terrace, we take pride in delivering a fine
          dine experience that upholds our tradition of quality and authenticity. Our specialization
          in pure vegetarian cuisine sets us apart, featuring an extensive menu exclusively prepared
          in desi ghee. Diners can indulge in a rich array of traditional Indian dishes, as well as
          select vegetarian Chinese, Continental, and Italian offerings. Each dish is crafted to
          cater to diverse palates while maintaining the highest standards of taste and quality.
        </div>
        <div className="flex gap-5">
          <Button>Our Menu</Button>
          <Button variant="secondary">Make a reservation</Button>
        </div>
      </div>
      <div className="ml-auto flex h-full items-center justify-end">
        <Image src="/momo.png" alt="Hero" width={1116} height={1098} />
      </div>
    </div>
  );
}
