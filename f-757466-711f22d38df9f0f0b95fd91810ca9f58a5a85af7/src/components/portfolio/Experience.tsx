
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer Specialist',
      company: 'DevScope',
      period: 'Jan 2025 - Present',
      description: 'Building applications using low-code tools (Microsoft Power Platform). Process Automation through Power Automate. Creating custom SharePoint pages with SPFX (SharePoint framework). PowerShell scripting to automate internal integration processes between systems. Speaker at "App in a Day" event by Microsoft.',
      skills: ['Microsoft Power Platform', 'Power Automate', 'SPFX', 'SharePoint', 'PowerShell', 'TypeScript'],
    },
    {
      title: 'Software Developer',
      company: 'DevScope',
      period: 'Aug 2022 - Jan 2025',
      description: 'Software Developer focused on Portals - Office365, SharePoint & .NET development. Created and maintained digital workplace solutions for enterprise clients.',
      skills: ['Office365', 'SharePoint', '.NET', 'TypeScript', 'React'],
    },
    {
      title: 'Internship Trainee',
      company: 'DevScope',
      period: 'Mar 2022 - Jul 2022',
      description: 'Completed internship focused on Microsoft Power Platform technologies, learning and implementing business solutions using low-code tools.',
      skills: ['Microsoft Power Apps', 'Microsoft Power Automate', 'SharePoint'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription className="text-base">{job.company} | {job.period}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
