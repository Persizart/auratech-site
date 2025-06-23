import Image from 'next/image';
import { PageContainer } from '@/components/PageContainer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Cpu, Code2 } from 'lucide-react';
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';

const services = [
  {
    icon: Cpu,
    title: "Automação com IA",
    description: "Utilize a inteligência artificial para automatizar processos de negócios complexos, reduzindo o esforço manual e aumentando a eficiência. Nossas soluções abrangem automação de fluxo de trabalho, processamento inteligente de documentos e automação robótica de processos (RPA).",
    features: ["Otimização de Fluxo de Trabalho", "Redução de Erros", "Operações 24/7", "Escalabilidade"],
    image: "https://images.unsplash.com/photo-1716637644831-e046c73be197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxJQXxlbnwwfHx8fDE3NTAzNDY5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "automation robotics"
  },
  {
    icon: Code2,
    title: "Desenvolvimento de Sistemas de IA Personalizados",
    description: "Projetamos e desenvolvemos sistemas de IA sob medida para seus requisitos específicos. Da conceituação à implantação, nossa equipe trabalha em estreita colaboração com você para construir soluções inovadoras que resolvem seus desafios únicos.",
    features: ["Modelos de IA Personalizados", "Processamento de Linguagem Natural (PLN)", "Soluções de Visão Computacional", "Integração com Sistemas Existentes"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBzb2Z0d2FyZXxlbnwwfHx8fDE3MTg4MzIyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "custom software"
  },
];

export default function ServicesPage() {
  return (
    <PageContainer>
      <FadeInOnScroll className="text-center mb-16">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">Nossas Soluções de IA</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Descubra como a AuraTechIA pode revolucionar seus negócios com serviços de inteligência artificial de ponta.
        </p>
      </FadeInOnScroll>

      <div className="space-y-16">
        {services.map((service, index) => (
          <FadeInOnScroll key={index} delay={`delay-${index * 150}`}>
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className={`grid md:grid-cols-2 items-center gap-0 ${index % 2 !== 0 ? 'md:grid-flow-row-dense md:[&>*:last-child]:col-start-1' : ''}`}>
                <div className="relative h-80 md:h-full w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    data-ai-hint={service.imageHint}
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-10 h-10 text-primary mr-3" />
                    <CardTitle className="font-headline text-2xl md:text-3xl text-primary">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-foreground/70 mb-6 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <h3 className="font-headline text-lg font-semibold text-primary mb-3">Principais Características:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-foreground/70">
                        <CheckCircle className="w-5 h-5 text-accent-foreground mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </FadeInOnScroll>
        ))}
      </div>
    </PageContainer>
  );
}