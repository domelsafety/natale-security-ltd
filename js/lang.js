(function(){
var D={
'Kuhusu Sisi':'About Us','Mwanzo':'Home','Huduma':'Services','Tuzo':'Awards','Maswali':'FAQ','Mawasiliano':'Contact','Kuhusu':'About',
'Ulinzi wa Uhakika Dar es Salaam':'Reliable Security in Dar es Salaam','Tuzo na Mafanikio':'Awards & Achievements',
'Kuhusu NATALE SECURITY LIMITED, dira, dhamira na kauli mbiu.':'About NATALE SECURITY LIMITED: vision, mission and motto.',
'Tuzo ya Best Hospital Security Company of the Year 2026 (TSSA) kwa NATALE SECURITY LIMITED.':'NATALE SECURITY LIMITED wins Best Hospital Security Company of the Year 2026 (TSSA).',
'Wasiliana na NATALE SECURITY LIMITED, Kimara Baruti, Dar es Salaam.':'Contact NATALE SECURITY LIMITED, Kimara Baruti, Dar es Salaam.',
'Maswali na majibu kuhusu huduma za NATALE SECURITY LIMITED.':'Questions and answers about NATALE SECURITY LIMITED services.',
'NATALE SECURITY LIMITED: huduma za ulinzi Dar es Salaam. Mshindi wa Best Hospital Security Company of the Year 2026.':'NATALE SECURITY LIMITED: security services in Dar es Salaam. Winner of Best Hospital Security Company of the Year 2026.',
'Huduma za ulinzi: walinzi, CCTV, doria, VIP na matukio, ulinzi wa hospitali.':'Security services: guards, CCTV, patrols, VIP and events, hospital security.',
'Nembo la NATALE SECURITY LIMITED':'NATALE SECURITY LIMITED logo','Video ya NATALE SECURITY LIMITED':'NATALE SECURITY LIMITED video',
'Kuhusu NATALE SECURITY LIMITED':'About NATALE SECURITY LIMITED',
'Kampuni ya ulinzi yenye makao Kimara Baruti, Dar es Salaam.':'A security company based in Kimara Baruti, Dar es Salaam.',
'Kauli Mbiu':'Motto','Usalama wako wajibu wetu.':'Your safety is our duty.','Usalama wako wajibu wetu':'Your safety is our duty',
'Dhamira':'Mission','Kutoa ulinzi wa uhakika kwa walinzi waliofunzwa, wenye nidhamu na uaminifu.':'To provide dependable protection through trained, disciplined and trustworthy guards.',
'Dira':'Vision','Kuwa kampuni ya ulinzi inayoaminika zaidi kwa wateja wake.':'To be the security company our clients trust most.',
'Tuzo ya 2026':'2026 Award','TUZO YA 2026':'2026 AWARD',
'Best Hospital Security Company of the Year 2026 — Tanzania Security Services Awards (TSSA)':'Best Hospital Security Company of the Year 2026 — Tanzania Security Services Awards (TSSA)',
'Tuko tayari kukulinda.':'We are ready to protect you.','Mali yako, familia yako na biashara yako — salama saa 24.':'Your property, your family and your business — safe 24 hours a day.',
'Piga Simu Sasa':'Call Now','Tuandikie WhatsApp':'Message Us on WhatsApp','Simu':'Phone','Simu ya pili':'Second phone','Ofisi':'Office',
'Kimara Baruti, UDSM Road, Plot No. 265':'Kimara Baruti, UDSM Road, Plot No. 265','Sanduku la Posta':'P.O. Box','P.O. Box 31877, Dar es Salaam':'P.O. Box 31877, Dar es Salaam',
'© 2026 NATALE SECURITY LIMITED. Haki zote zimehifadhiwa.':'© 2026 NATALE SECURITY LIMITED. All rights reserved.',
'Tovuti imebuniwa na kusimamiwa na':'Website designed and managed by',
'Tumeshinda tuzo hii kutoka Tanzania Security Services Awards 2026 (TSSA). Asante kwa imani ya wateja wetu na juhudi ya walinzi wetu.':'We won this award at the Tanzania Security Services Awards 2026 (TSSA). Thank you to our clients for their trust and to our guards for their hard work.',
'Wasiliana Nasi':'Contact Us','Tuma ombi lako; litafunguka kwenye WhatsApp yetu.':'Send your request; it will open in our WhatsApp.','Jina':'Name','Ujumbe':'Message','Tuma kupitia WhatsApp':'Send via WhatsApp',
'Walinzi (Manned Guarding)':'Manned Guarding','Ulinzi wa Maeneo ya Ujenzi':'Construction Site Security','Mbwa wa Ulinzi':'Security Dogs','Ufuatiliaji wa Walinzi kwa Simu':'Mobile Guard Monitoring','Ulinzi wa VIP na Matukio':'VIP & Event Security','Doria na Kukabiliana na Tahadhari':'Patrol & Alarm Response','CCTV na Ufuatiliaji wa Mbali':'CCTV & Remote Monitoring','Usindikizaji wa Fedha na Mali':'Cash & Asset Escort',
'Maswali Yanayoulizwa Mara kwa Mara':'Frequently Asked Questions','Naomba bei ya huduma?':'How do I get a price quote?','Tuma ombi kupitia ukurasa wa Mawasiliano au WhatsApp. Tutatathmini eneo lako kisha kukupa bei.':'Send a request through the Contact page or WhatsApp. We will assess your site and then give you a quote.',
'Mnaanza huduma baada ya muda gani?':'How soon can service start?','Muda hutegemea aina ya huduma; wasiliana nasi kupata ratiba.':'It depends on the type of service; contact us for a schedule.',
'Walinzi wenu wamepata mafunzo?':'Are your guards trained?','Ndiyo, walinzi wetu hupata mafunzo ya nidhamu na majibu ya dharura.':'Yes, our guards receive training in discipline and emergency response.',
'Mnahudumia maeneo gani?':'Which areas do you serve?','Dar es Salaam; wasiliana nasi kuhusu maeneo mengine.':'Dar es Salaam; contact us about other areas.',
'KIMARA BARUTI, DAR ES SALAAM':'KIMARA BARUTI, DAR ES SALAAM','Usalama wako ni wajibu wetu.':'Your safety is our duty.',
'NATALE SECURITY LIMITED inatoa huduma za ulinzi zinazoaminika kwa nyumba, biashara, hospitali na taasisi.':'NATALE SECURITY LIMITED provides trusted security services for homes, businesses, hospitals and institutions.',
'Tupigie Sasa':'Call Us Now','Omba Bei':'Request a Quote','Huduma Zetu':'Our Services','Tunalinda kile kilicho muhimu kwako.':'We protect what matters most to you.',
'Walinzi waliofunzwa na wanaoonekana kulinda eneo lako saa 24.':'Trained, visible guards protecting your premises 24 hours a day.',
'Kuzuia wizi, uharibifu na kuingia bila ruhusa.':'Preventing theft, vandalism and unauthorised entry.',
'Mbwa waliofunzwa pamoja na wakufunzi wao.':'Trained dogs together with their handlers.',
'Mahudhurio, ripoti za matukio na hali ya eneo ukiwa popote.':'Attendance, incident reports and site status, wherever you are.',
'Huduma zote':'All services','Sekta Tunazozilinda':'Sectors We Protect','Mpango wa ulinzi kulingana na hatari za biashara yako.':'A security plan matched to the risks of your business.',
'Hospitali na Afya':'Hospitals & Healthcare','Viwanda':'Manufacturing','Madini':'Mining','Ujenzi':'Construction','Makampuni':'Corporate','Makazi':'Residential','Hoteli':'Hospitality','Elimu':'Education','Biashara':'Retail & Business','Matukio':'Events','Taasisi':'Institutions',
'Suluhisho kamili la ulinzi kwa mahitaji yako.':'Complete security solutions for your needs.',
'Ulinzi wa karibu kwa viongozi na usalama wa harusi na mikutano.':'Close protection for executives, plus security for weddings and conferences.',
'Doria za magari na timu ya kukabiliana haraka.':'Vehicle patrols and a rapid-response team.',
'Kamera za CCTV na ufuatiliaji wa eneo kwa wakati halisi.':'CCTV cameras and real-time monitoring of your premises.',
'Usindikizaji salama wa fedha na bidhaa za thamani.':'Secure escort of cash and high-value goods.',
'Ulinzi wa Hospitali na Taasisi za Afya':'Hospital & Healthcare Security','Tumetunukiwa Best Hospital Security Company of the Year 2026 (TSSA).':'We were awarded Best Hospital Security Company of the Year 2026 (TSSA).'};
var K=['alt','aria-label'],orig=new WeakMap(),attrs=[],lang='sw';
function tr(s,l){var t=s.trim();return l==='en'&&D[t]?s.replace(t,D[t]):s}
function walk(n,f){for(var c=n.firstChild;c;c=c.nextSibling){if(c.nodeType===3)f(c);else if(c.nodeType===1&&!/^(SCRIPT|STYLE)$/.test(c.tagName))walk(c,f)}}
var title0=document.title,meta=document.querySelector('meta[name=description]'),meta0=meta&&meta.content;
function apply(l){lang=l;document.documentElement.lang=l;
walk(document.body,function(t){if(!orig.has(t))orig.set(t,t.nodeValue);t.nodeValue=tr(orig.get(t),l)});
document.querySelectorAll('[alt],[aria-label]').forEach(function(e){K.forEach(function(k){if(e.hasAttribute(k)){var a=e.__o=e.__o||{};if(!(k in a))a[k]=e.getAttribute(k);e.setAttribute(k,tr(a[k],l))}})});
var p=title0.split(' | ');document.title=(l==='en'&&D[p[0]]?D[p[0]]:p[0])+' | '+p.slice(1).join(' | ');
if(meta)meta.content=tr(meta0,l);
document.querySelectorAll('.lg button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l)});
try{localStorage.setItem('lang',l)}catch(e){}}
var box=document.createElement('div');box.className='lg';box.innerHTML='<button data-l="sw" type="button">SW</button><button data-l="en" type="button">EN</button>';
box.onclick=function(e){if(e.target.dataset.l)apply(e.target.dataset.l)};
document.querySelector('header .w').appendChild(box);
var s='sw';try{s=localStorage.getItem('lang')||'sw'}catch(e){}
if(/[?&]lang=en/.test(location.search))s='en';
window.NATALE_LANG=function(){return lang};
apply(s);})();
