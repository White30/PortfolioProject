
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, currentPage }) => {
  return (
    <nav className="flex py-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <a
              href={item.href}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
            >
              {index > 0 && <ChevronRight className="mr-1 h-4 w-4" />}
              {item.label}
            </a>
          </li>
        ))}
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="mr-1 h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{currentPage}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
