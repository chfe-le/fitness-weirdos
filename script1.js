import { planData } from "./data.js";

const membershipPlans = document.getElementById("membership-plans");

let html = "";

planData.forEach(plan => {
    html += `
        <article class="plan-card">
            <h3>${plan.plan}</h3>
            <p>${plan.description}</p>
            <h4>${plan.price}</h4>

            <ul>
                ${plan.features.map(feature => `<li>${feature}</li>`).join("")}
            </ul>
        </article>
    `;
});

membershipPlans.innerHTML = html;