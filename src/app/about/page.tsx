import Image from 'next/image';
import { PageContainer } from '@/components/PageContainer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Zap, Target } from 'lucide-react';
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';

export default function AboutUsPage() {
  return (
    <PageContainer>
      <FadeInOnScroll className="text-center mb-16">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">Sobre AuraTechIA</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Conheça as mentes por trás da AuraTechIA e aprenda sobre nossa jornada na formação do futuro da inteligência artificial.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll as="section" className="mb-16">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-primary flex items-center">
              <Brain className="w-8 h-8 mr-3 text-primary" /> Nossa História
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70 space-y-4 text-base leading-relaxed text-justify">
            <p>
              A AuraTechIA surgiu de uma paixão coletiva por inteligência artificial e uma visão compartilhada para aproveitar seu poder transformador. Nossa jornada começou com uma pequena equipe de duas pessoas, comprometidos em resolver desafios complexos através de soluções tecnológicas inovadoras.
            </p>
            <p>
              Com o passar do tempo crescemos com reconhecimento na indústria de IA, conhecidos por nossa expertise, abordagem centrada no cliente e compromisso inabalável com práticas éticas de IA. Acreditamos na construção de parcerias de longo prazo com nossos clientes, ajudando-os a navegar pelo cenário tecnológico em constante evolução e alcançar um crescimento sustentável.
            </p>
            <p>
              Na AuraTechIA, a inovação está no centro de tudo o que fazemos. Exploramos continuamente novas fronteiras em IA, investindo em pesquisa e desenvolvimento para nos mantermos à frente e entregar soluções de ponta que causam um impacto real no mundo.
            </p>
          </CardContent>
        </Card>
      </FadeInOnScroll>
      
      <FadeInOnScroll as="section" className="mb-16 grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg h-full">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
              <Target className="w-7 h-7 mr-3 text-primary" /> Nossa Missão
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70 text-base leading-relaxed text-justify">
            Capacitar organizações com automação inteligente e insights baseados em dados, fomentando a inovação e a excelência operacional através de soluções de IA acessíveis e éticas.
          </CardContent>
        </Card>
        <Card className="shadow-lg h-full">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
              <Zap className="w-7 h-7 mr-3 text-primary" /> Nossos Valores
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70 text-base leading-relaxed">
            <ul className="list-disc list-inside space-y-1">
              <li>Inovação: Expandindo continuamente os limites da IA.</li>
              <li>Integridade: Mantendo os mais altos padrões éticos.</li>
              <li>Colaboração: Trabalhando em conjunto com os clientes para o sucesso compartilhado.</li>
              <li>Excelência: Entregando soluções de alta qualidade e impactantes.</li>
            </ul>
          </CardContent>
        </Card>
      </FadeInOnScroll>
    </PageContainer>
  );
}