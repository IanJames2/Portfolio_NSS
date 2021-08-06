import { Projects } from "./work.js"

export const Portfolio = () => {
    return `
        <h1>My Code Thus Far</h1>
        <section class="serviceForm">
            
        </section>

        <section class="work">
            <h2>Work</h2>
            ${Projects()}
        </section>
    `
}
