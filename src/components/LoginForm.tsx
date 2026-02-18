'use client';

import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Link from 'next/link';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[400px] space-y-6">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-primary/20 p-1.5 rounded-lg text-primary">
            {/* Placeholder logo icon if no image provided */}
            <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center font-bold text-xs ring-1 ring-primary/50">
              G11
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight">
            GADO11
            <span className="font-normal text-xs ml-1 bg-surface-light px-1.5 py-0.5 rounded text-white/50 tracking-wider">
              AGRONEGÓCIO
            </span>
          </span>
        </div>
        <h2 className="text-gray-400 text-sm">Bem-vindo de volta, parceiro.</h2>
      </div>

      <div className="space-y-5">
        <Input
          id="email"
          type="email"
          label="E-Mail Corporativo"
          placeholder="gestor@confinamento.com.br"
          icon={<Mail size={18} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          label="Senha de Acesso"
          placeholder="••••••••••••"
          icon={<Lock size={18} />}
          rightIcon={showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          onRightIconClick={() => setShowPassword(!showPassword)}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="bg-surface-light/50 border border-border rounded-lg p-4 flex items-start gap-3">
        <div className="text-primary mt-0.5 drop-shadow-[0_0_8px_rgba(19,236,91,0.5)]">
          <ShieldCheck size={20} fill="#13ec5b" className="text-black" />
        </div>
        <div>
          <h4 className="text-xs font-bold text-white">
            Autenticação em Duas Etapas (MFA)
          </h4>
          <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
            Após inserir sua senha, será solicitado um código de verificação
            enviado ao seu dispositivo cadastrado.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer group select-none">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-600 bg-surface-light text-primary focus:ring-primary focus:ring-offset-background checked:bg-primary checked:border-primary"
          />
          <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
            Lembrar neste dispositivo
          </span>
        </label>
        <Link
          href="#"
          className="text-sm font-bold text-primary hover:text-primary-hover transition-colors"
        >
          Esqueceu a senha?
        </Link>
      </div>

      <Button type="submit" className="w-full text-base" isLoading={isLoading}>
        Acessar Plataforma
      </Button>

      <div className="pt-8 border-t border-border space-y-4 mt-8">
        <p className="text-xs text-center text-gray-500">
          Não é um parceiro Gado 11?{' '}
          <a href="#" className="text-white font-bold hover:underline">
            Solicitar credenciamento
          </a>
        </p>
        <div className="flex justify-center gap-4 text-[10px] text-gray-600 uppercase tracking-wider font-bold">
          <a href="#" className="hover:text-gray-400 transition-colors">
            Privacidade
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Termos de Uso
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Segurança
          </a>
        </div>
        <p className="text-[10px] text-center text-gray-700">
          © 2023 Gado 11 Agronegócio S.A. Todos os direitos reservados.
        </p>
      </div>
    </form>
  );
}
