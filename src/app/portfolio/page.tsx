import Image from 'next/image';
import { PageContainer } from '@/components/PageContainer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';

const projects = [
  {
    title: "Agente De Automação WhatsApp",
    category: "Logística e Automação",
    description: "Desenvolvemos uma plataforma com IA para otimizar as operações da cadeia de suprimentos de um grande cliente de varejo, resultando em uma redução de 15% nos custos e melhoria de 20% nos prazos de entrega.",
    image: "https://images.unsplash.com/photo-1642724978770-e27d781662d6",
    imageHint: "whatsapp automation",
    tags: ["IA", "Aprendizado de Máquina", "Otimização", "Logística"]
  },
  {
    title: "Agente De Automação Emails",
    category: "Automação de Email e Produtividade",
    description: "Desenvolvemos uma IA que cria um funil para seus emails. Ela identifica quais são de clientes com dúvidas, prepara uma resposta e a deixa salva como rascunho, pronta para você apenas clicar em enviar.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    imageHint: "email",
    tags: ["IA", "Automação", "Email", "Produtividade"]
  },
  {
    title: "Agente IA",
    category: "Atendimento ao Cliente e IA",
    description: "Desenvolvemos um Agente de IA que atende 24 horas por dia, 7 dias por semana, cativando o cliente desde o primeiro contato e sanando todas as suas dúvidas.",
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94",
    imageHint: "robot assistant",
    tags: ["Atendimento 24/7", "Chatbot", "IA Conversacional"]
  },
  {
    title: "Assistente de IA para Google Agenda",
    category: "Produtividade e Automação",
    description: "Um assistente de IA para o Google Agenda que gerencia seus eventos. Ele pode criar eventos com base em mensagens, consultar compromissos existentes e interagir para criar ou recuperar eventos conforme solicitado.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
    imageHint: "calendar schedule",
    tags: ["Google Agenda", "IA", "Automação", "Produtividade"]
  },
  {
    title: "Assistente de Reunião IA para Zoom",
    category: "Produtividade e Automação",
    description: "Gere resumos de reuniões do Zoom, crie tarefas no ClickUp e agende chamadas de acompanhamento. Automatizamos seu fluxo de trabalho obtendo a transcrição, usando IA para resumir e, em seguida, criando ações e agendamentos.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    imageHint: "productivity team meeting",
    tags: ["Zoom", "IA", "ClickUp", "Automação", "Produtividade"]
  },
  {
    title: "Agente de IA para DMs do Instagram",
    category: "Automação de Mídia Social",
    description: "Criamos um chatbot para interagir com usuários via mensagens diretas no Instagram, usando a integração do ManyChat e OpenAI. O sistema captura mensagens, gera respostas automáticas no estilo do influenciador e as envia de volta, otimizando o engajamento.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    imageHint: "social media",
    tags: ["Instagram", "IA", "ManyChat", "Chatbot", "Automação"]
  },
];

export default function PortfolioPage() {
  return (
    <PageContainer>
      <FadeInOnScroll className="text-center mb-16">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary flex items-center justify-center">
           <Briefcase className="w-10 h-10 mr-4 text-primary" /> Nosso Portfólio
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Explore uma seleção de nossos projetos de IA bem-sucedidos e soluções inovadoras entregues a clientes em diversos setores.
        </p>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <FadeInOnScroll key={index} delay={`delay-${index * 100}`}>
            <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-full">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  data-ai-hint={project.imageHint}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-accent-foreground font-medium">{project.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeInOnScroll>
        ))}
      </div>
    </PageContainer>
  );
}