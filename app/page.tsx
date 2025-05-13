import { Button } from '@/components/ui/button';
import { Beer } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-5rem)] items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2070"
          alt="Indian Restaurant Background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="from-background via-background/90 to-background/70 absolute inset-0 bg-gradient-to-r" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl space-y-8 py-12">
        <h1 className="text-primary flex items-center gap-3 text-lg font-semibold tracking-wide">
          <span>Welcome</span> <Beer className="h-5 w-5" />
        </h1>
        <div className="space-y-6">
          <h2 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
            A Restaurant by the <span className="text-primary">Dilliwasi</span> Group
          </h2>
          <p className="text-lg leading-relaxed">
            At Dilliwasi Fine Dine Restaurant & Rooftop Terrace, we take pride in delivering a fine
            dine experience that upholds our tradition of quality and authenticity. Our
            specialization in pure vegetarian cuisine sets us apart, featuring an extensive menu
            exclusively prepared in desi ghee. Diners can indulge in a rich array of traditional
            Indian dishes, as well as select vegetarian Chinese, Continental, and Italian offerings.
            Each dish is crafted to cater to diverse palates while maintaining the highest standards
            of taste and quality.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 text-base">
            Our Menu
          </Button>
          <Button size="lg" variant="secondary" className="px-8 text-base">
            Make a reservation
          </Button>
        </div>
      </div>
      <div className="relative z-10 hidden h-[80vh] w-[45%] lg:block">
        <div className="relative h-full w-full transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src="/momo.png"
            alt="Delicious Momos - Dilliwasi Special"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            quality={90}
            className="animate-float object-contain object-right drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
