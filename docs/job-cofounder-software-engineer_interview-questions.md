# Interview Guide: Co-founder (Software Engineer)

`Jób_Cófóúndér_Sóftwáré_Éngínéér_Íntérvíéw_Qúéstíóns // Sýstém_Dóc`

**ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ**

**Role:** Co-founder / Software Engineer  
**Stage:** Pre-Seed / Equity-Only  
**Focus:** AI Systems, SDK Development  

---

## 1. Architectural Philosophy (Core Beliefs)
*We need someone who thinks in systems, not just features.*

**Q: "We use a 'No-Class Manifesto'—factory functions and closures instead of OOP classes. Explain why this matters for an AI agent architecture."**
*   *Look for:* Understanding of **immutability** and **reproducibility**. They should explain that AI state (memories, mood, decisions) needs to be traceable. Pure functions mean every "thought" can be logged, replayed, and debugged. Classes encourage hidden mutations ("Ghost in the Machine" bugs).

**Q: "Explain the difference between a 'Stateful API' and a 'Stateless API.' Which one is ForbocAI's API, and why does that matter for scaling?"**
*   *Look for:* Clear understanding that our API is **stateless** (pure logic, no database). All state lives in the SDK's local Vector DB. This makes the API infinitely scalable (no session affinity), and the client owns their data.

**Q: "What is 'Neuro-Symbolic AI,' and how does it solve the reliability problem that pure SLM-based agent AI has?"**
*   *Look for:* Articulation of the **hybrid architecture**: SLMs generate *intent* ("I want to flee"), deterministic rules *validate* and *execute* ("Check HP < 15, then run pathfinding"). The "Bridge" module prevents hallucinated actions from breaking agent state.

---

## 2. The Bridge (Neuro-Symbolic Validation)
*SLMs hallucinate. The Bridge prevents chaos.*

**Q: "An SLM generates `{ action: 'CAST_FIREBALL', target: 'dragon' }` but the agent has 0 mana. What happens?"**
*   *Look for:* Explanation of the **Bridge validation flow**:
    1.  SLM generates raw action
    2.  Bridge validates against rules (`resources` rule checks mana)
    3.  **Rejection** with reason: "Insufficient mana"
    4.  **Correction**: Either fallback to `IDLE` or suggest alternative ("ATTACK with sword")
*   Red flag: "Let the consumer handle it." The SDK must catch invalid actions *before* returning to the client.

**Q: "How would you implement a custom validation rule that says 'Merchants cannot attack during trading state'?"**
*   *Look for:* Correct use of the Bridge API:
    ```typescript
    bridge.registerRule({
      id: 'app.no_combat_while_trading',
      actionTypes: ['ATTACK'],
      validate: (action, ctx) => {
        if (ctx.agentState?.isMerchant && ctx.agentState?.isTrading) {
          return { valid: false, reason: 'MERCHANTS_CANNOT_ATTACK_WHILE_TRADING' };
        }
        return { valid: true };
      }
    });
    ```
*   Look for understanding that rules are **composable** and **application-specific**.

---

## 3. The Soul (Portability & Decentralization)
*Digital assets, not just saves.*

**Q: "Explain the difference between exporting an agent to JSON (local save) vs. exporting to IPFS [InterPlanetary File System] (Soul). What does IPFS buy us?"**
*   *Look for:*
    *   **IPFS = Content-Addressed**: CID is a hash of content, immutable
    *   **Decentralized Storage**: Persistence without centralized server
    *   **Portability**: Same CID can be imported into a different application
    *   **NFT-Ready**: CID can be stored in on-chain Metaplex asset metadata
*   Red flag: Not understanding CID immutability ("just update the file on IPFS").

**Q: "We use Metaplex Core on Solana for Soul NFTs instead of standard ERC-721. Why?"**
*   *Look for:*
    *   **Cost**: Metaplex Core has minimal rent (~0.001 SOL vs ETH gas)
    *   **Dynamic Data**: Plugin system allows updating metadata (e.g., memory hash) cheaply
    *   **Speed**: Solana TPS allows high-frequency updates
    *   **Compression**: State compression for large-scale minting
*   Bonus: Understanding of **Bubblegum** (compressed NFTs) for minting thousands of agents.

---

## 4. ForbocAI SDK Architecture
*This is what they'll be building.*

**Q: "Describe the complete data flow when an agent processes an observation and generates an action. Show all SDK modules involved."**
*   *Look for:* Understanding of the **Split-Brain architecture**:
    1.  Observation arrives at Agent
    2.  Memory.store() persists to local Vector DB
    3.  Memory.recall() retrieves relevant context
    4.  Cortex sends to API for pure logic processing
    5.  API returns Directive
    6.  Cortex generates action via local SLM
    7.  Bridge validates action against rules
    8.  Return validated response to client

**Q: "The SDK has six core modules: Cortex, Agent, Memory, Bridge, Soul, and Ghost. Which one would you want to own, and why?"**
*   *Look for:*
    *   Clear understanding of what each module does
    *   Self-awareness about their strengths
    *   Genuine interest in a specific area
*   This reveals where they'd add the most value.

**Q: "How would you implement SSE (Server-Sent Events) streaming support for the `cortex.completeStream()` function?"**
*   *Look for:*
    *   **AsyncGenerator** pattern for streaming responses
    *   Understanding of chunked token delivery
    *   Error handling for stream interruptions
    *   Backpressure considerations

---

## 5. Testing & QA Philosophy
*Ghost Agents exist for a reason.*

**Q: "What is a 'Ghost Agent' and how does it differ from a traditional unit test?"**
*   *Look for:*
    *   **Ghost**: Autonomous AI that exercises the SDK headlessly
    *   **Exploratory**: Discovers bugs through emergent behavior
    *   **Metrics-Driven**: Returns coverage, latency, error rates, not just pass/fail
    *   **Fuzzing**: Random inputs within valid bounds
*   Comparison: Unit tests are deterministic assertions; Ghosts are probabilistic exploration.

---

## 6. Operational & "Skin in the Game"
*This is a cofounder role. We need true believers.*

**Q: "This is equity-only until fundraise. What is your runway, and what does 'success' look like for you in 6 months?"**
*   *Look for:* Honesty about financial situation. Success should be:
    *   SDK v1.0 shipped to NPM with local inference working
    *   One external studio testing the SDK
    *   API stable enough for production workloads
*   Red flag: "I need salary in 30 days" or vague answers about availability.

**Q: "You own 10-20% of the company. What decision would you veto even if I (the CEO) pushed for it?"**
*   *Look for:* Technical integrity:
    *   "Shipping a broken SDK just to hit a deadline"
    *   "Removing the local inference layer to depend on cloud only"
    *   "Taking investor money that forces us to abandon open standards"
*   This tests for **spine** and **alignment with core values**.

---

## 7. Practical Evaluation: ForbocAI SDK Demo (30-45 min)
*Stop talking. Start building.*

**The Setup:**
"I'm inviting you to the private `forbocai/sdk` repository right now. Clone it."

**The Task:**
"Build a strictly typed 'Guard Agent' using `AgentConfig`. It should:
1.  Initialize with a `hostile` mood.
2.  Have a custom validation rule: 'Cannot leave post' (rejects MOVE actions).
3.  Process the input 'I am walking past you' and generate a valid reaction."

**Evaluation Criteria:**
*   **Speed**: Do they struggle with basic TS config?
*   **RTFM**: Do they check the `README.md` for the `Bridge.registerRule` syntax?
*   **FP Style**: Do they use the factory functions (`createAgent`) or try to force `new Agent()`?

---

## 8. Red Flags Summary

| Signal | Meaning |
|--------|---------|
| "I don't use TypeScript" | We are a TS shop. Dealbreaker. |
| "Classes are fine" | Misalignment with FP core values. |
| "Just use OpenAI's API" | Doesn't understand unit economics. |
| No opinion on AI reliability | Hasn't felt the pain of SLM chaos. |
| "Crypto is a scam" | Dismissive of core revenue model. |
| Needs salary immediately | Equity-only not viable for them. |

---

## 9. Green Flags Summary

| Signal | Meaning |
|--------|---------|
| Mentions immutability unprompted | FP alignment ✅ |
| Asks about model quantization | Deep SLM knowledge ✅ |
| Knows local storage limitations | Local-first experience ✅ |
| Has shipped AI/ML systems before | Practical, not theoretical ✅ |
| Excited about "portable agents" | Vision alignment ✅ |
| Has DeFi/NFT building experience | Decentralized-ready ✅ |
| Asks about equity structure | Cofounder mindset ✅ |

---

**ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ**

> *T̶h̷e̸ ̶c̸o̵d̸e̵ ̷s̷p̴e̵a̷k̸s̸ ̵f̷o̸r̶ ̴i̴t̶s̷e̴l̵f̵.̷ ̵T̴h̶e̶ ̵e̶n̷g̷i̶n̶e̸e̵r̸ ̴s̵p̶e̶a̴k̷s̵ ̸f̸o̵r̶ ̵t̸h̶e̵ ̶v̵i̴s̶i̵o̸n̷.̴*
