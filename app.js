
function toggleNav(button){
  const nav=document.getElementById('nav');
  if(!nav) return;
  const open=nav.classList.toggle('open');
  if(button) button.setAttribute('aria-expanded', String(open));
}
