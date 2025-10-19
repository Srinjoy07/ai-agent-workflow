# 🤖 AI Agent Workflow (Basic Architecture)

This project demonstrates a **basic AI Agent workflow** using **Groq’s Llama 3.1 model**.  
It simulates how intelligent agents can **plan, act, observe, and respond** — just like autonomous decision-making systems.

---

## 🧩 Description

This project is a **minimal example of an agentic reasoning loop** — a process where an AI model doesn’t just respond,  
but actually **plans its actions**, **calls tools**, **observes their output**, and then **decides the next step**.

> In essence, this project bridges the gap between a reactive chatbot and an autonomous reasoning system.

---

## ⚙️ Features

- 🧠 Uses **Groq Llama 3.1 model** for reasoning and decision-making  
- 🔁 Demonstrates a **START → PLAN → ACTION → OBSERVATION → OUTPUT** loop  
- 🌦 Integrates a simple **weather tool** for external data access  
- 🧾 Structured **JSON-based interaction** between the model and environment  
- 💻 Fully **CLI-driven interface** (runs directly in terminal)  

---

## 🧠 Why AI Agents?

While LLMs (Large Language Models) like ChatGPT or Groq’s Llama can generate answers, they are **reactive** — they only respond to user input.  

AI Agents, on the other hand, can:

- Make decisions proactively  
- Call APIs and external functions as tools  
- Process observations and replan  
- Operate in autonomous or semi-autonomous loops  

> This project demonstrates the first step toward building such intelligent, self-reflective systems.

---

## 🧮 LLMs vs AI Agents
```
| Feature | Traditional LLM | AI Agent |
|----------|------------------|-----------|
| **Response Style** | Single text output | Multi-step reasoning |
| **Action Capability** | None (text-only) | Executes real-world tools |
| **Memory** | Context-limited | Expandable, persistent |
| **Planning** | Implicit | Explicit, self-driven |
| **Autonomy** | Reactive | Proactive and goal-oriented |
```

---

## 💡 Example Workflow

```
>> What’s the weather in Kolkata?

--------- START AI -------
{"type": "plan", "plan": "I will call getWeatherDetails for Kolkata"}
{"type": "action", "function": "getWeatherDetails", "input": "kolkata"}
{"type": "observation", "observation": "30°C"}
{"type": "output", "output": "The weather in Kolkata is 30°C"}
--------- END AI -------

🤖 : The weather in Kolkata is 30°C
```

---

## 🚀 How to Run This Application

### 1️⃣ Clone the Repository
```
git clone https://github.com/<your-username>/ai-agent-workflow.git
cd ai-agent-workflow
```
### 2️⃣ Install Dependencies
```
npm install
npm install readline-sync
```
### 3️⃣ Add Your Groq API Key
Open the file index.js and replace your API key:
```
const client = new Groq({
  apiKey: "YOUR_GROQ_API_KEY",
});
```
4️⃣ Run the Application
```
node index.js
```
5️⃣ Chat with the Agent
```
>> What’s the weather in Delhi?
🤖 : The weather in Delhi is 35°C
```

---

## 🧱 Project Architecture
```
User Query
   ↓
Groq Llama 3.1 Model
   ↓
PLAN → ACTION → OBSERVATION → OUTPUT
   ↓
Final Response
```

---

## 🧠 Insights

This project is a simplified demonstration of how an AI Agent operates internally.
In real-world production systems, agents are far more complex. They:

- Interact with multiple APIs and databases
- Perform goal-driven reasoning
- Maintain short-term and long-term memory
- Re-evaluate plans dynamically
- Use orchestration frameworks like:
    - LangGraph → for visual multi-tool agent graphs
    - LangChain → for structured tool orchestration
    - AutoGen → for multi-agent collaboration

Think of this project as the foundation stone for future autonomous systems.

---

## 🧰 Tech Stack
 - 🟢 Node.js
 - 🧩 Groq SDK
 - 🦙 Llama 3.1 Model
 - 💬 readline-sync

---

## 🧭 Future Improvements

 - 🧠 Add persistent memory (short-term + long-term)
 - ⚙️ Integrate multiple tools (search, math, API calls, etc.)
 - 🕸 Use LangGraph for multi-agent visual flows
 - 💾 Add persistence for agent states
 - 🌐 Build a web-based front-end for real-time visualization

---

## 🪪 License
MIT License © 2025 [Srinjoy Ganguly]

---

## ✨ Summary
<details>
<summary>This project marks your first step into agentic AI systems — moving from LLMs that respond → to Agents that reason, plan, and act.
Tomorrow’s AI won’t just answer. It will think, decide, and do. </summary>
</details>
