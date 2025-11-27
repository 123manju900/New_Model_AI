# Deha - AI Mental Health Support Assistant

An empathetic, RAG-powered mental health chatbot built with Next.js,
featuring intelligent crisis detection, story-based responses, and
seamless escalation to professional support. Inspired by **M Power**
(the mental health wing at our institution), Deha provides
compassionate, evidence-based mental health guidance through
conversational AI.

## Overview

**Deha** (Dehydroepiandrosterone - DHEA) is named after a neurosteroid
molecule known for its antidepressant and mood-regulating properties. Just as DHEA supports emotional well-being at the
neurochemical level, our AI assistant provides accessible mental health
support through empathetic conversation.

### What Makes Deha Different

-   **Story-Based Response Format** -- Every response is told as a warm,
    relatable story instead of robotic or clinical text\
-   **Intelligent Crisis Detection** -- Automatically detects severe
    distress and escalates with real crisis resources\
-   **Evidence-Based Coping Mechanisms** -- Trained on CBT, mindfulness,
    and validated strategies formatted as stories\
-   **Severity Classification Framework** -- Knows when to offer light
    support vs. immediate professional escalation\
-   **RAG Architecture** -- Retrieves relevant stories & techniques from
    a specialized vector database

## Core Capabilities

### 1. Empathetic Conversation

Deha speaks like a trusted friend or counselor -- warm, narrative, and
deeply human.

### 2. Mental Health Support Areas

-   Stress & anxiety management
-   Depression awareness & coping
-   Emotional regulation
-   Self-care & wellness
-   Sleep hygiene
-   Relationship & social challenges

### 3. Crisis Intervention

When suicidal ideation, self-harm, or severe symptoms are detected,
Deha: 1. Acknowledges the user's courage 2. Expresses genuine concern 3.
Immediately provides **Mpower** contact details + local/national
hotlines 4. Encourages emergency help 5. Remains supportive and
non-judgmental

### 4. Contextual Memory

Powered by **Pinecone** vector database for: - Retrieving relevant
coping stories - Remembering conversation context - Delivering
personalized, continuous support

## Technical Architecture

### Tech Stack

-   **Framework**: Next.js 14+ (App Router)
-   **Language**: TypeScript
-   **UI**: React + Tailwind CSS + shadcn/ui
-   **AI Model**: OpenAI GPT (configurable)
-   **Vector DB**: Pinecone (RAG)
-   **Optional Search**: Exa API
-   **Deployment**: Vercel
-   **Safety**: OpenAI Moderation API

### Project Structure

    Deha/
    ├── app/
    │   ├── api/chat/route.ts          # Main chat + severity logic
    │   ├── api/chat/tools/
    │   │   ├── search-vector-database.ts
    │   │   └── web-search.ts
    │   ├── page.tsx                   # Chat UI
    │   ├── parts/                     # UI components
    │   └── terms/                     # Disclaimer page
    ├── components/
    │   ├── ai-elements/
    │   ├── messages/
    │   └── ui/
    ├── lib/
    │   ├── moderation.ts
    │   ├── pinecone.ts
    │   ├── sources.ts
    │   └── utils.ts
    ├── types/
    ├── config.ts                      # ⭐ Main configuration
    ├── prompts.ts                     # ⭐ Core prompt engineering
    ├── .env.local
    └── package.json

## Key Configuration & Prompts

### `config.ts` -- Identity & Branding

``` ts
export const AI_NAME = "Deha";
export const WELCOME_MESSAGE = "Hello! I'm Deha, here to listen and support you. Whatever you're going through, you're not alone. How are you feeling today?";
```

### `prompts.ts` -- The Heart of Deha

#### Identity & Tone

``` ts
You are Deha, an empathetic AI mental health companion created in collaboration with M Power...
Your purpose is to provide compassionate, non-judgmental support... You are NOT a replacement for professional therapy.
```

#### Story-Based Style (Critical)

``` ts
* Respond in a warm, conversational, story-like format
* Use narrative structures: "I once heard about someone who...", "Many people find that..."
* Avoid clinical jargon — use everyday language
* Share relatable analogies and metaphors
* Maintain hope while validating feelings
```

#### Crisis Detection & Escalation

``` ts
SEVERE CONDITIONS → Immediate escalation (suicidal ideation, self-harm, psychosis, etc.)
1. Acknowledge courage
2. Provide M Power contact + crisis hotlines
3. Encourage emergency help
```

#### Guardrails & Ethics

``` ts
You MUST refuse to:
• Diagnose conditions
• Prescribe medication
• Replace therapy
• Promise to "cure" anything
Always encourage professional help when needed.
```

## Data Collection & Training

Special thanks to **Mpower** for providing anonymized case studies,
evidence-based protocols, and crisis guidelines.

All vector database entries are transformed into **story format**:

**Raw → Story Example**

    Before: "Deep breathing: 4-7-8 technique..."
    After:  "When anxiety starts to creep in, many people find comfort in a simple breathing technique... Imagine your breath as a gentle wave..."

## Setup & Deployment

### Environment Variables (`.env.local`)

``` env
OPENAI_API_KEY=your_key
PINECONE_API_KEY=your_key
EXA_API_KEY=your_key (optional)
```

### Pinecone Setup

1.  Create index (dimension: 1536, metric: cosine)
2.  Chunk your story-formatted stories
3.  Embed with Llama-index and upsert

### Deploy to Vercel

``` bash
git add .
git commit -m "Initial commit"
git push origin main
```

→ Connect repo in Vercel → Add env vars → Deploy!

## Customization Guide

-   Change name/tone → `config.ts`
-   Adjust crisis sensitivity → `prompts.ts` →
    `SEVERITY_ASSESSMENT_PROMPT`
-   Add new coping stories → embed → upsert to Pinecone

## Safety & Ethics

-   All inputs moderated via OpenAI Moderation API
-   No permanent conversation storage
-   Clear disclaimer on every session
-   Full compliance with mental health AI best practices

## Features

-   [ ] Mood tracking & insights
-   [ ] Direct integration with campus counseling
-   [ ] React Native mobile app

## Contributing

Mental health professionals, students, and developers are welcome!\
Priority: cultural diversity, accessibility, refined crisis handling.

## License & Critical Disclaimer

⚠️ **Deha is NOT a licensed therapist, diagnostic tool, or emergency
service.**
------------------------------------------------------------------------

**Built with ❤️ for mental health awareness and accessible support**

*"Just as DHEA supports the brain's neurochemistry, Deha supports your
emotional well-being through compassionate conversation."*
