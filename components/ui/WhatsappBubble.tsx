import { Check } from 'lucide-react';

interface WhatsappBubbleProps {
  messages: { type: 'incoming' | 'outgoing'; text: string }[];
  className?: string;
}

export function WhatsappBubble({ messages, className = '' }: WhatsappBubbleProps) {
  return (
    <div
      className={`flex flex-col gap-2 bg-transparent border-0 rounded-2xl p-3 sm:p-6 w-full max-w-[380px] text-[rgba(17,17,17,1)] ${className}`}
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}
        >
          <span
            className={`max-w-[75%] px-4 py-2.5 text-sm ${
              msg.type === 'outgoing'
                ? 'bg-brand-red text-white rounded-[16px_16px_4px_16px]'
                : 'bg-[#1E1E1E] text-white rounded-[16px_16px_16px_4px]'
            }`}
          >
            {msg.text}
          </span>
        </div>
      ))}
    </div>
  );
}
