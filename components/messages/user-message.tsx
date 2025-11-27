import { UIMessage } from "ai";
import { Response } from "@/components/ai-elements/response";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function UserMessage({ message }: { message: UIMessage }) {
    return (
        <div className="w-full flex justify-end items-end gap-3 mb-4">
            <div className="max-w-lg w-fit px-4 py-3 rounded-2xl rounded-br-none bg-[#d946ef] text-white shadow-sm">
                <div className="text-sm">
                    {message.parts.map((part, i) => {
                        switch (part.type) {
                            case "text":
                                return <Response key={`${message.id}-${i}`}>{part.text}</Response>;
                        }
                    })}
                </div>
            </div>
            <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-purple-500 text-white text-sm">
                    You
                </AvatarFallback>
            </Avatar>
        </div>
    )
}