const TABS = [
    {
        id: 'ts',
        label: 'TypeScript',
        code: `<i>$ npm install @forbocai/core @forbocai/node</i>

<b>import</b> { createNodeMemory, nodeRuntimeRegistry, store } <b>from</b> <em>'@forbocai/node'</em>;
<b>import</b> { configureApiConnection, processNPC } <b>from</b> <em>'@forbocai/core'</em>;

configureApiConnection(nodeRuntimeRegistry, {
  apiKey: process.env.FORBOCAI_API_KEY,
});

<b>const</b> response = <b>await</b> store.dispatch(processNPC({
  npcId: <em>'maeve'</em>,
  structuredPersona: maeve,
  text: <em>'Anything I should know before I go?'</em>,
  context: worldState,
  memory: createNodeMemory(store, <em>'maeve'</em>),
})).unwrap();

<b>if</b> (response.metadata?.valid === <b>true</b>) {
  showDialogue(response.dialogue);
}`,
    },
    {
        id: 'ue',
        label: 'Unreal Engine 5',
        code: `<i>// Plugins/ForbocAI_SDK — enable it, then in your module:</i>
PublicDependencyModuleNames.Add(<em>"ForbocAI_SDK"</em>);

UForbocAISubsystem* SDK =
  GetWorld()-&gt;GetGameInstance()-&gt;GetSubsystem&lt;UForbocAISubsystem&gt;();

SDK-&gt;Init(ApiKey);
NpcId = UForbocAIBlueprintLibrary::createNpc(StructuredPersonaJson);

SDK-&gt;OnMessageReceived.AddDynamic(
  <b>this</b>, &amp;UMyNpcComponent::HandleNpcDialogue);
SDK-&gt;OnNPCActionReceived.AddDynamic(
  <b>this</b>, &amp;UMyNpcComponent::HandleNpcAction);

<i>// Blueprint exposes the same turn as "Process NPC".</i>`,
    },
    {
        id: 'cli',
        label: 'CLI',
        code: `<i>$ npm install @forbocai/node</i>

<i># check your key and connection</i>
forbocai doctor

<i># create a character from a persona document</i>
forbocai npc create <em>'&lt;structured-persona-json&gt;'</em>

<i># ask for one decision, limited to the actions you allow</i>
forbocai npc decide &lt;npc-id&gt; <em>'Anything I should know?'</em> \\
  --legal-actions <em>'offer_item,refuse'</em> --json`,
    },
];

const ENGINES = [
    ['TypeScript · Node.js 20+', '@forbocai/node', 'live', 'Available'],
    ['TypeScript · Browser', '@forbocai/browser', 'live', 'Available'],
    ['Unreal Engine 5 · C++ and Blueprint', 'ForbocAI_SDK plugin', 'live', 'Available'],
    ['Unity', 'Released when it meets the same contract', 'next', 'Planned'],
    ['Godot', 'Released when it meets the same contract', 'next', 'Planned'],
];

const STEPS = [
    ['Get an API key', 'Create a studio account at <a href="https://account.forboc.ai" target="_blank" rel="noopener noreferrer">account.forboc.ai</a>.'],
    ['Install the SDK', 'npm packages for TypeScript, or the plugin for Unreal Engine 5.'],
    ['Send a turn', 'A persona document, what the player said or did, and the world context.'],
    ['Check before you act', 'Apply a proposed action only once validation permits it.'],
];

const LINKS = [
    ['Documentation', 'Guides, concepts and API reference', 'https://docs.forboc.ai'],
    ['Unreal Engine guide', 'Install, C++ and Blueprint', 'https://docs.forboc.ai/ue/welcome'],
    ['npm packages', '@forbocai/core, node and browser', 'https://www.npmjs.com/org/forbocai'],
    ['Unreal example game', 'Source on GitHub', 'https://github.com/ForbocAI/demo-ue-5'],
    ['Discord', 'Ask the team and other developers', 'https://discord.gg/6hr2jHqnsG'],
];

export const Developers = () => `
    <section id="dev-start" class="band developers" aria-labelledby="developers-title">
        <div class="wrap">
            <div class="band-head band-head-split">
                <div>
                    <p class="eyebrow">Get started</p>
                    <h2 id="developers-title" class="title">One call per character turn.</h2>
                </div>
                <p class="lead">Install the SDK for your engine, hand it a character and the moment, and get back a line, a reason and an action your game can check. No model to host, no runtime to ship.</p>
            </div>

            <div class="dev-grid">
                <div class="dev-side">
                    <ol class="dev-steps">
                        ${STEPS.map(([t, d]) => `<li><strong>${t}</strong><span>${d}</span></li>`).join('')}
                    </ol>

                    <h3 class="subtitle dev-engines-title">Supported today</h3>
                    <ul class="engines">
                        ${ENGINES.map(([name, pkg, tone, label]) => `
                        <li>
                            <span class="engine-name">${name}<small>${pkg}</small></span>
                            <span class="status status-${tone}">${label}</span>
                        </li>`).join('')}
                    </ul>
                </div>

                <div class="code-window theme-dark" data-tabs>
                    <div class="code-tabs" role="tablist" aria-label="Code example">
                        ${TABS.map((t, i) => `<button type="button" role="tab" class="code-tab" id="code-tab-${t.id}" aria-controls="code-${t.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${t.label}</button>`).join('')}
                    </div>
                    ${TABS.map((t, i) => `<div class="code-panel" id="code-${t.id}" role="tabpanel" aria-labelledby="code-tab-${t.id}" tabindex="0" ${i ? 'hidden' : ''}><pre class="code"><code>${t.code}</code></pre></div>`).join('')}
                </div>
            </div>

            <ul class="dev-links">
                ${LINKS.map(([t, d, href]) => `
                <li><a href="${href}" target="_blank" rel="noopener noreferrer"><strong>${t}</strong><span>${d}</span></a></li>`).join('')}
            </ul>

            <div class="actions">
                <a href="https://docs.forboc.ai" class="button button-primary" target="_blank" rel="noopener noreferrer">Read the docs</a>
                <a href="mailto:hello@forboc.ai?subject=Studio%20integration" class="button button-secondary">Talk to us about an integration</a>
            </div>
            <p class="fine dev-fine">Characters think on ForbocAI’s hosted service, so a turn needs a network connection. API access is a paid subscription, in tiers that grow with your cast.</p>
        </div>
    </section>
`;
