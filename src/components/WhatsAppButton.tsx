import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            className="px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg"
            style={{ backgroundColor: "#0F1F2E", color: "#fff" }}
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>
      <a
        href="https://wa.me/254724367794?text=Hi%2C%20I%27d%20like%20to%20discuss%20IT%20support%20for%20my%20company."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 animate-whatsapp-pulse"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
          <path d="M16.004 2.667A13.26 13.26 0 002.67 15.87a13.16 13.16 0 001.795 6.636L2.667 29.333l7.07-1.854A13.27 13.27 0 0016.004 29.2 13.27 13.27 0 0029.333 15.87 13.27 13.27 0 0016.004 2.667zm0 24.266a11 11 0 01-5.608-1.533l-.402-.24-4.178 1.096 1.114-4.07-.263-.418a10.91 10.91 0 01-1.677-5.8A11.01 11.01 0 0116.004 4.934 11.01 11.01 0 0127.066 15.87 11.01 11.01 0 0116.004 26.933zm6.024-8.225c-.33-.165-1.953-.964-2.256-1.074-.303-.11-.523-.165-.743.165-.22.33-.854 1.074-1.047 1.294-.193.22-.386.248-.716.083a9.03 9.03 0 01-2.656-1.638 9.97 9.97 0 01-1.836-2.29c-.193-.33-.02-.509.145-.673.148-.148.33-.386.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.743-1.793-1.018-2.453-.268-.645-.54-.557-.743-.568l-.633-.01a1.21 1.21 0 00-.88.414c-.303.33-1.155 1.129-1.155 2.752s1.183 3.193 1.348 3.413c.165.22 2.328 3.553 5.64 4.982.788.34 1.403.543 1.882.695.79.252 1.51.216 2.078.131.634-.095 1.953-.798 2.228-1.568.275-.77.275-1.43.193-1.568-.083-.138-.303-.22-.633-.385z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
