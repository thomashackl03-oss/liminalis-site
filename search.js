
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function runSearch(){
  const box=document.getElementById("searchResults");
  const input=document.getElementById("q");
  if(!box||!input) return;
  const q=input.value.trim().toLowerCase();
  const data=window.LIMINALIS_SEARCH_INDEX||[];
  const matches=data.filter(item=>{
    const hay=[item.title,item.category,item.excerpt,...(item.tags||[])].join(" ").toLowerCase();
    return !q||hay.includes(q);
  });
  box.innerHTML=matches.length?matches.map(item=>`
    <a class="card search-result" href="${esc(item.url)}">
      <span class="kicker">${esc(item.category)}</span>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.excerpt)}</p>
    </a>`).join(""):`<p class="empty">Keine Treffer gefunden.</p>`;
}
document.addEventListener("DOMContentLoaded",()=>{
  const q=document.getElementById("q");
  if(q){
    q.addEventListener("keydown",e=>{if(e.key==="Enter")runSearch();});
    runSearch();
  }
});
