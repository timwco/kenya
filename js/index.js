(function() {
  'use strict';

  buildDisplay(550, 6000);

  function createProgress (percent) {
    var bar         = document.createElement('span');
    var pop         = document.createElement('span');

    pop.className   = 'percentage';
    pop.innerText   = percent + '%';

    bar.className   = 'meter';
    bar.style.width = percent + '%';
    bar.appendChild(pop);

    return bar;
  }

  function updateTotal (raised, goal) {
    var raisedArea = document.querySelector('#raised');
    var goalArea = document.querySelector('#goal');

    raisedArea.innerText = numberWithCommas(raised);
    goalArea.innerText = numberWithCommas(goal);
  }

  function buildDisplay (raised, goal) {
    var progress  = document.querySelector('#progress'),
        percent   = calculatePercent(raised, goal),
        bar       = createProgress(percent);
    updateTotal(raised, goal);
    progress.appendChild(bar);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function calculatePercent (raised, goal) {
    return Math.floor((raised / goal) * 100);
  }

}());
