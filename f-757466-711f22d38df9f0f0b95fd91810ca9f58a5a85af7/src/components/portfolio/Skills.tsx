
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Power Platform',
      skills: ['Power Apps', 'Power Automate', 'Power Virtual Agents', 'Dataverse', 'AI Builder']
    },
    {
      category: 'SharePoint',
      skills: ['SharePoint Online', 'SPFx', 'MS Lists', 'Site Design', 'Workflows']
    },
    {
      category: 'Development',
      skills: ['JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'PowerShell', 'REST API', 'C', 'Azure']
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="px-3 py-1">{skill}</Badge>
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

export default Skills;
