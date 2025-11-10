// === Завдання 1 ===
(function () {
    const display = document.getElementById('timer1');
    const message = document.getElementById('message1');
    let totalSeconds = 90; 
  
    function updateTimer1() {
      const mins = Math.floor(totalSeconds / 60);
      const secs = totalSeconds % 60;
      const mm = String(mins).padStart(2, '0');
      const ss = String(secs).padStart(2, '0');
      display.textContent = `${mm}:${ss}`;
  
      if (totalSeconds === 30) {
        message.textContent = 'Залишилось менше половини часу';
      }
  
      if (totalSeconds <= 0) {
        clearInterval(interval1);
        display.textContent = '00:00';
        message.textContent = 'Час вийшов';
        return;
      }
  
      totalSeconds -= 1;
    }
  
    updateTimer1();
    const interval1 = setInterval(updateTimer1, 1000);
  })();
  
  
  // === Завдання 2 ===
  (function () {
    const display2 = document.getElementById('timer2');
    const message2 = document.getElementById('message2');
    const startBtn2 = document.getElementById('startBtn2');
  
    let startTime, remaining = 30 * 1000;
    let running = false;
  
    function startTimer2() {
      if (running) return;
      running = true;
  
      startBtn2.disabled = true;
      message2.textContent = '';
  
      startTime = Date.now();
      remaining = 30 * 1000;
      requestAnimationFrame(tick);
    }
  
    function tick() {
      const elapsed = Date.now() - startTime;
      const timeLeft = remaining - elapsed;
  
      if (timeLeft <= 0) {
        display2.textContent = '00:00.000';
        endTimer2();
        return;
      }
  
      display2.textContent = formatTime(timeLeft);
  
      if (timeLeft <= 10 * 1000) {
        message2.textContent = 'Залишилось менше половини часу';
      }
  
      requestAnimationFrame(tick);
    }
  
    function endTimer2() {
      message2.textContent = 'Час вийшов';
      startBtn2.disabled = false;
      running = false;
    }
  
    function formatTime(ms) {
      const totalSecs = Math.floor(ms / 1000);
      const secs = totalSecs % 60;
      const msRem = ms % 1000;
      const ss = String(secs).padStart(2, '0');
      const msStr = String(msRem).padStart(3, '0');
      return `00:${ss}.${msStr}`;
    }
  
    startBtn2.addEventListener('click', startTimer2);
  
    // автоматичний запуск
    startTimer2();
  })();
  