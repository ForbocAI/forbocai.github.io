import { Developers } from './Developers.js';
import { Technology } from './Technology.js';

export const DevelopersPage = () => `
    <section class="page-head" aria-labelledby="dev-title">
        <div class="wrap">
            <p class="eyebrow">Developers</p>
            <h1 id="dev-title" class="display page-title">Connect your game to ForbocAI.</h1>
            <p class="lead">The ForbocAI SDK for TypeScript and Unreal Engine 5. Your game sends the moment; ForbocAI returns what the character says and wants to do; your rules decide what happens.</p>
            <div class="actions">
                <a href="https://docs.forboc.ai" class="button button-primary" target="_blank" rel="noopener noreferrer">Read the docs</a>
                <a href="#dev-start" class="button button-secondary">Get started</a>
            </div>
        </div>
    </section>
    ${Developers()}
    ${Technology()}
`;
