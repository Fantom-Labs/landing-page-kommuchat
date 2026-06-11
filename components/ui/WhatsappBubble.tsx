
interface WhatsappBubbleProps {
  messages: { type: 'incoming' | 'outgoing'; text: string }[];
  typingType?: 'incoming' | 'outgoing' | null;
  className?: string;
}

export function WhatsappBubble({ messages, typingType = null, className = '' }: WhatsappBubbleProps) {
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
            className={`max-w-[75%] px-4 pt-2 pb-2.5 text-sm flex flex-col gap-1 ${
              msg.type === 'outgoing'
                ? 'bg-brand-red text-white rounded-[16px_16px_4px_16px]'
                : 'bg-[#1E1E1E] text-white rounded-[16px_16px_16px_4px]'
            }`}
          >
            <span className="text-xs font-medium text-white/90">
              {msg.type === 'outgoing' ? 'Secretária Virtual' : 'Paciente'}
            </span>
            {msg.text}
          </span>
        </div>
      ))}
      {typingType && (
        <div className={`flex ${typingType === 'outgoing' ? 'justify-end' : 'justify-start'}`}>
          <span
            className={`px-4 pt-2 pb-3 flex flex-col gap-1 ${
              typingType === 'outgoing'
                ? 'bg-brand-red rounded-[16px_16px_4px_16px]'
                : 'bg-[#1E1E1E] rounded-[16px_16px_16px_4px]'
            }`}
          >
            <span className="text-xs font-medium text-white/90">
              {typingType === 'outgoing' ? 'Secretária Virtual' : 'Paciente'}
            </span>
            <span className="flex gap-1.5 items-center">
              {[0, 150, 300].map((delay) => (
                <span
                  key={delay}
                  className="w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce"
                  style={{ animationDuration: '900ms', animationDelay: `${delay}ms` }}
                />
              ))}
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
