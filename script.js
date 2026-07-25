/* MERIDIAN WELLNESS COLLECTIVE Shared script
   This file builds the register of qualifications at the bottom
   of every page from a JSON array. YEAHHH graded requirements!
   
   TO add a footnote to your page
   1. In your HTML, put a marker next to the claim:
       " <a class="fn-ref" id="ref-3" href="#fn-3"
            aria-label="Footnote 3">3</a> "
   2. In the Register array below, under your page's filename, add:
        { n: 3, text: "The retraction goes here." }
   3. The numbers must match.

   Write the retraction in the flattest institutional voice you
   can manage. I would love wild claims and flat disclaimers*/

var REGISTER = {

  'index.html': [
    { n: 1, text: 'Strength is defined internally by the Collective and is not comparable to strength as measured elsewhere.' },
    { n: 2, text: 'Photographs are illustrative. Capture dates reflect the date of capture. Members depicted may be the same member.' }
  ],

  /* Services - Nyeri */
  'services.html': [
    {n: x, text: ''},
    {n: x, text: ''}
  ],

  /* Resources - Wyatt */
  'resources.html': [
    {n: x, text: ''},
    {n: x, text: ''}
  ],

  /* Contact - Christina */
  'contact.html': [
    {n: x, text: ''},
    [n: x, text: '']
  ]

};


/* Builder.*/
(function buildRegister() {
  var list = document.getElementById('register-list');
  if (!list) return; // no register on this page, stop quietly

  var file = window.location.pathname.split('/').pop() || 'index.html';
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