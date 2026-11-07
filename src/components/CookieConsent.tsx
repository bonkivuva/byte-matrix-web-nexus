import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
    if ((window as Window & { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag("consent", "update", { analytics_storage: "granted" });
    }
  };

  const decline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="border-t border-border bg-muted px-4 py-6"
        >
          <div className="container-professional flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Cookie className="w-8 h-8 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
            <div className="flex-1 text-sm text-muted-foreground">
              Choose whether to allow optional analytics cookies.{" "}
              <Link to="/cookie-policy" className="text-primary hover:underline font-medium">
                Learn more
              </Link>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Button size="sm" variant="outline" onClick={decline}>
                Decline
              </Button>
              <Button size="sm" onClick={accept}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
