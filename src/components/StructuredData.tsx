import { useEffect } from "react";

interface StructuredDataProps {
  data: object | object[];
}

/**
 * Component to inject structured data (JSON-LD) into the document head
 */
export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];
    const dataArray = Array.isArray(data) ? data : [data];

    dataArray.forEach((item, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `structured-data-${index}`;
      script.text = JSON.stringify(item);
      document.head.appendChild(script);
      scripts.push(script);
    });

    return () => {
      // Cleanup: remove scripts when component unmounts
      scripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [data]);

  return null; // This component doesn't render anything
}
