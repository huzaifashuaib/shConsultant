"use client";
import { useEffect, useState } from "react";

export default function GoogleTranslate() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr",
            layout:
              window.google.translate.TranslateElement.InlineLayout.VERTICAL,
          },
          "google_translate_element"
        );
        setLoaded(true);
      };
    };

    addGoogleTranslateScript();
  }, []);

  return <div id="google_translate_element"></div>;
}
