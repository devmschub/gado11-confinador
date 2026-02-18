import Image from 'next/image';
import { LoginForm } from '@/components/LoginForm';
import { StatCard } from '@/components/ui/StatCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full bg-surface-dark overflow-hidden font-manrope">
      {/* Left Side - Hero */}
      <div className="hidden lg:flex w-full lg:w-1/2 relative flex-col justify-end p-12 xl:p-20 overflow-hidden bg-surface-dark border-r border-surface-light/10">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10" />
          {/* Placeholder for the dark textured background */}
          <div className="absolute inset-0 bg-surface-dark z-0" />
          <Image
            src="https://images.unsplash.com/photo-1596733430502-d73d09029748?q=80&w=2669&auto=format&fit=crop"
            alt="Cattle in barn"
            fill
            className="object-cover opacity-60 grayscale-10 contrast-125"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 space-y-10 w-full max-w-2xl">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(19,236,91,0.5)]"></div>
              <span className="text-primary font-bold tracking-wider text-xs uppercase drop-shadow-[0_0_5px_rgba(19,236,91,0.3)]">
                Portal do Confinador
              </span>
            </div>
            <h1 className="text-4xl xl:text-5xl font-extrabold leading-[1.1] text-white tracking-tight">
              Sua eficiência operacional,
              <br />
              <span className="text-primary drop-shadow-[0_0_15px_rgba(19,236,91,0.15)]">
                financiada pela Gado 11
              </span>
            </h1>
            <p className="text-gray-400 text-base xl:text-lg max-w-lg leading-relaxed font-medium">
              Acesse sua área exclusiva para gestão de compras coletivas,
              acompanhamento de contratos futuros e linhas de crédito
              especializadas.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 xl:gap-12 border-t border-surface-light pt-8">
            <StatCard value="+150" label="Confinamentos Ativos" />
            <StatCard value="R$ 200mi" label="Em Crédito Liberado" />
            <StatCard value="100%" label="Segurança Digital" />
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative bg-surface-dark">
        {/* Mobile Background Gradient */}
        <div className="absolute inset-0 lg:hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-linear-to-b from-surface-dark via-surface-dark to-black opacity-90" />
          <Image
            src="https://images.unsplash.com/photo-1545652966-231121111111?q=80&w=2669&auto=format&fit=crop"
            alt="Background Mobile"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="relative z-10 w-full max-w-md">
          <LoginForm />
        </div>

        <div className="absolute top-8 right-8 hidden lg:flex items-center gap-4 text-xs font-medium text-gray-500">
          <span>Precisa de ajuda?</span>
          <Link
            href="#"
            className="text-primary hover:text-primary-hover font-bold transition-colors"
          >
            Suporte Técnico
          </Link>
        </div>
      </div>
    </main>
  );
}
