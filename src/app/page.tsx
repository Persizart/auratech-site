"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageContainer } from '@/components/PageContainer';
import { Bot, Lightbulb, TrendingUp } from 'lucide-react';
import React from 'react';
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';

export default function HomePage() {
  return (
    <PageContainer>
      <section className="relative text-center py-16 md:py-24"> 
        <div className="relative z-10">
          <h1
            className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary"
          >
            Inove com AuraTechIA
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80">
            Pioneirando o futuro da tecnologia com soluções de Inteligência Artificial de ponta. Transformamos negócios através de automação, análise de dados e desenvolvimento de sistemas personalizados.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/services">Nossos Serviços</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link href="/contact">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>

      <FadeInOnScroll as="section" className="py-16 md:py-24 bg-secondary/30 rounded-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-4">Nossa Missão</h2>
              <p className="text-foreground/80 mb-6 text-justify">
                Capacitar empresas com soluções inteligentes que impulsionam o crescimento, a eficiência e a inovação. Esforçamo-nos para tornar a IA acessível e impactante para organizações de todos os tamanhos.
              </p>
              <h2 className="font-headline text-3xl font-bold text-primary mb-4">Nossa Visão</h2>
              <p className="text-foreground/80 text-justify">
                Ser um líder global em transformação digital impulsionada por IA, reconhecido pelo nosso compromisso com a excelência, práticas éticas e o sucesso de nossos clientes.
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1674027444454-97b822a997b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8SWF8ZW58MHx8fHwxNzUwMjc0NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tecnologia de IA"
                fill
                sizes="100vw"
                className="object-cover transform hover:scale-105 transition-transform duration-500"
                data-ai-hint="abstract technology"
              />
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll as="section" className="py-16 md:py-24">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
          Serviços Principais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeInOnScroll delay="delay-0">
            <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-accent/30 rounded-full mb-4 mx-auto md:mx-0">
                  <Bot className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">Automação com IA</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">
                  Otimize operações e aumente a produtividade com nossas soluções de automação inteligente.
                </CardDescription>
              </CardContent>
            </Card>
          </FadeInOnScroll>
          <FadeInOnScroll delay="delay-100">
            <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-accent/30 rounded-full mb-4 mx-auto md:mx-0">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">Análise de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">
                  Desbloqueie insights valiosos de seus dados para tomar decisões informadas e direcionar a estratégia.
                </CardDescription>
              </CardContent>
            </Card>
          </FadeInOnScroll>
          <FadeInOnScroll delay="delay-200">
            <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-accent/30 rounded-full mb-4 mx-auto md:mx-0">
                  <Lightbulb className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">Sistemas Personalizados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">
                  Desenvolva sistemas de IA personalizados, adaptados às suas necessidades de negócios exclusivas.
                </CardDescription>
              </CardContent>
            </Card>
          </FadeInOnScroll>
        </div>
      </FadeInOnScroll>
    </PageContainer>
  );
}