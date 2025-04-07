
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master's degree in Computer Engineering",
      institution: "Instituto Superior de Engenharia do Porto",
      period: 'Sep 2023 - Present',
      description: 'Specialization in Information and Knowledge Technologies.'
    },
    {
      degree: 'Bachelors Degree in Computer Engineering',
      institution: 'Instituto Politécnico de Viseu',
      period: '2019 - 2022',
      description: 'Grade: 15'
    },
    {
      degree: 'PL-100: Microsoft Certified: Power Platform App Maker Associate',
      institution: 'Microsoft',
      period: '2021',
      description: 'Power Platform App Maker Associate'
    },
    {
      degree: 'Microsoft Applied Skills: Create and manage model-driven apps with Power Apps and Dataverse',
      institution: 'Microsoft',
      period: '2024',
      description: 'Certification for create and manage model-driven apps with Power Apps and Dataverse.'
    },
    {
      degree: 'Microsoft Applied Skills: Create and manage canvas apps with Power Apps',
      institution: 'Microsoft',
      period: '2024',
      description: 'Certification for create and manage canvas apps with Power Apps.'
    },
    {
      degree: 'Microsoft Applied Skills: Implement AI models with Microsoft Power Platform AI Builder',
      institution: 'Microsoft',
      period: '2024',
      description: 'Certification for implement AI models with Microsoft Power Platform AI Builder'
    },
    {
      degree: 'Microsoft Applied Skills: Create and manage model-driven apps with Power Apps and Dataverse',
      institution: 'Microsoft',
      period: '2024',
      description: 'Certification for create and manage model-driven apps with Power Apps and Dataverse'
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.degree}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-base">
                  <span>{item.institution}</span>
                  <span className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4" />
                    {item.period}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
