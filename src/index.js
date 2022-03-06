
function lovenotwar() {
  try {
    const currentTop = window ? window.getComputedStyle(document.body).paddingTop : 0;
    const paddingTop = /px^/g.test(currentTop) ? parseInt(currentTop) : 0;

    document.body.style.paddingTop = (paddingTop + 40) + 'px';

    const barEl = document.createElement('div');
    barEl.className = 'lovenotwar';

    barEl.style.height = '40px';
    barEl.style.background = '#ff30ac'
    barEl.style.color = '#FFF';
    barEl.style.position = 'absolute';
    barEl.style.top = 0;
    barEl.style.left = 0;
    barEl.style.width = '100%';
    barEl.style.textAlign = 'center';
    barEl.style.paddingTop = '8px';
    barEl.style.fontFamily = 'sans-serif';
    barEl.style.lineHEight = '28px';
    barEl.style.fontSize = '16px';

    const heart = document.charset == 'UTF-8' ? '❤️' : '<3'
    barEl.innerText = 'We stand for peace and love ' + heart + ' not war'

    document.body.prepend(barEl);

    const closeEl = document.createElement('div');
    closeEl.className = 'close';
    closeEl.style.position = 'absolute';
    closeEl.style.right = 0;
    closeEl.style.marginRight = '12px';
    closeEl.style.cursor = 'pointer';

    closeEl.onclick = function() {
      document.body.style.paddingTop = paddingTop;
      barEl.remove();
    }

    closeEl.innerText = 'x';
    barEl.prepend(closeEl);
  }
  catch(e) {
    console.log('lovenotwar: ' + e)
  }
}

if (!document.body) {
  if (window) window.addEventListener('load', lovenotwar);
}
else {
  lovenotwar();
}
