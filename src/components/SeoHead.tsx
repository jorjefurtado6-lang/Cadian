import { useEffect } from 'react';
import { companyData } from '../data/config';

interface SeoProps {
  title?: string;
  description?: string;
}

export function SeoHead({ 
  title = `${companyData.name} | Software CAD profissional para empresas`,
  description = `Conheça o ${companyData.softwareName}, uma solução CAD profissional para projetos 2D e 3D, com licenciamento flexível, suporte especializado e ferramentas para engenharia, arquitetura e indústria.`
}: SeoProps) {
  useEffect(() => {
    document.title = title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Schema.org structured data
    const schemaOrg = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": companyData.softwareName,
      "operatingSystem": "Windows",
      "applicationCategory": "DesignApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL"
      },
      "publisher": {
        "@type": "Organization",
        "name": companyData.name
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaOrg);

  }, [title, description]);

  return null;
}
