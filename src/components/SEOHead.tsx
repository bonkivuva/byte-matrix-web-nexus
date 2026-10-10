
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

const SEOHead = ({ 
  title = "Byte Matrix Technologies | ICT Company in Nairobi, Kenya",
  description = "Byte Matrix Technologies is a trusted ICT company in Nairobi Kenya offering enterprise IT solutions, managed services, networking and CCTV installation.",
  image = "https://bytematrixtechnologies.co.ke/og-image.jpg",
  type = "website",
  author = "Byte Matrix Technologies",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: SEOHeadProps) => {
  const location = useLocation();
  const canonicalUrl = `https://bytematrixtechnologies.co.ke${location.pathname}`;

  useEffect(() => {
    // Update document title with proper format
    document.title = title;
    
    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, content: string) => {
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (selector.includes('name=')) {
          meta.setAttribute('name', selector.split('"')[1]);
        } else if (selector.includes('property=')) {
          meta.setAttribute('property', selector.split('"')[1]);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Basic meta tags
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="author"]', author);
    updateMetaTag('meta[name="robots"]', noIndex ? 'noindex, follow' : 'index, follow');

    document.querySelector('meta[name="keywords"]')?.remove();
    
    // Open Graph tags
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:image"]', image);
    updateMetaTag('meta[property="og:url"]', canonicalUrl);
    updateMetaTag('meta[property="og:type"]', type);
    updateMetaTag('meta[property="og:site_name"]', 'Byte Matrix Technologies');
    
    if (publishedTime) {
      updateMetaTag('meta[property="article:published_time"]', publishedTime);
    }
    if (modifiedTime) {
      updateMetaTag('meta[property="article:modified_time"]', modifiedTime);
    }
    
    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', image);
    updateMetaTag('meta[name="twitter:url"]', canonicalUrl);
    updateMetaTag('meta[name="twitter:site"]', '@ByteMatrixTech');
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalLink);
    }
    
    // Add structured data for business
    const routeName = location.pathname === '/' ? 'Home' : location.pathname.split('/').filter(Boolean).map(part => part.replace(/-/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase())).join(' / ');
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          "url": canonicalUrl,
          "name": title,
          "description": description,
          "isPartOf": { "@id": "https://bytematrixtechnologies.co.ke/#website" }
        },
        ...(location.pathname === '/' ? [] : [{
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bytematrixtechnologies.co.ke/" },
            { "@type": "ListItem", "position": 2, "name": routeName, "item": canonicalUrl }
          ]
        }]),
        ...(location.pathname === '/services' ? [{
          "@type": "Service",
          "name": "Enterprise IT Solutions and Managed Services",
          "provider": { "@id": "https://bytematrixtechnologies.co.ke/#organization" },
          "areaServed": ["Nairobi", "Kenya", "East Africa"],
          "url": canonicalUrl
        }] : [])
      ]
    };

    // Update or create structured data script
    let structuredDataScript = document.querySelector('#structured-data');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.setAttribute('type', 'application/ld+json');
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }
    
  }, [title, description, image, location.pathname, canonicalUrl, type, author, publishedTime, modifiedTime, noIndex]);

  return null; // This component doesn't render anything
};

export default SEOHead;
