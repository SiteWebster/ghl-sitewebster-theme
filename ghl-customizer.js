/* ================================================
   SiteWebster — GHL Customizer JS
   ================================================ */
(function(){
  const C = {
    agencyName: "SiteWebster",
    logoUrl: "https://framerusercontent.com/images/HXoaHp5PKzod5mZV3M1UAo6Js.png",
    dashboardTitle: "Welcome to SiteWebster",
    themeMode: "dark"
  };

  function applyLogo(){
    if(!C.logoUrl) return;
    document.querySelectorAll('.agency-logo img,.sidebar-logo img,.hl_logo img,.login__logo img').forEach(el=>{
      el.src = C.logoUrl;
    });
  }

  function applyTitle(){
    if(!C.dashboardTitle) return;
    document.querySelectorAll('.dashboard-title,.page-title h1').forEach(el=>{
      el.textContent = C.dashboardTitle;
    });
  }

  function applyDarkMode(){
    if(C.themeMode==='dark') document.body.classList.add('dark-mode','theme-dark');
    else document.body.classList.remove('dark-mode','theme-dark');
  }

  function run(){
    applyLogo();
    applyTitle();
    applyDarkMode();
    console.log('SiteWebster GHL theme loaded ✓');
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', run);
  } else { run(); }

  new MutationObserver(()=>{ applyLogo(); applyTitle(); })
    .observe(document.body,{childList:true,subtree:true});
})();
