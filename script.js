
/* MERIDIAN WELLNESS COLLECTIVE: shared script
   Revision 15
 
   Two jobs:
   1. Builds the register of qualifications at the bottom of a
      page from a JSON array.
   2. Builds the membership plan cards on services.html from a
      JSON array.
 
   Both are guarded, so this one file is safe to load on all
   four pages. Nothing runs on a page that lacks the target
   element.
 
   TO ADD A FOOTNOTE TO YOUR PAGE
   1. In your HTML, put a marker next to the claim:
        <a class="fn-ref" id="ref-3" href="#fn-3"
           aria-label="Footnote 3">3</a>
   2. In the REGISTER array below, under your page's filename,
      add:
        { n: 3, text: 'The retraction goes here.' }
   3. The numbers must match. A marker with no matching entry
      is a broken link and WAVE will flag it.
   4. Your page needs this block, or nothing will build:
        <ol class="register" id="register-list">
          <li>Loading&hellip;</li>
        </ol>
 
   Write the retraction in the flattest institutional voice you
   can manage. Wild claims, flat disclaimers. */
 
 
var REGISTER = {
 
  'index.html': [
    { n: 1, text: 'Strength is defined internally by the Collective and is not comparable to strength as measured elsewhere.' },
    { n: 2, text: 'Sixty minutes is a nominal figure. Session length is determined at the discretion of the facilitator and is not disclosed in advance.' },
    { n: 3, text: 'Progress is recorded by the Collective. Members may request their record. Requests are reviewed monthly.' },
    { n: 4, text: 'Measurements taken at intake are retained for comparison purposes and are not made available for comparison.' },
    { n: 5, text: 'Nine thousand square feet is the figure filed at the time of lease. The second floor has not been resurveyed.' },
    { n: 6, text: 'The title is honorific within the Collective and confers no external standing.' },
    { n: 7, text: 'The Meridian Institute is a programme of the Collective. Accreditation is internal.' },
    { n: 8, text: 'The adjacent structure is not owned or operated by the Collective. Parking is at the member\u2019s own risk.' },
    { n: 9, text: 'Enrolment figures include members whose attendance has not been recorded since 2019. No member has lapsed.' }
  ],
 
  /* Services - Nyeri. Replace the placeholder text, then add
     matching .fn-ref markers in services.html. */
  'services.html': [
    { n: 1, text: 'Placeholder. Replace this text and add a matching footnote marker in services.html.' }
  ],
 
  /* Resources - Wyatt */
  'resources.html': [
    { n: 1, text: 'Placeholder. Replace this text and add a matching footnote marker in resources.html.' }
  ],
 
  /* Contact - Christina */
  'contact.html': [
    { n: 1, text: 'Placeholder. Replace this text and add a matching footnote marker in contact.html.' }
  ]
 
};
 
 
/* The membership plans. Used on services.html only. */
var PLAN_DATA = [
  {
    plan: 'Bronze',
    price: '$39.99',
    description: 'Build your foundation with essential wellness services.',
    features: [
      '24/7 Fitness Center Access',
      'Locker Room Access',
      'Group Fitness Classes',
      'Complimentary Towel Service'
    ]
  },
  {
    plan: 'Silver',
    price: '$79.99',
    description: 'Elevate your routine with premium recovery and training.',
    features: [
      'Unlimited Premium Classes',
      'Brain Spa Sessions',
      'Recovery Lounge Access',
      'Monthly Wellness Assessment'
    ]
  },
  {
    plan: 'Gold',
    price: '$149.99',
    description: 'Experience complete optimization through Meridian Wellness.',
    features: [
      'Unlimited IV Infusions',
      'Personal Wellness Concierge',
      'Executive Recovery Pod Reservations',
      'Priority Equipment Access',
      '25/8 Facility Access',
      'Productivity Performance Reports'
    ]
  }
];
 
 
/* Builder 1: the register. */
(function buildRegister() {
  var list = document.getElementById('register-list');
  if (!list) return; // no register on this page, stop quietly
 
  var file = window.location.pathname.split('/').pop() || 'index.html';
  if (file === '') file = 'index.html';
 
  var entries = REGISTER[file] || [];
 
  list.textContent = ''; // clear the loading message
 
  if (entries.length === 0) {
    var empty = document.createElement('li');
    empty.textContent = 'No qualifications have been filed for this page at this time.';
    list.appendChild(empty);
    return;
  }
 
  entries.forEach(function (entry) {
    var li = document.createElement('li');
    li.id = 'fn-' + entry.n;
    li.textContent = entry.text + ' ';
 
    var back = document.createElement('a');
    back.className = 'fn-back';
    back.href = '#ref-' + entry.n;
    back.textContent = 'Return';
    back.setAttribute('aria-label', 'Return to footnote ' + entry.n + ' in the text');
 
    li.appendChild(back);
    list.appendChild(li);
  });
})();
 
 
/* Builder 2: the membership plans. */
(function buildPlans() {
  var target = document.getElementById('membership-plans');
  if (!target) return; // not the services page, stop quietly
 
  target.className = 'svc-plans';
  target.textContent = '';
 
  PLAN_DATA.forEach(function (plan) {
    var card = document.createElement('article');
    card.className = 'plan-card';
 
    var name = document.createElement('h3');
    name.textContent = plan.plan;
    card.appendChild(name);
 
    var price = document.createElement('p');
    price.className = 'plan-price';
    price.textContent = plan.price;
    card.appendChild(price);
 
    var desc = document.createElement('p');
    desc.textContent = plan.description;
    card.appendChild(desc);
 
    var list = document.createElement('ul');
    plan.features.forEach(function (feature) {
      var li = document.createElement('li');
      li.textContent = feature;
      list.appendChild(li);
    });
    card.appendChild(list);
 
    target.appendChild(card);
  });
})();