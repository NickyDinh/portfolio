document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 60,
    backSpeed: 40,
    startDelay: 1000,
    loop: false,
    loopCount: Infinity,
    onComplete: function(self) { prettyLog('onComplete ' + self) },
    preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
    onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
    onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
    onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
    onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
    onReset: function(self) { prettyLog('onReset ' + self) },
    onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
    onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
    onDestroy: function(self) { prettyLog('onDestroy ' + self) }
  });
