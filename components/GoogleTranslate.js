// components/GoogleTranslate.js

import React, { useEffect ,useRef} from 'react';

const GoogleTranslate = () => {
  const hasEffectRunRef = useRef(false);


  useEffect(() => {
    if (!hasEffectRunRef.current) {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'nl,en,de,fr,es,pl,tr,pt,it' },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);
    hasEffectRunRef.current = true;
    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }
  }, []);


  return (
    <div id="google_translate_element">
      <style>{`
        /* Hide the top banner and adjust margins */
        .translated-ltr {
          margin-top: -40px;
        }

        .goog-te-banner-frame {
          display: none;
          margin-top: -20px;
        }

        /* Hide the Google Translate logo link */
        .goog-logo-link {
          display: none !important;
        }

        /* Hide the text content and adjust the color of the gadget */
        .goog-te-gadget {
          color: transparent !important;
        }

        .goog-te-gadget > span {
          display: none !important;
        }

        /* Style the select dropdown in the widget */
        #google_translate_element select {
          color: #383ffa;
          border: none;
          border-radius: none;
          color: black;
        }
        
 iframe{
  visibility: hidden !important;
}


        #google_translate_element > div > div > span > a > span{
          color: #7a7d85!important;
          font-weight: 600!important;
        }
        .popop > div > a > span{
           color: #7a7d85!important;
          font-weight: 600!important;
        }
        .goog-te-menu-frame{
          padding: 0px 0px!important;
          border-radius: 4px!important;
          background: white!important;
        }
        .goog-te-menu2{
          border: 0!important;
        }
        .goog-te-menu2-item div, .goog-te-menu2-item:link div {
            color: #7a7d85!important;
            background: #ffffff!important;
            padding: 8px 0!important;
        }
        .goog-te-menu2-item-selected .text {
              color: #7a7d85!important;
              font-size: 13px!important;
              padding: 10px 0!important;
              display: none!important;
          }
        .dropdown-toggle::after {
          display: none;
        }              
       .currencies .dd .ddChild li {
        padding: 15px !important;
        background-color: #fff;
        }
            .currencies .dd .ddChild li:hover{
          cursor:pointer !important;
        }
       .currencies .divider{
          border:0px !important;
        }
 
         .currencies .form-control:focus {
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
          }
            .goog-te-combo{
              width:70px !important;
            }    
          
          .currencies #currencySelect2_msdd{
            width:100px !important;
            }
            .currencies #currencySelect2{
            color:#7a7d85 !important;
            font-weight:600 !important;
            } 
            
          .nice-select{
            display:none;
          }
          select{
            display:inline-block !important;
            width:70px !important;
          }
          
      `}</style>
    </div>
  );
};

export default GoogleTranslate;
