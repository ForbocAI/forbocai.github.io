/**
 * Turn Component
 *
 * The one place on the site that shows the product rather than describing it.
 * Names, fields and CLI commands here are the real ones from the TypeScript
 * SDK — processNPC, response.dialogue, response.action, metadata.valid,
 * validateBridgeThunk — not an illustrative invention.
 *
 * Full-bleed rather than an inset card: a dark panel floating inside the day
 * half meant the header crossed it as a cream slab with a hard edge, and it was
 * the third rounded card with a soft shadow on one page. Edge to edge, it is a
 * tunnel the page passes through on the way to nightfall, and the header can
 * simply go dark with it.
 */
export const Turn = () => {
    return `
    <section id="turn" class="chapter turn-band">
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛒ</span>
                <div>
                    <h2>One turn, end to end</h2>
                    <p class="chapter-lead">Your game hands us who the character is, what she just observed, and the state of the world around her. We hand back something you can act on — or an honest refusal.</p>
                </div>
            </header>

            <div class="turn-grid">
                <div class="turn-col">
                    <p class="turn-label">Your game asks</p>
                    <pre class="turn-code"><code>const response = await store.dispatch(
  processNPC({
    npcId: 'maeve',
    structuredPersona: maeve,
    text: 'The player asks about her brother.',
    context: worldState,
    memory,
  }),
).unwrap()</code></pre>
                    <p class="turn-note">Memory is a store your studio created and can read without us. World context is yours; we never hold it.</p>
                </div>

                <div class="turn-col">
                    <p class="turn-label">ForbocAI answers</p>
                    <pre class="turn-code"><code>{
  dialogue: "He took the north road in spring.",
  action: { type: 'offer_item', item: 'brothers_letter' },
  metadata: { valid: true },
}</code></pre>
                    <p class="turn-note">Nothing has moved yet. The action is a proposal — your build runs it through the validation path against your own rules, and only then does the letter change hands. Same contract from Unreal; the engine plugin is not a port of the TypeScript one.</p>
                </div>
            </div>

            <p class="turn-refusal"><strong>Everyone sells you a speed number. We would rather sell you the failure contract.</strong> When it cannot answer honestly, <code>metadata.valid</code> comes back <code>false</code> and there is no action to run. A turn that could not be qualified fails where you can catch it, rather than arriving as plausible dialogue about a letter that does not exist. A fast wrong answer is worse than a slow one, and it is the failure that ends up in your bug tracker under "cannot reproduce".</p>

            <p class="turn-cli">There is exactly one integration surface — a schema of your action types, your state shape and your rules. Everything else is this call. Try it from a terminal before you write a line of engine code: <code>forbocai npc chat maeve --text "her brother"</code></p>
        </div>
    </section>
    `;
};
