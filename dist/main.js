(()=>{"use strict";const e=document.getElementById("content");let t;const n=function(){const e=document.createElement("section");main.appendChild(e);const t=document.createElement("div");t.classList.add("heading"),e.appendChild(t);const n=document.createElement("h1");n.textContent="Steak House",t.appendChild(n);const o=document.createElement("p");o.textContent="Best in Town",t.appendChild(o);const a=document.createElement("img");a.setAttribute("src","./img/home-1.jpg"),e.appendChild(a);const c=document.createElement("p");c.classList.add("description"),c.textContent="Welcome to the Stake House, where we serve the best steaks in town. Our menu features a wide variety of mouth-watering cuts, cooked to perfection and seasoned with the finest spices. Come dine with us and enjoy a cozy atmosphere and excellent service. Whether you're in the mood for a classic T-bone or a juicy ribeye, we've got you covered. Don't believe us? Try it out for yourself and see why we're the go-to spot for steak lovers. Book your table today!",e.appendChild(c)};function o(){main.childNodes.forEach((e=>{e.remove()}))}function a(){document.querySelectorAll("a").forEach((e=>e.classList.remove("tab-active")))}function c(e){e.classList.add("tab-active")}!function(){const t=document.createElement("header");t.classList.add("header"),e.appendChild(t);const n=document.createElement("nav");t.appendChild(n);const o=document.createElement("img");o.setAttribute("src","img/logo-3.png"),o.classList.add("logo"),n.appendChild(o);const a=document.createElement("ul");n.appendChild(a);const c=document.createElement("li");c.setAttribute("id","li-home"),a.appendChild(c);const d=document.createElement("a");d.classList.add("tab-active"),d.textContent="Home",c.appendChild(d);const s=document.createElement("li");s.setAttribute("id","li-menu"),a.appendChild(s);const i=document.createElement("a");i.textContent="Menu",s.appendChild(i);const m=document.createElement("li");m.setAttribute("id","li-contact"),a.appendChild(m);const l=document.createElement("a");l.textContent="Contact",m.appendChild(l)}(),t=document.createElement("main"),t.setAttribute("id","main"),e.appendChild(t),function(){const t=document.createElement("footer");e.appendChild(t);const n=document.createElement("p");n.classList.add("author"),n.textContent="Made with code Karol Karnas 2023",t.appendChild(n);const o=document.createElement("div");o.classList.add("copyrights"),t.appendChild(o);const a=document.createElement("a");a.textContent="Logo designed by macrovector",a.setAttribute("href","http://www.freepik.com"),o.appendChild(a);const c=document.createElement("a");c.textContent="Image by fxquadro",c.setAttribute("href","https://www.freepik.com/free-photo/master-chef-wearing-uniform-cooking-delicious-beef-steak-kitchen-restaurant_30806468.htm#page=3&query=steak%20house&position=9&from_view=search&track=sph"),o.appendChild(c);const d=document.createElement("a");d.textContent="Image by KamranAydinov",d.setAttribute("href","https://www.freepik.com/free-photo/grilled-t-bone-steak-served-with-salt-herbs-grilled-cherry-tomatoes_7268936.htm#query=tbone&position=1&from_view=search&track=sph"),o.appendChild(d);const s=document.createElement("a");s.textContent="Image by Freepik",s.setAttribute("href","https://www.freepik.com/free-photo/top-view-map-blue-background_11512903.htm#query=location&position=8&from_view=search&track=sph"),o.appendChild(s)}(),n(),document.getElementById("li-home").addEventListener("click",(e=>{o(),n(),a(),c(e.target)})),document.getElementById("li-menu").addEventListener("click",(e=>{o(),function(){const e=document.createElement("section");main.appendChild(e);const t=document.createElement("div");t.classList.add("heading"),e.appendChild(t);const n=document.createElement("h1");n.textContent="Menu",t.appendChild(n);const o=document.createElement("p");o.textContent="steak house",t.appendChild(o);const a=document.createElement("img");a.classList.add("menu-img"),a.setAttribute("src","./img/menu-rib-eye.jpg"),e.appendChild(a);const c=document.createElement("p");c.classList.add("menu-txt"),c.textContent="Rib-Eye",e.appendChild(c);const d=document.createElement("span");d.textContent=" 109zł",c.appendChild(d);const s=document.createElement("img");s.classList.add("menu-img","menu-img-margin"),s.setAttribute("src","./img/menu-t-bone.jpg"),e.appendChild(s);const i=document.createElement("p");i.classList.add("menu-txt"),i.textContent="T-Bone",e.appendChild(i);const m=document.createElement("span");m.textContent=" 309zł",i.appendChild(m);const l=document.createElement("img");l.classList.add("menu-img","menu-img-margin"),l.setAttribute("src","./img/menu-steak.jpg"),e.appendChild(l);const r=document.createElement("p");r.classList.add("menu-txt"),r.textContent="Steak",e.appendChild(r);const p=document.createElement("span");p.textContent=" 209zł",r.appendChild(p)}(),a(),c(e.target)})),document.getElementById("li-contact").addEventListener("click",(e=>{o(),function(){const e=document.createElement("section");e.classList.add("section-contact"),main.appendChild(e);const t=document.createElement("div");t.classList.add("heading"),e.appendChild(t);const n=document.createElement("h1");n.textContent="Contact Information",t.appendChild(n);const o=document.createElement("p");o.textContent="steak house",t.appendChild(o);const a=document.createElement("p");a.classList.add("contact-details"),a.textContent="Address: ",e.appendChild(a);const c=document.createElement("span");c.textContent="123 Main St, AnyTown USA 12345",a.appendChild(c);const d=document.createElement("p");d.classList.add("contact-details"),d.textContent="Phone Number: ",e.appendChild(d);const s=document.createElement("span");s.textContent="555-555-5555",d.appendChild(s);const i=document.createElement("p");i.textContent="Hours of Operation:",e.appendChild(i);const m=document.createElement("p");m.textContent="Monday-Friday: ",e.appendChild(m);const l=document.createElement("span");l.textContent="11am-10pm",m.appendChild(l);const r=document.createElement("p");r.classList.add("contact-details"),r.textContent="Saturday-Sunday: ",e.appendChild(r);const p=document.createElement("span");p.textContent="4pm-11pm",r.appendChild(p);const u=document.createElement("img");u.classList.add("menu-img"),u.setAttribute("src","./img/contact-map.jpg"),e.appendChild(u)}(),a(),c(e.target)}))})();