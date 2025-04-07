
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import profilepic from '../../Assets/GoncasPerfil.jpg';

const Hero = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Gonçalo Branco</h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">Software Developer Specialist | Portals & Collaboration</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experienced software developer specialized in Microsoft Power Platform, 
            SharePoint, and Office 365 solutions. Currently working at DevScope, 
            building applications using low-code tools and creating custom 
            SharePoint pages with SPFX.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/gonçalo-branco-b93a14152/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <img src={profilepic}/>
            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
              Profile Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
