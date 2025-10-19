import Groq from "groq-sdk";
import readLineSync from 'readline-sync';

const client = new Groq({
  apiKey: "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",
});

// A simple tool function
function getWeatherDetails(city = "") {
  city = city.toLowerCase();
  if (city === "kolkata") return "30°C";
  if (city === "bangalore") return "32°C";
  if (city === "delhi") return "35°C";
  if (city === "mohali") return "25°C";
  return "Unknown city";
}


const tools = {
  "getWeatherDetails": getWeatherDetails
}


// MAIN WORK -- GASLIGHTING
const SYSTEM_PROMPT =
  `You are an AI Assistant with START, PLAN, ACTION, Observation and Output State. Wait for the user prompt and first PLAN using available tools. After Planning, take action with appropriate tools and wait for Observation based on ACTION. Once you get the observations, return the AI response based on START prompt and observations.

  Strictly follow the JSON output format as in examples.
  
  Available Tools:
  - function getWeatherDetails(city: string): string
  getWeatherDetails is a function that accepts city name as string and returns the weather details


  Example:
  START
  { "type": "user", "user": "What is the sum of weather of Kolkata and Bangalore?" }
  { "type": "plan", "plan": "I will call the getWeatherDetails for Kolkata" }
  { "type": "action", "function": "getWeatherDetails", "input": "kolkata" }
  { "type": "observation", "observation": "30°C" }
  { "type": "plan", "plan": "I will call getWeatherDetails for Bangalore" }
  { "type": "action", "function": "getWeatherDetails", "input": "bangalore" }
  { "type": "observation", "observation": "32°C" }
  { "type": "output", "output": "The sum of weather of Kolkata and Bangalore is 62°C" }
  `;


// BEFORE READLINE_SYNC(WHICH HELPS TO TAKE CONSOLE INPUT)
// const userMessage = "Hey, what is the weather of Kolkata?";

// async function run() {
//   // Ask the Groq model to process the message
//   const completion = await client.chat.completions.create({
//     model: "llama-3.1-8b-instant", // ✅ working Groq model
//     messages: [
//       { role: "system", content: SYSTEM_PROMPT },
//       { role: "user", content: userMessage },
//     ],
//   });

//   console.log("🤖 Groq says:", completion.choices[0].message.content);
// }

// run();


const messages = [{ role: 'system', content: SYSTEM_PROMPT }];

//USER INPUT FROM TERMINAL
while (true) {
  const query = readLineSync.question('>> ');
  const q = {
    type: 'user',
    user: query,
  };
  messages.push({ "role": "user", content: JSON.stringify(q) });


  //calling chat
  while (true) {
    const chat = await client.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: messages,
      response_format: { type: "json_object" }
    });

    const result = chat.choices[0].message.content;
    messages.push({ role: 'assistant', content: result });


    // VOLUNTARY PART
    console.log(`\n\n--------- START AI -------`);
    console.log(result);
    console.log(`--------- END AI -------\n\n`);



    const call = JSON.parse(result);

    if (call.type == "output") {
      console.log(`🤖 : ${call.output}`);
      break;
    } else if (call.type == "action") {
      const fn = tools[call.function]
      const observation = fn(call.input)
      const obs = { "type": "observation", "observation": observation }
      messages.push({ role: "developer", content: JSON.stringify(obs) })
    }
  }
}