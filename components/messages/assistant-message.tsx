import { UIMessage, ToolCallPart, ToolResultPart } from "ai";
import { Response } from "@/components/ai-elements/response";
import { ReasoningPart } from "./reasoning-part";
import { ToolCall, ToolResult } from "./tool-call";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AssistantMessage({ message, status, isLastMessage, durations, onDurationChange }: { message: UIMessage; status?: string; isLastMessage?: boolean; durations?: Record<string, number>; onDurationChange?: (key: string, duration: number) => void }) {
    return (
        <div className="w-full flex justify-start items-end gap-3 mb-4">
            <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-pink-100 text-2xl">
                    🧠
                </AvatarFallback>
            </Avatar>
            <div className="px-4 py-3 rounded-2xl rounded-bl-none bg-gray-100 text-gray-800 shadow-sm max-w-lg">
                <div className="text-sm flex flex-col gap-4">
                    {message.parts.map((part, i) => {
                        const isStreaming = status === "streaming" && isLastMessage && i === message.parts.length - 1;
                        const durationKey = `${message.id}-${i}`;
                        const duration = durations?.[durationKey];

                        if (part.type === "text") {
                            return <Response key={`${message.id}-${i}`}>{part.text}</Response>;
                        } else if (part.type === "reasoning") {
                            return (
                                <ReasoningPart
                                    key={`${message.id}-${i}`}
                                    part={part}
                                    isStreaming={isStreaming}
                                    duration={duration}
                                    onDurationChange={onDurationChange ? (d) => onDurationChange(durationKey, d) : undefined}
                                />
                            );
                        } else if (
                            part.type.startsWith("tool-") || part.type === "dynamic-tool"
                        ) {
                            if ('state' in part && part.state === "output-available") {
                                return (
                                    <ToolResult
                                        key={`${message.id}-${i}`}
                                        part={part as unknown as ToolResultPart}
                                    />
                                );
                            } else {
                                return (
                                    <ToolCall
                                        key={`${message.id}-${i}`}
                                        part={part as unknown as ToolCallPart}
                                    />
                                );
                            }
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    )
}