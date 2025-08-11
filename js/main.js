
// Main interactive JS for Express Studio 2.0 demo site
document.getElementById('year').textContent = new Date().getFullYear();

// Very minimal AI demo handler: tries to call /api/ai (not included). If the endpoint fails, show Not available.
document.getElementById('aiSend').addEventListener('click', async function(){
  const prompt = document.getElementById('aiPrompt').value.trim();
  const out = document.getElementById('aiOutput');
  if(!prompt){ out.textContent = 'Please enter a prompt.'; return; }
  out.textContent = 'Sending...';

  try{
    const resp = await fetch('/api/ai', {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({prompt})
    });
    if(!resp.ok){
      out.textContent = 'AI not available (backend returned an error).';
      return;
    }
    const data = await resp.json();
    out.textContent = data.answer || JSON.stringify(data);
  }catch(e){
    out.textContent = 'AI not available (network error or API not configured).';
  }
});
