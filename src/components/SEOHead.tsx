
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead = ({ 
  title = "Byte Matrix Technologies - Professional IT Solutions",
  description = "Professional IT services, hardware solutions, and 24/7 support for businesses. Transform your technology infrastructure with our expert consulting and implementation services.",
  keywords = "IT services, hardware solutions, technical support, enterprise technology, cloud solutions, cybersecurity, system integration, IT consulting",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  type = "website",
  author = "Byte Matrix Technologies",
  publishedTime,
  modifiedTime
}: SEOHeadProps) => {
  const location = useLocation();
  const canonicalUrl = `https://bytematrixtech.com${location.pathname}`;

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
    updateMetaTag('meta[name="keywords"]', keywords);
    updateMetaTag('meta[name="author"]', author);
    updateMetaTag('meta[name="robots"]', 'index, follow');
    
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
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Byte Matrix Technologies",
      "description": description,
      "url": canonicalUrl,
      "logo": "https://bytematrixtech.com/logo.png",
      "image": image,
      "telephone": "+254724367794",
      "email": "support@bytematrixtechnologies.co.ke",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "KE"
      },
      "serviceType": "IT Services",
      "areaServed": "Global",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Consulting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hardware Solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical Support"
            }
          }
        ]
      },
      "sameAs": [
        "https://x.com/ByteMatrixTech",
        "https://www.facebook.com/share/1BSjKFRCUd/",
        "https://www.instagram.com/byte_matrix_technologies"
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
    
    // Analytics tracking (page view)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname,
        page_title: title,
        page_location: canonicalUrl,
      });
      
      // Track page view event
      (window as any).gtag('event', 'page_view', {
        page_title: title,
        page_location: canonicalUrl,
        page_path: location.pathname,
      });
    }

    // Track performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        if ((window as any).gtag && loadTime > 0) {
          (window as any).gtag('event', 'timing_complete', {
            name: 'page_load_time',
            value: Math.round(loadTime),
            event_category: 'Performance'
          });
        }
      });
    }

  }, [title, description, keywords, image, location.pathname, canonicalUrl, type, author, publishedTime, modifiedTime]);

  return null; // This component doesn't render anything
};

export default SEOHead;
