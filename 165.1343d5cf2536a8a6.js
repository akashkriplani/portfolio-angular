"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[165],{165:(v,u,c)=>{c.r(u),c.d(u,{ExperienceComponent:()=>M});var m=c(6895),p=c(8159),i=c(8274);let o=(()=>{class a{constructor(r,t){this.elementRef=r,this.renderer=t}onScroll(){this.toggleView()}ngOnInit(){this.toggleView()}toggleView(){this.isElementInViewport(this.elementRef.nativeElement)?this.elementRef.nativeElement.classList.contains(this.className)||this.renderer.addClass(this.elementRef.nativeElement,this.className):this.elementRef.nativeElement.classList.contains(this.className)&&this.renderer.removeClass(this.elementRef.nativeElement,this.className)}isElementInViewport(r){const t=r.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}static#e=this.\u0275fac=function(t){return new(t||a)(i.Y36(i.SBq),i.Y36(i.Qsj))};static#t=this.\u0275dir=i.lG2({type:a,selectors:[["","appTimeline",""]],hostBindings:function(t,e){1&t&&i.NdJ("scroll",function(){return e.onScroll()},!1,i.Jf7)},inputs:{className:["customClassName","className"]},standalone:!0})}return a})();var f=c(7224);const O=["title"];function C(a,_){if(1&a&&(i.TgZ(0,"li",4)(1,"div")(2,"time"),i._uU(3),i.qZA(),i.TgZ(4,"div",5)(5,"h2"),i._uU(6),i.qZA(),i.TgZ(7,"p"),i._uU(8),i.qZA(),i.TgZ(9,"span"),i._uU(10),i.qZA()()()()),2&a){const r=_.$implicit;i.xp6(3),i.Oqu(r.yearRange),i.xp6(3),i.Oqu(r.company),i.xp6(2),i.Oqu(r.designation),i.xp6(2),i.Oqu(r.role)}}let M=(()=>{class a{constructor(r){this.renderer=r,this.experience=f.UO}ngAfterViewInit(){new p.Z("h1",{returnGenerated:!0,delimiter:"character",tag:"span",search:!1,customClass:"",aria:!0,debug:!1,name:"blast"});let r=this.titlePieces.nativeElement.children,t=0;for(const e of Array.from(r))setTimeout(()=>{this.renderer.addClass(e,"animated"),this.renderer.addClass(e,"bounceIn")},t),t+=100,setTimeout(()=>{this.renderer.removeClass(e,"animated"),this.renderer.removeClass(e,"bounceIn"),this.renderer.setStyle(e,"opacity",1),e.addEventListener("mouseenter",()=>{this.renderer.addClass(e,"animated"),this.renderer.addClass(e,"rubberBand")}),e.addEventListener("mouseleave",()=>{this.renderer.removeClass(e,"animated"),this.renderer.removeClass(e,"rubberBand")})},1500)}static#e=this.\u0275fac=function(t){return new(t||a)(i.Y36(i.Qsj))};static#t=this.\u0275cmp=i.Xpm({type:a,selectors:[["app-experience"]],viewQuery:function(t,e){if(1&t&&i.Gf(O,5),2&t){let n;i.iGM(n=i.CRH())&&(e.titlePieces=n.first)}},standalone:!0,features:[i.jDz],decls:7,vars:1,consts:[[1,"timeline"],[1,"header"],["title",""],["appTimeline","","customClassName","in-view",4,"ngFor","ngForOf"],["appTimeline","","customClassName","in-view"],[1,"discovery"]],template:function(t,e){1&t&&(i.TgZ(0,"section",0)(1,"header",1)(2,"h1",null,2),i._uU(4,"Work History"),i.qZA()(),i.TgZ(5,"ul"),i.YNc(6,C,11,4,"li",3),i.qZA()()),2&t&&(i.xp6(6),i.Q6J("ngForOf",e.experience))},dependencies:[m.ez,m.sg,o],styles:['.timeline[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{text-align:center;width:100%;top:5%}.timeline[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:4rem;padding:5px 0}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-bottom:200px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;position:relative;width:6px;margin:0 auto;padding-top:50px;background:#fff}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;bottom:0;transform:translate(-50%) rotate(45deg);width:20px;height:20px;z-index:2;background:#eee}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;bottom:0;width:500px;padding:20px;background:rgba(255,255,255,.1);box-shadow:4px 13px 30px 1px #543ab733;border-radius:5px;display:flex;align-items:center}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{position:absolute;background:#f5af19;width:150px;height:30px;top:-15px;border-radius:5px;display:flex;justify-content:center;align-items:center;letter-spacing:2px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:100px;display:flex;flex-direction:column;justify-content:center;align-items:center}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .discovery[_ngcontent-%COMP%]{margin-right:10px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)>div{left:45px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)>div{left:-539px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{visibility:hidden;opacity:0;transition:all .5s ease-in-out}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd) div{transform:translate3d(100px,-10px,0) rotate(10deg)}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even) div{transform:translate3d(-100px,-10px,0) rotate(10deg)}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.in-view[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:none;visibility:visible;opacity:1}@media screen and (max-width: 900px){.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:250px;flex-direction:column}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:80%;margin:10px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)>div{left:-289px}}@media screen and (max-width: 600px){body[_ngcontent-%COMP%]{background:#8bfff4}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:20px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:calc(100vw - 91px)}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)>div{left:45px}}']})}return a})()},8159:(v,u,c)=>{function p(t){let e,n="",l=0;const s=t.nodeType;if(s){if(1===s||9===s||11===s){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=getText(t)}else if(3===s||4===s)return t.nodeValue}else for(;e=t[l++];)n+=getText(e);return n}c.d(u,{Z:()=>r});const o_latinLetters="\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u017F\\u0100-\\u01FF\\u0180-\\u027F",f={abbreviations:new RegExp("[^"+o_latinLetters+"](e\\.g\\.)|(i\\.e\\.)|(mr\\.)|(mrs\\.)|(ms\\.)|(dr\\.)|(prof\\.)|(esq\\.)|(sr\\.)|(jr\\.)[^"+o_latinLetters+"]","ig"),innerWordPeriod:new RegExp("["+o_latinLetters+"].["+o_latinLetters+"]","ig"),onlyContainsPunctuation:new RegExp("[^\u2013\u2014\u2032\u2019'\u201c\u2033\u201e\"(\xab.\u2026\xa1\xbf\u2032\u2019'\u201d\u2033\u201c\")\xbb.\u2026!?]"),adjoinedPunctuation:new RegExp("^[\u2013\u2014\u2032\u2019'\u201c\u2033\u201e\"(\xab.\u2026\xa1\xbf\u2032\u2019'\u201d\u2033\u201c\")\xbb.\u2026!?]+|[\u2013\u2014\u2032\u2019'\u201c\u2033\u201e\"(\xab.\u2026\xa1\xbf\u2032\u2019'\u201d\u2033\u201c\")\xbb.\u2026!?]+$","g"),skippedElements:/(script|style|select|textarea)/i,hasPluginClass:new RegExp("(^| )blast( |$)","gi")};function C(t){return t.replace(/{{(\d{1,3})}}/g,function(e,n){return String.fromCharCode(n)})}const _=function a(t,e){let n=-1,l=0;if(3===t.nodeType&&t.data.length){if(Element.nodeBeginning&&(t.data=e.search||"sentence"!==e.delimiter?C(t.data):function O(t){return t.replace(exports.Reg.abbreviations,function(e){return e.replace(/\./g,"{{46}}")}).replace(exports.Reg.innerWordPeriod,function(e){return e.replace(/\./g,"{{46}}")})}(t.data),Element.nodeBeginning=!1),n=t.data.search(e.processedDelimiterRegex),-1!==n){var s=t.data.match(e.processedDelimiterRegex),d=s[0],h=s[1]||!1;""===d?n++:h&&h!==d&&(n+=d.indexOf(h),d=h);var g=t.splitText(n);g.splitText(d.length),l=1,!e.search&&"sentence"===e.delimiter&&(g.data=C(g.data));var x=((t,e)=>{const n=document.createElement(e.tag);if(n.className=e.name,e.customClass&&(n.className+=" "+e.customClass,e.generateIndexID&&(n.id=e.customClass+"-"+Element.blastedIndex)),"all"===e.delimiter&&/\s/.test(t.data)&&(n.style.whiteSpace="pre-line"),!0===e.generateValueClass&&!e.search&&("character"===e.delimiter||"word"===e.delimiter)){var l,s=t.data;"word"===e.delimiter&&Reg.onlyContainsPunctuation.test(s)&&(s=s.replace(Reg.adjoinedPunctuation,"")),l=NAME+"-"+e.delimiter.toLowerCase()+"-"+s.toLowerCase(),n.className+=" "+l}return e.aria&&n.setAttribute("aria-hidden","true"),n.appendChild(t.cloneNode(!1)),n})(g,e,Element);g.parentNode.replaceChild(x,g),Element.wrappers.push(x),Element.blastedIndex++}}else if(1===t.nodeType&&t.hasChildNodes()&&!f.skippedElements.test(t.tagName)&&!f.hasPluginClass.test(t.className))for(var P=0;P<t.childNodes.length;P++)Element.nodeBeginning=!0,P+=a(t.childNodes[P],e);return l};class r{constructor(e,n={}){this.elements=[],this.elements="string"==typeof e?Array.from(document.querySelectorAll(e)):[e],this.opts={returnGenerated:n.returnGenerated||!0,delimiter:n.delimiter||"word",tag:n.tag||"span",search:n.search||!1,customClass:n.customClass||"",generateIndexID:n.generateIndexID||!1,generateValueClass:n.generateValueClass||!1,aria:!n.hasOwnProperty("aria")||n.aria,debug:n.debug||!1,name:n.name||"blast"},Element={blastedIndex:0,nodeBeginning:!1,wrappers:Element.wrappers||[]};const l=this.createDelimiters();this.opts.processedDelimiter=l.delimiter,this.opts.processedDelimiterRegex=l.delimiterRegex,this.processedElements=this.processElements(),this.opts.debug&&console.time("blast"),this.processedElements.map(s=>{_(s,this.opts)}),this.opts.debug&&console.timeEnd("blast")}createDelimiters(e=null){return function m(t){let n,e=t.delimiter;if(t.search.length&&("string"==typeof t.search||/^\d/.test(parseFloat(t.search))))e=t.search.toString().replace(/[-[\]{,}(.)*+?|^$\\\/]/g,"\\$&"),n=new RegExp("(?:^|[^-"+characterRanges.latinLetters+"])("+e+"('s)?)(?![-"+characterRanges.latinLetters+"])","i");else switch("string"==typeof e&&(e=e.toLowerCase()),e){case"all":n=/(.)/;break;case"letter":case"char":case"character":n=/(\S)/;break;case"word":n=/\s*(\S+)\s*/;break;case"sentence":n=/(?=\S)(([.]{2,})?[^!?]+?([.\u2026!?]+|(?=\s+$)|$)(\s*[\u2032\u2019'\u201d\u2033\u201c")\xbb]+)*)/;break;case"element":n=/(?=\S)([\S\s]*\S)/;break;default:e instanceof RegExp?n=e:console.log(NAME+": Unrecognized delimiter, empty search string, or invalid custom Regex. Aborting.")}return{delimiter:e,delimiterRegex:n}}(e||this.opts)}getText(e){return p(e)}processElements(e=null,n=null){return((t,e)=>t.map(n=>{const l=p(n);let s=e.tag||"span";try{document.createElement(s)}catch{s="span",e.debug&&console.log(NAME+": Invalid tag supplied. Defaulting to span.")}return e.aria&&n.setAttribute("aria-label",l),n.classList.add("blast-root"),n}))(e||this.elements,n||this.opts)}}}}]);