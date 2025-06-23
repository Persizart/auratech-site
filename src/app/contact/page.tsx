import { PageContainer } from '@/components/PageContainer';
import ContactFormClient from './ContactFormClient';
import { Mail } from 'lucide-react';
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';

export default function ContactPage() {
  return (
    <PageContainer>
      <FadeInOnScroll className="text-center mb-12">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary flex items-center justify-center">
          <Mail className="w-10 h-10 mr-4 text-primary" /> Fale Conosco
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Estamos aqui para ajudar e responder a qualquer pergunta que você possa ter. Aguardamos ansiosamente o seu contato.
        </p>
      </FadeInOnScroll>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeInOnScroll>
          <ContactFormClient />
        </FadeInOnScroll>
        <FadeInOnScroll delay="delay-100">
          <div className="space-y-8">
            <div>
              <h2 className="font-headline text-2xl font-semibold text-primary mb-4">Informações de Contato</h2>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 text-primary shrink-0">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.45L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.894-9.889-9.894-5.452 0-9.887 4.434-9.889 9.894-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.501-.183-.001-.381-.001-.58 0-.198 0-.52.074-.792.372-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <a href="https://wa.me/551151967123" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+55 1151967123</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                  <a href="mailto:info@auratechia.com" className="hover:text-primary transition-colors">info@auratechia.com</a>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </PageContainer>
  );
}