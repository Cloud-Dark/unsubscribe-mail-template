var windowWidth=window.innerWidth,windowHeight=window.innerHeight;function setWindowSize(){windowWidth=window.innerWidth,windowHeight=window.innerHeight}window.addEventListener("resize",setWindowSize);var eyes=document.querySelectorAll(".eyes"),cursorPos={x:0,y:0};function mousemove(e){cursorPos={x:e.clientX,y:e.clientY},clicked||eyes.forEach(function(e){eyeFollow.init(e)})}function touchmove(e){cursorPos={x:e.targetTouches[0].offsetX,y:e.targetTouches[0].offsetY},clicked||eyes.forEach(function(e){eyeFollow.init(e)})}window.addEventListener("mousemove",mousemove),window.addEventListener("touchmove",touchmove);var clicked,cancelled,eyeFollow=function(){function e(e){var o,n=(o=e,console.log(o),{x:(o=o.getBoundingClientRect()).left+window.scrollX,y:o.top+window.scrollY}),t=e.getBBox(),a=n.x+t.width/2,r=n.y+t.height/2,s=Math.round(100*(cursorPos.y-r)/windowHeight),i=Math.round(100*(cursorPos.x-a)/windowWidth);e.style.transform=`translate(${i/5}px, ${s/5}px)`}return{init:o=>{e(o)}}}(),animate=function(){var e=function(e){return document.getElementById(e)},o=(e("svg"),e("blob-1")),n=e("blob-3"),t=e("envelope"),a=e("eye-group"),r=e("paper-group"),s=e("mouth"),i=e("mouth-happy"),w=e("mouth-scared"),l=e("mouth-sad"),d=MorphSVGPlugin.convertToPath(e("eye-left")),c=MorphSVGPlugin.convertToPath(e("eye-right")),u=e("eye-laughing-left"),y=e("eye-laughing-right"),h=e("eyebrow-happy-left"),M=e("eyebrow-happy-right"),x=e("eyebrow-sad-left"),m=e("eyebrow-sad-right"),T=e("mouth-worry"),p=e("open-mouth"),f=e("tongue"),v=e("unsubscribe"),P=e("cancel"),g=e("go-back"),N=document.querySelectorAll("#confetti > *"),k=document.querySelector(".title"),b=document.querySelector(".subtitle"),S=new TimelineMax;v.addEventListener("mouseover",Y),P.addEventListener("mouseover",q),v.addEventListener("touchstart",Y),P.addEventListener("touchstart",q),v.addEventListener("click",function(){TweenMax.to(T,.2,{morphSVG:l,ease:Power0.easeNone}),TweenMax.to(a,.2,{y:15}),TweenMax.to(x,.2,{y:10}),TweenMax.to(m,.2,{y:10}),k.innerHTML="We are sad to see you go!",b.innerHTML="You have been unsubscribed and will no longer hear from us.",v.style.display="none",P.style.display="none",g.style.display="block",clicked=!0,S.remove(H)}),P.addEventListener("click",function(){S.add(V.play()),S.add(W.play());TweenMax.to(d,.1,{morphSVG:u,ease:Power0.easeNone}),TweenMax.to(d,.1,{stroke:"#543093",fill:"none",ease:Power0.easeNone}),TweenMax.to(c,.1,{morphSVG:y,ease:Power0.easeNone}),TweenMax.to(c,.1,{stroke:"#543093",fill:"none",ease:Power0.easeNone}),TweenMax.to(T,.1,{morphSVG:p,ease:Power0.easeNone}),TweenMax.to(T,.1,{fill:"#543093",stroke:"none",ease:Power0.easeNone}),TweenMax.to(f,.1,{css:{display:"block"},ease:Power0.easeNone}),TweenMax.to(a,.1,{y:10}),TweenMax.to(x,.1,{y:0}),TweenMax.to(m,.1,{y:0}),k.innerHTML="Thanks for staying with us!",b.innerHTML="You will continue to receive our weekly newsletter. Yay!",v.style.display="none",P.style.display="none",g.style.display="block",clicked=!0,cancelled=!0}),v.addEventListener("mouseout",B),P.addEventListener("mouseout",B),v.addEventListener("touchleave",B),P.addEventListener("touchleave",B),g.addEventListener("click",function(){clicked=!1,cancelled=!1,I(),S.remove(V),S.remove(W),N.forEach(function(e){TweenMax.set(e,{x:0,y:0,rotation:0})}),k.innerHTML="Do you want to unsubscribe?",b.innerHTML="If you unsubscribe, you will stop receiving our weekly newsletter.",v.style.display="block",P.style.display="block",g.style.display="none"});var L,E,G,V=((L=new TimelineMax({repeat:-1,repeatDelay:1,delay:.5,paused:!0})).to(t,.15,{y:-20,ease:Power0.easeNone}).to(t,.15,{y:0,ease:Power0.easeNone}).to(t,.15,{y:-10,ease:Power0.easeNone}).to(t,.15,{y:0,ease:Power0.easeNone}).to(t,.15,{y:-5,ease:Power0.easeNone}).to(t,.15,{y:0,ease:Power0.easeNone}),L),H=((E=new TimelineMax({repeat:-1,paused:!0})).to(t,.1,{x:-1,ease:Power0.easeNone}).to(t,.1,{x:1,ease:Power0.easeNone}),E),W=(G=new TimelineMax({paused:!0}),N.forEach(function(e){var o=random(0,360),n=random(0,6),t=(random(.5,1),new TimelineMax({delay:n})),a=250*Math.cos(o*Math.PI/180),r=250*Math.sin(o*Math.PI/180);TweenMax.set(e,{autoAlpha:1}),t.to(e,3,{x:a,y:r,ease:Power0.easeOut,rotation:360,repeat:-1}),G.add(t,0)}),G);function Y(){S.add(H.play());TweenMax.to(T,.2,{morphSVG:w,ease:Power0.easeNone}),TweenMax.to(r,.2,{y:15}),TweenMax.to(a,.2,{y:5}),TweenMax.to(s,.2,{y:5}),TweenMax.to(x,.2,{y:5}),TweenMax.to(m,.2,{y:5})}function q(){TweenMax.to(T,.2,{morphSVG:i,ease:Power0.easeNone}),TweenMax.to(x,.2,{morphSVG:h,ease:Power0.easeNone}),TweenMax.to(m,.2,{morphSVG:M,ease:Power0.easeNone}),TweenMax.to(s,.2,{y:10}),TweenMax.to(x,.2,{y:-10}),TweenMax.to(m,.2,{y:-10})}function B(){if(S.remove(H),!clicked){TweenMax.to(T,.1,{morphSVG:T,ease:Power0.easeNone}),TweenMax.to(T,.1,{fill:"none",stroke:"#543093",ease:Power0.easeNone}),TweenMax.to(f,.1,{css:{display:"none"},ease:Power0.easeNone}),TweenMax.to(x,.1,{morphSVG:x,ease:Power0.easeNone}),TweenMax.to(m,.1,{morphSVG:m,ease:Power0.easeNone}),TweenMax.to(r,.1,{y:0}),TweenMax.to(a,.1,{y:0}),TweenMax.to(s,.1,{y:0}),TweenMax.to(x,.1,{y:0}),TweenMax.to(m,.1,{y:0}),TweenMax.to(d,.1,{morphSVG:d,ease:Power0.easeNone}),TweenMax.to(d,.1,{stroke:"none",fill:"#543093",ease:Power0.easeNone}),TweenMax.to(c,.1,{morphSVG:c,ease:Power0.easeNone}),TweenMax.to(c,.1,{stroke:"none",fill:"#543093",ease:Power0.easeNone})}}function I(){clicked=!1,B(),new TimelineMax({repeat:-1}).to(o,10,{morphSVG:n,ease:Power0.easeNone}).to(o,10,{morphSVG:o,ease:Power0.easeNone})}return{init:()=>{I()}}}();function random(e,o){return null==o&&(o=e,e=0),Math.random()*(o-e)+e}document.addEventListener("DOMContentLoaded",animate.init());
