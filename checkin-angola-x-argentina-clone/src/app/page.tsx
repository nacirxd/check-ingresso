import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, CheckCircle2, Zap, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1d1e1f] text-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#121314]/90 backdrop-blur border-b border-white/5">
        <div className="container flex h-16 items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/521238399/1477757196.png"
              alt="Check-in.ao"
              priority
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex ml-6 text-sm/none gap-6">
            <Link href="#" className="hover:text-[#3eb0d0] transition-colors">
              Início
            </Link>
            <Link href="#" className="hover:text-[#3eb0d0] transition-colors">
              Destaques
            </Link>
            <Link href="#" className="hover:text-[#3eb0d0] transition-colors">
              Eventos
            </Link>
            <Link href="#" className="hover:text-[#3eb0d0] transition-colors">
              Marketplace
            </Link>
            <Link
              href="https://leads.check-in.ao/pedir-orcamento"
              target="_blank"
              className="hover:text-[#3eb0d0] transition-colors"
            >
              Promotores
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <Link
              href="#"
              className="relative inline-flex items-center justify-center text-[#3eb0d0]"
              aria-label="Carrinho"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#3eb0d0] px-1 text-[10px] font-semibold text-black">
                0
              </span>
            </Link>
            <Link
              href="/entrar"
              aria-label="Perfil"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Title + Date */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-6">
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="flex items-center justify-between">
                <div>
                  <span className="block text-sm text-white/70">Desporto</span>
                  <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    Angola x Argentina
                  </h1>
                </div>
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center rounded-md bg-white/5 border border-white/10 w-16 h-16 text-center leading-none">
                    <div className="text-xl font-bold -mb-1">14</div>
                    <div className="text-[10px] uppercase tracking-wide text-white/80">
                      novembro
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Image + short info */}
            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden shadow-lg ring-1 ring-white/10">
                <Image
                  src="https://ext.same-assets.com/521238399/4003538409.jpeg"
                  alt="Angola x Argentina"
                  width={912}
                  height={912}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Short info */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="rounded-md border border-white/10 p-3">
                  <div className="text-[11px] uppercase tracking-wider text-white/70 font-semibold">
                    Duração
                  </div>
                  <div className="mt-1">180 Minutos</div>
                </div>
                <div className="rounded-md border border-white/10 p-3">
                  <div className="text-[11px] uppercase tracking-wider text-white/70 font-semibold">
                    Classificação
                  </div>
                  <div className="mt-1">A</div>
                </div>
                <div className="rounded-md border border-white/10 p-3">
                  <div className="text-[11px] uppercase tracking-wider text-white/70 font-semibold">
                    Promotor
                  </div>
                  <div className="mt-1">FAF</div>
                </div>
              </div>
            </div>

            {/* Right: Variants */}
            <div className="lg:col-span-6">
              <section className="space-y-6">
                {/* Bancada Normal */}
                <div className="rounded-lg border border-white/10 bg-[#141516] p-5">
                  <h3 className="text-lg font-semibold">Bancada Normal</h3>
                  <p className="mt-1 text-sm text-white/70">
                    Aproveite o jogo com um preço acessível para toda a família
                  </p>

                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-green-400" /> Vista panorâmica do campo
                    </li>
                    <li className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-green-400" /> Bilhete digital no email
                    </li>
                    <li className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-green-400" /> Acesso facilitado
                    </li>
                  </ul>

                  <div className="mt-6 text-4xl font-extrabold tracking-tight">3500 Kz</div>

                  <a
                    href="https://www.kintu.org/product/534172d6-ca67-44c7-8f70-c5b1a2e98711"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center rounded-md bg-[#e31e24] py-3 text-sm font-semibold tracking-wide hover:brightness-110 transition"
                  >
                    Garantir Ingresso
                  </a>
                  <div className="mt-2 flex items-center gap-2 text-xs text-amber-300">
                    <Zap className="h-3.5 w-3.5" /> Últimas 127 unidades
                  </div>
                </div>

                {/* Área VIP */}
                <div className="relative rounded-lg border border-white/10 bg-[#141516] p-5">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 select-none">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/15">
                      Mais Popular
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold">Área VIP</h3>
                  <p className="mt-1 text-sm text-white/70">
                    Experiência premium com mais conforto e vista privilegiada
                  </p>

                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-green-400" /> Assentos VIP confortáveis
                    </li>
                    <li className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-green-400" /> Vista privilegiada do campo
                    </li>
                    <li className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-green-400" /> Acesso prioritário
                    </li>
                    <li className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-green-400" /> Banheiros exclusivos
                    </li>
                  </ul>

                  <div className="mt-6 text-4xl font-extrabold tracking-tight">8000 Kz</div>

                  <a
                    href="https://www.kintu.org/product/224b0c4f-86d2-40f1-bdab-3596417e9fe0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center rounded-md bg-[#e31e24] py-3 text-sm font-semibold tracking-wide hover:brightness-110 transition"
                  >
                    Garantir Ingresso
                  </a>
                  <div className="mt-2 text-xs text-amber-300">Apenas 47 lugares restantes</div>
                </div>

                {/* Camarote VIP */}
                <div className="rounded-lg border border-white/10 bg-[#141516] p-5">
                  <h3 className="text-lg font-semibold">Camarote VIP</h3>
                  <p className="mt-1 text-sm text-white/70">
                    Luxo total com as melhores comodidades e serviços exclusivos
                  </p>

                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-green-400" /> Área climatizada exclusiva
                    </li>
                    <li className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-green-400" /> Comidas e bebidas incluídas
                    </li>
                    <li className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-green-400" /> Melhor vista do estádio
                    </li>
                    <li className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-green-400" /> Serviço de garçom
                    </li>
                    <li className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-green-400" /> Estacionamento VIP
                    </li>
                  </ul>

                  <div className="mt-6 text-4xl font-extrabold tracking-tight">25 000 Kz</div>
                  <a
                    href="https://www.kintu.org/product/f76a30bc-bbbe-4571-b23a-530ec4967cc8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center rounded-md bg-[#e31e24] py-3 text-sm font-semibold tracking-wide hover:brightness-110 transition"
                  >
                    Garantir Ingresso
                  </a>
                  <div className="mt-2 text-xs text-amber-300">Experiência exclusiva - Restam 12</div>
                </div>
              </section>
            </div>
          </div>

          {/* Description */}
          <section className="mt-12">
            <h2 className="text-lg font-bold border-b border-white/10 pb-2 mb-3">
              Descrição Curta
            </h2>
            <p className="text-white/90 leading-relaxed">
              O jogo de futebol entre ANGOLA e ARGENTINA no Estádio Nacional 11 de
              Novembro no dia 14 de Novembro pelas 17h reunirá jogadores e fãs para
              celebrar desporto, talento e espírito competitivo, promovendo emoções e
              momentos inesquecíveis para os amantes do futebol.
            </p>
          </section>

          {/* Localização */}
          <section className="mt-10">
            <h2 className="text-lg font-bold border-b border-white/10 pb-2 mb-3">
              LOCALIZAÇÃO
            </h2>
            <p className="m-0">Estádio 11 de Novembro</p>
            <p className="text-white/80">Belas, Luanda - Angola</p>
            <div className="mt-3">
              <iframe
                src="https://www.google.com/maps?q=-8.96967,13.28353&z=17&t=h&hl=pt-BR&gl=US&output=embed"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa: Estádio 11 de Novembro"
              />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 bg-[#121314] py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hidden md:block">
              <p className="font-medium mb-2">Links</p>
              <div className="flex flex-col gap-1 text-white/80 text-sm">
                <Link href="https://check-in.ao/eventos" className="hover:text-[#3eb0d0]">
                  Eventos
                </Link>
                <Link
                  href="https://check-in.ao/pagina/termos-e-condicoes-check-in-ao"
                  className="hover:text-[#3eb0d0]"
                >
                  TERMOS E CONDIÇÕES CHECK-IN.AO
                </Link>
                <Link href="https://check-in.ao/pagina/faq" className="hover:text-[#3eb0d0]">
                  FAQ
                </Link>
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">Contactos</p>
              <div className="text-white/80 text-sm space-y-1">
                <div>Luanda | Angola</div>
                <Link href="tel:+244922903847" className="hover:text-[#3eb0d0]">
                  Contactos apenas pelo WhatsApp +244 922 903 847
                </Link>
                <br />
                <Link href="mailto:geral@check-in.ao" className="hover:text-[#3eb0d0]">
                  geral@check-in.ao
                </Link>
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">Redes Sociais</p>
              <div className="flex gap-3 justify-start md:justify-end">
                <Link
                  href="https://www.facebook.com/profile.php?id=100086891269404"
                  target="_blank"
                  className="h-8 w-8 rounded-full bg-white/10 grid place-items-center hover:bg-white/15"
                >
                  f
                </Link>
                <Link
                  href="https://www.instagram.com/checkinao"
                  target="_blank"
                  className="h-8 w-8 rounded-full bg-white/10 grid place-items-center hover:bg-white/15"
                >
                  ig
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <Image
                src="https://ext.same-assets.com/521238399/4197757899.png"
                alt="Made Angola"
                width={100}
                height={119}
                className="h-[90px] w-auto"
              />
              <Image
                src="https://ext.same-assets.com/521238399/796230669.png"
                alt="APD"
                width={290}
                height={96}
                className="h-[60px] w-auto"
              />
            </div>
            <div className="text-sm text-white/80 md:text-right">
              <span className="font-bold">check-in.ao POWERED BY</span>
              <Image
                src="https://ext.same-assets.com/521238399/3112218122.png"
                alt="Favicon"
                width={50}
                height={50}
                className="inline-block ml-2 align-[-6px] h-8 w-8"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
