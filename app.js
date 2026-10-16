(() => {
  const banks = [
    { name: "Number System", questions: numberSystemQuestions },
    { name: "HCF & LCM", questions: hcfLcmQuestions },
    { name: "Averages", questions: averagesQuestions },
    { name: "Remainder Theorem", questions: remainderQuestions }
  ];
  const home = document.getElementById("home"), exam = document.getElementById("exam"), result = document.getElementById("result");
  const $ = id => document.getElementById(id);
  let currentSet = 1, questions = [], answers = {}, currentIndex = 0, timeLeft = 90 * 60, timerId = null, startedAt = 0, endedByTimeout = false;
  const labels = ["A", "B", "C", "D"];
  function buildSet(setNo) {
    const selected = [];
    for (const bank of banks) {
      const setQuestions = bank.questions.filter(q => q.set === setNo);
      if (setQuestions.length !== 15) throw new Error(`${bank.name} must have exactly 15 questions in Set ${setNo}; found ${setQuestions.length}.`);
      selected.push(...setQuestions.map(q => ({ ...q, topic: bank.name })));
    }
    if (selected.length !== 60) throw new Error(`Set ${setNo} must contain exactly 60 questions.`);
    const texts = selected.map(q => q.question.trim());
    if (new Set(texts).size !== 60) throw new Error(`Duplicate question detected in Set ${setNo}.`);
    return selected;
  }
  function startSet(setNo) {
    try { questions = buildSet(setNo); }
    catch (err) { alert(err.message); return; }
    currentSet = setNo; answers = {}; currentIndex = 0; timeLeft = 90 * 60; endedByTimeout = false; startedAt = Date.now();
    home.classList.add("hidden"); result.classList.add("hidden"); exam.classList.remove("hidden");
    $("exam-set-label").textContent = `SET ${setNo}`; $("exam-title").textContent = `Aptitude Mock Exam — Set ${setNo}`;
    renderPalette(); renderQuestion(); updateTimer(); clearInterval(timerId); timerId = setInterval(() => { timeLeft--; updateTimer(); if (timeLeft <= 0) { endedByTimeout = true; submitExam(true); } }, 1000);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function updateTimer() { const m = Math.floor(Math.max(0,timeLeft)/60), s = Math.max(0,timeLeft)%60; $("timer").textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`; if(timeLeft<=300) $("timer").style.color="#c84040"; else $("timer").style.color=""; }
  function renderPalette() {
    const el = $("palette"); el.innerHTML = "";
    questions.forEach((q,i) => { const btn=document.createElement("button"); btn.textContent=i+1; btn.className=[i===currentIndex?"current":"",Object.hasOwn(answers,i)?"answered":""].filter(Boolean).join(" "); btn.setAttribute("aria-label",`Question ${i+1}${Object.hasOwn(answers,i)?", answered":""}`); btn.addEventListener("click",()=>{currentIndex=i;renderQuestion();renderPalette();}); el.appendChild(btn); });
    $("answered-count").textContent=`${Object.keys(answers).length} answered`;
  }
  function renderQuestion() {
    const q=questions[currentIndex]; $("progress-text").textContent=`Question ${currentIndex+1} of ${questions.length}`; $("topic-label").textContent=q.topic; $("question-text").textContent=`${currentIndex+1}. ${q.question}`;
    const opts=$("options"); opts.innerHTML="";
    q.options.forEach((opt,i)=>{ const label=document.createElement("label"); label.className="option"+(answers[currentIndex]===i?" selected":""); const input=document.createElement("input"); input.type="radio"; input.name="answer"; input.checked=answers[currentIndex]===i; input.addEventListener("change",()=>{answers[currentIndex]=i;renderQuestion();renderPalette();}); const letter=document.createElement("span");letter.className="letter";letter.textContent=labels[i];const text=document.createElement("span");text.className="option-text";text.textContent=opt;label.append(input,letter,text);opts.appendChild(label); });
    $("prev-btn").disabled=currentIndex===0; $("prev-btn").style.opacity=currentIndex===0?".45":"1"; $("next-btn").textContent=currentIndex===questions.length-1?"Review & Submit →":"Save & Next →";
  }
  function submitExam(fromTimer=false) {
    if (!fromTimer && !confirm(`Submit Set ${currentSet}? You answered ${Object.keys(answers).length} of 60 questions.`)) return;
    clearInterval(timerId); timerId=null; exam.classList.add("hidden"); result.classList.remove("hidden");
    const correct=questions.reduce((n,q,i)=>n+(answers[i]===q.answer?1:0),0); const attempted=Object.keys(answers).length; const percent=Math.round(correct/60*100); const elapsed=Math.min(90*60,Math.floor((Date.now()-startedAt)/1000));
    $("result-title").textContent=endedByTimeout?"Time is up!":"Set "+currentSet+" completed"; $("result-summary").textContent=endedByTimeout?"Your time limit ended and the exam was submitted automatically.":"Your answers have been checked against the answer key."; $("score-stat").textContent=`${correct}/60`; $("percent-stat").textContent=`${percent}%`; $("answered-stat").textContent=`${attempted}/60`; $("time-stat").textContent=`${String(Math.floor(elapsed/60)).padStart(2,"0")}:${String(elapsed%60).padStart(2,"0")}`;
    renderReview(); window.scrollTo({top:0,behavior:"smooth"});
  }
  function renderReview(){const box=$("review-list");box.innerHTML="";questions.forEach((q,i)=>{const item=document.createElement("div");item.className="review-item";const h=document.createElement("h4");h.textContent=`${i+1}. ${q.question}`;const user=document.createElement("p");user.textContent=`Your answer: ${Object.hasOwn(answers,i)?labels[answers[i]]+". "+q.options[answers[i]]:"Not answered"}`;user.className=answers[i]===q.answer?"correct-text":"wrong-text";const correct=document.createElement("p");correct.className="correct-text";correct.textContent=`Correct answer: ${labels[q.answer]}. ${q.options[q.answer]}`;item.append(h,user,correct);box.appendChild(item);});}
  document.querySelectorAll("[data-start]").forEach(btn=>btn.addEventListener("click",()=>startSet(Number(btn.dataset.start))));
  $("prev-btn").addEventListener("click",()=>{if(currentIndex>0){currentIndex--;renderQuestion();renderPalette();}});
  $("next-btn").addEventListener("click",()=>{if(currentIndex<59){currentIndex++;renderQuestion();renderPalette();}else submitExam(false);});
  $("clear-btn").addEventListener("click",()=>{delete answers[currentIndex];renderQuestion();renderPalette();});
  $("submit-side").addEventListener("click",()=>submitExam(false));
  $("home-btn").addEventListener("click",()=>{result.classList.add("hidden");home.classList.remove("hidden");$("review-list").classList.add("hidden");window.scrollTo({top:0,behavior:"smooth"});});
  $("review-btn").addEventListener("click",()=>{$("review-list").classList.toggle("hidden");$("review-btn").textContent=$("review-list").classList.contains("hidden")?"Review answers":"Hide review";});
  // Run a quick bank-level integrity check on page load.
  const all=banks.flatMap(b=>b.questions); const seen=new Set();
  for(const q of all){if(!q.question||!Array.isArray(q.options)||q.options.length!==4||new Set(q.options).size!==4||q.answer<0||q.answer>3||!q.options[q.answer])throw new Error("Question bank integrity check failed.");if(seen.has(q.question))throw new Error("Duplicate question exists across question banks.");seen.add(q.question);}
  if(all.length!==180)throw new Error(`Expected 180 questions, found ${all.length}.`);
})();
