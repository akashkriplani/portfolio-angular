"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[905],{2905:(M,g,o)=>{o.r(g),o.d(g,{AboutComponent:()=>h});var m=o(177),f=o(6954),E=o(2815),i=o(3878),c=o(634),a=o(4438);const p=["title"];function _(l,P){if(1&l&&(a.qex(0),a.j41(1,"a",9),a.EFF(2),a.k0s(),a.bVm()),2&l){const t=P.$implicit;a.R7$(),a.Y8G("weight",t.weight),a.R7$(),a.JRh(t.text)}}let h=(()=>{class l{constructor(t){this.renderer=t,this.linkedin=c.Yx.filter(e=>"linkedin"==e.title.toLowerCase().trim())[0],this.tags=c.gp,this.options=c.vl}ngAfterViewInit(){new E.A("h1",{returnGenerated:!0,delimiter:"character",tag:"span",search:!1,customClass:"",aria:!0,debug:!1,name:"blast"});let t=this.titlePieces.nativeElement.children,e=0;for(const n of Array.from(t))setTimeout(()=>{this.renderer.addClass(n,"animated"),this.renderer.addClass(n,"bounceIn")},e),e+=100,setTimeout(()=>{this.renderer.removeClass(n,"animated"),this.renderer.removeClass(n,"bounceIn"),this.renderer.setStyle(n,"opacity",1),n.addEventListener("mouseenter",()=>{this.renderer.addClass(n,"animated"),this.renderer.addClass(n,"rubberBand")}),n.addEventListener("mouseleave",()=>{this.renderer.removeClass(n,"animated"),this.renderer.removeClass(n,"rubberBand")})},1500)}static#e=this.\u0275fac=function(e){return new(e||l)(a.rXU(a.sFG))};static#t=this.\u0275cmp=a.VBU({type:l,selectors:[["app-about"]],viewQuery:function(e,n){if(1&e&&a.GBs(p,5),2&e){let s;a.mGM(s=a.lsd())&&(n.titlePieces=s.first)}},standalone:!0,features:[a.aNF],decls:19,vars:3,consts:[["title",""],[1,"about-me-page"],[1,"about-me-section"],[1,"about-me"],["target","_blank",3,"href"],[1,"tag-canvas"],[1,"canvas-container"],[3,"options"],[4,"ngFor","ngForOf"],["ngTag","",3,"weight"]],template:function(e,n){1&e&&(a.j41(0,"section",1)(1,"div",2)(2,"h1",null,0),a.EFF(4,"About Me"),a.k0s(),a.j41(5,"div",3)(6,"p"),a.EFF(7," I\u2019m a Front-End Developer located in India. I have a serious passion for UI development. I love creating intuitive and dynamic user experiences. I like writing technical content on Medium. "),a.k0s(),a.j41(8,"p"),a.EFF(9," I am a highly-organised person, a problem solver and a meticulous individual contributor. I am a fan of cricket, outdoor activities and TV series. "),a.k0s(),a.j41(10,"p"),a.EFF(11," I'm interested in the entire frontend spectrum and love working on ambitious projects with like-minded people. "),a.k0s(),a.j41(12,"p")(13,"a",4),a.EFF(14,"Let\u2019s collaborate."),a.k0s()()()(),a.j41(15,"div",5)(16,"div",6)(17,"ng-tag-canvas",7),a.DNE(18,_,3,2,"ng-container",8),a.k0s()()()()),2&e&&(a.R7$(13),a.Y8G("href",n.linkedin.profileUrl,a.B4B),a.R7$(4),a.Y8G("options",n.options),a.R7$(),a.Y8G("ngForOf",n.tags))},dependencies:[m.MD,m.Sq,f.iI,i.B5,i.ir,i.cL],styles:[".about-me-page[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.about-me-page[_ngcontent-%COMP%]   .about-me-section[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;flex:1 0 0%}.about-me-page[_ngcontent-%COMP%]   .about-me-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding-top:5rem;font-size:4rem}.about-me-page[_ngcontent-%COMP%]   .about-me-section[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:1rem 5rem;font-size:1rem;text-align:left}.about-me-page[_ngcontent-%COMP%]   .about-me-section[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#08fdd8;text-decoration:none}.about-me-page[_ngcontent-%COMP%]   .about-me-section[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.8}.about-me-page[_ngcontent-%COMP%]   .tag-canvas[_ngcontent-%COMP%]{flex:1 0 0%}  ng-tag-canvas canvas{padding-top:20px;min-height:70vh}"]})}return l})()},2815:(M,g,o)=>{function f(t){let e,n="",s=0;const r=t.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=getText(t)}else if(3===r||4===r)return t.nodeValue}else for(;e=t[s++];)n+=getText(e);return n}o.d(g,{A:()=>P});const i_latinLetters="\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u017F\\u0100-\\u01FF\\u0180-\\u027F",c={abbreviations:new RegExp("[^"+i_latinLetters+"](e\\.g\\.)|(i\\.e\\.)|(mr\\.)|(mrs\\.)|(ms\\.)|(dr\\.)|(prof\\.)|(esq\\.)|(sr\\.)|(jr\\.)[^"+i_latinLetters+"]","ig"),innerWordPeriod:new RegExp("["+i_latinLetters+"].["+i_latinLetters+"]","ig"),onlyContainsPunctuation:new RegExp("[^\u2013\u2014\u2032\u2019'\u201c\u2033\u201e\"(\xab.\u2026\xa1\xbf\u2032\u2019'\u201d\u2033\u201c\")\xbb.\u2026!?]"),adjoinedPunctuation:new RegExp("^[\u2013\u2014\u2032\u2019'\u201c\u2033\u201e\"(\xab.\u2026\xa1\xbf\u2032\u2019'\u201d\u2033\u201c\")\xbb.\u2026!?]+|[\u2013\u2014\u2032\u2019'\u201c\u2033\u201e\"(\xab.\u2026\xa1\xbf\u2032\u2019'\u201d\u2033\u201c\")\xbb.\u2026!?]+$","g"),skippedElements:/(script|style|select|textarea)/i,hasPluginClass:new RegExp("(^| )blast( |$)","gi")};function p(t){return t.replace(/{{(\d{1,3})}}/g,function(e,n){return String.fromCharCode(n)})}const l=function h(t,e){let n=-1,s=0;if(3===t.nodeType&&t.data.length){if(Element.nodeBeginning&&(t.data=e.search||"sentence"!==e.delimiter?p(t.data):function a(t){return t.replace(exports.Reg.abbreviations,function(e){return e.replace(/\./g,"{{46}}")}).replace(exports.Reg.innerWordPeriod,function(e){return e.replace(/\./g,"{{46}}")})}(t.data),Element.nodeBeginning=!1),n=t.data.search(e.processedDelimiterRegex),-1!==n){var r=t.data.match(e.processedDelimiterRegex),u=r[0],C=r[1]||!1;""===u?n++:C&&C!==u&&(n+=u.indexOf(C),u=C);var d=t.splitText(n);d.splitText(u.length),s=1,!e.search&&"sentence"===e.delimiter&&(d.data=p(d.data));var v=((t,e)=>{const n=document.createElement(e.tag);if(n.className=e.name,e.customClass&&(n.className+=" "+e.customClass,e.generateIndexID&&(n.id=e.customClass+"-"+Element.blastedIndex)),"all"===e.delimiter&&/\s/.test(t.data)&&(n.style.whiteSpace="pre-line"),!0===e.generateValueClass&&!e.search&&("character"===e.delimiter||"word"===e.delimiter)){var s,r=t.data;"word"===e.delimiter&&Reg.onlyContainsPunctuation.test(r)&&(r=r.replace(Reg.adjoinedPunctuation,"")),s=NAME+"-"+e.delimiter.toLowerCase()+"-"+r.toLowerCase(),n.className+=" "+s}return e.aria&&n.setAttribute("aria-hidden","true"),n.appendChild(t.cloneNode(!1)),n})(d,e,Element);d.parentNode.replaceChild(v,d),Element.wrappers.push(v),Element.blastedIndex++}}else if(1===t.nodeType&&t.hasChildNodes()&&!c.skippedElements.test(t.tagName)&&!c.hasPluginClass.test(t.className))for(var b=0;b<t.childNodes.length;b++)Element.nodeBeginning=!0,b+=h(t.childNodes[b],e);return s},P=class{constructor(t,e={}){this.elements=[],this.elements="string"==typeof t?Array.from(document.querySelectorAll(t)):[t],this.opts={returnGenerated:e.returnGenerated||!0,delimiter:e.delimiter||"word",tag:e.tag||"span",search:e.search||!1,customClass:e.customClass||"",generateIndexID:e.generateIndexID||!1,generateValueClass:e.generateValueClass||!1,aria:!e.hasOwnProperty("aria")||e.aria,debug:e.debug||!1,name:e.name||"blast"},Element={blastedIndex:0,nodeBeginning:!1,wrappers:Element.wrappers||[]};const n=this.createDelimiters();this.opts.processedDelimiter=n.delimiter,this.opts.processedDelimiterRegex=n.delimiterRegex,this.processedElements=this.processElements(),this.opts.debug&&console.time("blast"),this.processedElements.map(s=>{l(s,this.opts)}),this.opts.debug&&console.timeEnd("blast")}createDelimiters(t=null){return function m(t){let n,e=t.delimiter;if(t.search.length&&("string"==typeof t.search||/^\d/.test(parseFloat(t.search))))e=t.search.toString().replace(/[-[\]{,}(.)*+?|^$\\\/]/g,"\\$&"),n=new RegExp("(?:^|[^-"+characterRanges.latinLetters+"])("+e+"('s)?)(?![-"+characterRanges.latinLetters+"])","i");else switch("string"==typeof e&&(e=e.toLowerCase()),e){case"all":n=/(.)/;break;case"letter":case"char":case"character":n=/(\S)/;break;case"word":n=/\s*(\S+)\s*/;break;case"sentence":n=/(?=\S)(([.]{2,})?[^!?]+?([.\u2026!?]+|(?=\s+$)|$)(\s*[\u2032\u2019'\u201d\u2033\u201c")\xbb]+)*)/;break;case"element":n=/(?=\S)([\S\s]*\S)/;break;default:e instanceof RegExp?n=e:console.log(NAME+": Unrecognized delimiter, empty search string, or invalid custom Regex. Aborting.")}return{delimiter:e,delimiterRegex:n}}(t||this.opts)}getText(t){return f(t)}processElements(t=null,e=null){return((t,e)=>t.map(n=>{const s=f(n);let r=e.tag||"span";try{document.createElement(r)}catch{r="span",e.debug&&console.log(NAME+": Invalid tag supplied. Defaulting to span.")}return e.aria&&n.setAttribute("aria-label",s),n.classList.add("blast-root"),n}))(t||this.elements,e||this.opts)}}}}]);