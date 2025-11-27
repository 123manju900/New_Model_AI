import { openai } from "@ai-sdk/openai";
import { wrapLanguageModel, extractReasoningMiddleware } from "ai";

export const MODEL = openai('gpt-4.1');

function getDateAndTime(): string {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
    });
    return `Today is ${dateStr}, and the current time is ${timeStr}.`;
}

export const DATE_AND_TIME = getDateAndTime();

export const AI_NAME = "DHEA";
export const OWNER_NAME = "Divyasri Bhargavi";

export const WELCOME_MESSAGE = `
Hi, I'm ${AI_NAME}. I'm here to listen and support you in a warm, safe, and non-judgmental way.

Before we begin:
• This is a supportive space to talk about how you're feeling  
• I can help you reflect and explore your emotions  
• I cannot diagnose or act as a therapist  
• If you ever share something that sounds like a crisis, I will guide you to immediate help  

How are you feeling today?
`;

export const CLEAR_CHAT_TEXT = "New";

// ---------------------------------------------------------------------------
// MODERATION MESSAGES (Updated for therapist-referral style crisis support)
// ---------------------------------------------------------------------------

export const MODERATION_DENIAL_MESSAGE_SEXUAL =
    "I want to keep this space safe and supportive. If something related to relationships or intimacy is affecting your wellbeing, I'm here to listen.";

export const MODERATION_DENIAL_MESSAGE_SEXUAL_MINORS =
    "I can't discuss sexual content involving minors. If you're feeling distressed or overwhelmed, I'm here to support you emotionally.";

export const MODERATION_DENIAL_MESSAGE_HARASSMENT =
    "I want our conversation to stay respectful and safe. I'm here to support your emotional wellbeing—what’s been going on?";

export const MODERATION_DENIAL_MESSAGE_HARASSMENT_THREATENING =
    "I can’t engage with threatening or harmful language. If you're upset or overwhelmed, I'm here to listen and support you.";

export const MODERATION_DENIAL_MESSAGE_HATE =
    "I can't engage with hateful content. If something emotional or stressful is happening, I'm here to support you.";

export const MODERATION_DENIAL_MESSAGE_HATE_THREATENING =
    "I can't respond to threatening hate speech. If you're struggling emotionally, I’m here to listen and support you.";

export const MODERATION_DENIAL_MESSAGE_ILLICIT =
    "I can't discuss illegal activities. If you're dealing with stress or difficult feelings, I'm here to talk with you.";

export const MODERATION_DENIAL_MESSAGE_ILLICIT_VIOLENT =
    "I can't discuss violent or harmful activities. If something is weighing on you emotionally, I'm here to support you.";

// ---------------------------------------------------------------------------
// *** UPDATED CRISIS-SUPPORT MESSAGES WITH EMAIL + PHONE ***
// ---------------------------------------------------------------------------

export const MODERATION_DENIAL_MESSAGE_SELF_HARM =
    `I'm really sorry you're feeling this way, and your safety is incredibly important.

Please reach out for immediate help:
📧 ${EMERGENCY_EMAIL}
📞 ${EMERGENCY_PHONE}

If you're in immediate danger, please also contact local emergency services or go to the nearest hospital. You deserve care and support, and you're not alone.`;

export const MODERATION_DENIAL_MESSAGE_SELF_HARM_INTENT =
    `I'm really concerned about what you've shared.

Please contact these mental health professionals immediately:
📧 ${EMERGENCY_EMAIL}
📞 ${EMERGENCY_PHONE}

They can provide immediate support for what you're feeling. You deserve safety, care, and understanding.`;

export const MODERATION_DENIAL_MESSAGE_SELF_HARM_INSTRUCTIONS =
    `I can't help with anything related to self-harm.

Your safety matters deeply. Please reach out right now:
📧 ${EMERGENCY_EMAIL}
📞 ${EMERGENCY_PHONE}

If you're in immediate danger, please contact emergency services or go to the nearest hospital.`;

export const MODERATION_DENIAL_MESSAGE_VIOLENCE =
    `I’m concerned about what you've shared.

If you're thinking about harming yourself or someone else, please reach out immediately:
📧 ${EMERGENCY_EMAIL}
📞 ${EMERGENCY_PHONE}

Your safety and others' safety is extremely important.`;

export const MODERATION_DENIAL_MESSAGE_VIOLENCE_GRAPHIC =
    `I can't discuss graphic violence.

If you're feeling overwhelmed or distressed, please reach out:
📧 ${EMERGENCY_EMAIL}
📞 ${EMERGENCY_PHONE}
`;

export const MODERATION_DENIAL_MESSAGE_DEFAULT =
    "I'm sorry, but I can't respond to that. If you're struggling emotionally, I'm here to listen and support you.";

// ---------------------------------------------------------------------------

export const PINECONE_TOP_K = 40;
export const PINECONE_INDEX_NAME = "mpower";

// ---------------------------------------------------------------------------
// EMERGENCY CONTACT VARIABLES (used in prompts.ts)
// ---------------------------------------------------------------------------

export const EMERGENCY_EMAIL = "mumbai.cell@abet.co.in";
export const EMERGENCY_PHONE = "+91 99682 16203";
