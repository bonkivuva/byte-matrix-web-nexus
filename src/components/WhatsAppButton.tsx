import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            aria-label="Chat with us on WhatsApp"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-30" />
            <MessageCircle className="w-7 h-7 relative z-10" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Chat with us on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default WhatsAppButton;
