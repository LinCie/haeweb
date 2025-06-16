"use client";

import { useEffect, useState } from "react";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/chat/expandable-chat";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: number;
  message: string;
  sender: "user" | "bot";
  isLoading?: boolean;
}

const API_BASE_URL = "https://api.haebot.com";
const SESSION_STORAGE_KEY = "haebot_chat_session_id";

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [currentId, setCurrentId] = useState<number>(1);
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const storedSessionId = localStorage.getItem(SESSION_STORAGE_KEY);
    if (storedSessionId) {
      setSessionId(storedSessionId);
    }

    const welcomeMessage: Message = {
      id: 0,
      sender: "bot",
      message:
        "Halo! Saya adalah asisten virtual Haebot. Ada yang bisa saya bantu?",
      isLoading: false,
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userPrompt = input.trim();
    if (!userPrompt) return;

    const userMessageId = currentId;
    const botMessageId = currentId + 1;

    const userMessage: Message = {
      id: userMessageId,
      message: userPrompt,
      sender: "user",
      isLoading: false,
    };
    const loadingBotMessage: Message = {
      id: botMessageId,
      message: "",
      sender: "bot",
      isLoading: true,
    };

    setMessages((prev) => [...prev, userMessage, loadingBotMessage]);
    setInput("");
    setCurrentId((prev) => prev + 2);

    try {
      let currentSessionId = sessionId;

      if (!currentSessionId) {
        const sessionResponse = await fetch(`${API_BASE_URL}/chat/session`);
        if (!sessionResponse.ok) {
          throw new Error("Failed to initialize chat session.");
        }
        const sessionData = await sessionResponse.json();
        currentSessionId = sessionData.sessionId;
        setSessionId(currentSessionId);
        localStorage.setItem(SESSION_STORAGE_KEY, currentSessionId!);
      }

      const chatResponse = await fetch(`${API_BASE_URL}/chat/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: userPrompt,
          sessionId: currentSessionId,
        }),
      });

      if (!chatResponse.ok) {
        throw new Error("Failed to get a response from the server.");
      }

      const chatData = await chatResponse.json();

      const botResponse: Message = {
        id: botMessageId,
        sender: "bot",
        message: chatData.response,
        isLoading: false,
      };

      setMessages((prev) =>
        prev.map((msg) => (msg.id === botMessageId ? botResponse : msg)),
      );
    } catch (error) {
      console.error("Chat API Error:", error);
      const errorResponse: Message = {
        id: botMessageId,
        sender: "bot",
        message:
          "Maaf, sepertinya ada masalah di pihak kami. Silakan coba lagi nanti.",
        isLoading: false,
      };
      setMessages((prev) =>
        prev.map((msg) => (msg.id === botMessageId ? errorResponse : msg)),
      );
    }
  };

  return (
    <ExpandableChat size="md" position="bottom-right">
      <ExpandableChatHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/images/haebot-logo.jpg" alt="Haebot Logo" />
            <AvatarFallback>HB</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-lg font-semibold">Haebot Assistant</h1>
            <p className="text-muted-foreground text-sm">
              Tanyakan apa saja kepada kami
            </p>
          </div>
        </div>
      </ExpandableChatHeader>

      <ExpandableChatBody>
        <ChatMessageList>
          {messages.map((message) => {
            const variant = message.sender === "user" ? "sent" : "received";
            return (
              <ChatBubble key={message.id} variant={variant}>
                {variant === "received" && (
                  <ChatBubbleAvatar
                    src="/images/haebot-logo.jpg"
                    fallback="HB"
                  />
                )}
                <ChatBubbleMessage
                  isLoading={message.isLoading}
                  className={
                    variant === "sent"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }
                >
                  {message.message}
                </ChatBubbleMessage>
              </ChatBubble>
            );
          })}
        </ChatMessageList>
      </ExpandableChatBody>

      <ExpandableChatFooter>
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center gap-2"
        >
          <ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ketik pesan Anda..."
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!input.trim()}>
            <Send className="size-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}
