"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[199],{1199:(O,c,o)=>{o.r(c),o.d(c,{SkillsComponent:()=>M});var r=o(177),d=o(6954),p=o(2815),g=o(634),e=o(4438);const m=["title"],f=["experience"],k=()=>["/blog-posts"];function _(s,a){if(1&s&&(e.j41(0,"dd")(1,"a"),e.EFF(2),e.k0s()()),2&s){const t=a.$implicit;e.R7$(2),e.JRh(t)}}function h(s,a){if(1&s&&(e.j41(0,"dd")(1,"a"),e.EFF(2),e.k0s()()),2&s){const t=a.$implicit;e.R7$(2),e.JRh(t)}}function u(s,a){if(1&s&&(e.j41(0,"dd")(1,"a"),e.EFF(2),e.k0s()()),2&s){const t=a.$implicit;e.R7$(2),e.JRh(t)}}function C(s,a){if(1&s){const t=e.RV6();e.j41(0,"section",4)(1,"dl",5)(2,"dt"),e.EFF(3,"Tech Skills"),e.k0s(),e.DNE(4,_,3,1,"dd",6),e.k0s(),e.j41(5,"dl",7)(6,"dt"),e.EFF(7,"Management Skills"),e.k0s(),e.DNE(8,h,3,1,"dd",6),e.k0s(),e.j41(9,"dl",8)(10,"dt"),e.EFF(11,"Soft Skills"),e.k0s(),e.DNE(12,u,3,1,"dd",6),e.k0s(),e.j41(13,"div",9,1)(15,"p"),e.EFF(16),e.k0s(),e.j41(17,"p"),e.EFF(18," I have created successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development (HTML, CSS, JS, Angular). I have developed large enterprise banking apps, custom features and coded interactive layouts. "),e.k0s(),e.j41(19,"p"),e.EFF(20," I am familiar with other popular libraries like React.js and backend technologies like Node.js. I also have a fair bit of experience with ERP tools like NetSuite. Additionally, I write a lot of awesome technical content on "),e.j41(21,"a",10),e.EFF(22,"Medium. "),e.k0s()(),e.j41(23,"p"),e.EFF(24," Visit my "),e.j41(25,"a",11),e.EFF(26,"LinkedIn "),e.k0s(),e.EFF(27," profile for more details. "),e.k0s()(),e.j41(28,"a",12),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.toggleExperience())}),e.EFF(29),e.k0s()()}if(2&s){const t=e.XpG();e.R7$(4),e.Y8G("ngForOf",t.skills.techSkills),e.R7$(4),e.Y8G("ngForOf",t.skills.mgmtSkills),e.R7$(4),e.Y8G("ngForOf",t.skills.softSkills),e.R7$(4),e.SpI(" I have started my journey as a front end developer in 2014, and nearly ",t.yearsOfExperience," years later, I\u2019ve the experience of doing some awesome work for banking clients, retail and commerce clients, in-house products, apparel stores, aviation agencies, etc. I have collaborated with talented people to create web products for both business and consumer use. "),e.R7$(5),e.Y8G("routerLink",e.lJ4(6,k)),e.R7$(8),e.JRh(t.isMakisuOpen?"Experience":"Skills")}}let M=(()=>{class s{constructor(t){this.renderer=t,this.isMakisuOpen=!0,this.startingYear=2014,this.skills=g.J3}ngOnInit(){this.yearsOfExperience=(new Date).getFullYear()-this.startingYear}toggleExperience(){this.isMakisuOpen=!this.isMakisuOpen,this.isMakisuOpen?(this.renderer.removeClass(this.experience.nativeElement,"fade-in"),this.renderer.addClass(this.experience.nativeElement,"fade-out")):(this.renderer.addClass(this.experience.nativeElement,"fade-in"),this.renderer.removeClass(this.experience.nativeElement,"fade-out"))}loadMakisus(){const t=window.jQuery;if(t.fn.makisu.enabled){const i=t(".tech-skills"),n=t(".mgmt-skills"),l=t(".soft-skills");i.makisu({selector:"dd",overlap:.85,speed:1.7}),n.makisu({selector:"dd",overlap:.6,speed:.85}),l.makisu({selector:"dd",overlap:.2,speed:.5}),t(".list").makisu("open"),t(".toggle").on("click",function(){t(".list").makisu("toggle")})}else console.error("Error loading Makisus")}ngAfterViewInit(){this.loadMakisus(),new p.A("h1",{returnGenerated:!0,delimiter:"character",tag:"span",search:!1,customClass:"",aria:!0,debug:!1,name:"blast"});let t=this.titlePieces.nativeElement.children,i=0;for(const n of Array.from(t))setTimeout(()=>{this.renderer.addClass(n,"animated"),this.renderer.addClass(n,"bounceIn")},i),i+=100,setTimeout(()=>{this.renderer.removeClass(n,"animated"),this.renderer.removeClass(n,"bounceIn"),this.renderer.setStyle(n,"opacity",1),n.addEventListener("mouseenter",()=>{this.renderer.addClass(n,"animated"),this.renderer.addClass(n,"rubberBand")}),n.addEventListener("mouseleave",()=>{this.renderer.removeClass(n,"animated"),this.renderer.removeClass(n,"rubberBand")})},2e3)}static#e=this.\u0275fac=function(i){return new(i||s)(e.rXU(e.sFG))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["app-skills"]],viewQuery:function(i,n){if(1&i&&(e.GBs(m,5),e.GBs(f,5)),2&i){let l;e.mGM(l=e.lsd())&&(n.titlePieces=l.first),e.mGM(l=e.lsd())&&(n.experience=l.first)}},standalone:!0,features:[e.aNF],decls:5,vars:1,consts:[["title",""],["experience",""],[1,"header"],["class","skills-section",4,"ngIf"],[1,"skills-section"],[1,"list","tech-skills"],[4,"ngFor","ngForOf"],[1,"list","mgmt-skills"],[1,"list","soft-skills"],[1,"experience-section"],[3,"routerLink"],["href","https://www.linkedin.com/in/akashkriplani25","target","_blank"],[1,"toggle",3,"click"]],template:function(i,n){1&i&&(e.j41(0,"header",2)(1,"h1",null,0),e.EFF(3,"Skills and Experience"),e.k0s()(),e.DNE(4,C,30,7,"section",3)),2&i&&(e.R7$(4),e.Y8G("ngIf",n.skills))},dependencies:[r.MD,r.Sq,r.bT,d.iI,d.Wk],styles:[".header[_ngcontent-%COMP%]{text-align:center;position:absolute;z-index:1;width:100%;top:5%}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:4rem;padding:5px 0}.experience-section[_ngcontent-%COMP%]{display:none;flex-direction:column;text-align:left;align-items:center;padding:190px 20px;justify-content:center}.experience-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:20px 0;text-align:left}.fade-in[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_FadeIn;animation-duration:3s;transition-timing-function:linear;display:block}.fade-out[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_FadeOut;animation-duration:3s;transition-timing-function:linear}@keyframes _ngcontent-%COMP%_FadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_FadeOut{0%{opacity:1}to{opacity:0}}a[_ngcontent-%COMP%]{transition:all .25s cubic-bezier(.23,1,.32,1);cursor:pointer;color:#08fdd8;text-decoration:none}a[_ngcontent-%COMP%]:hover{opacity:.8}.list[_ngcontent-%COMP%]{-webkit-transform-style:preserve-3d;-moz-transform-stle:preserve-3d;transform-style:preserve-3d;text-transform:uppercase;position:absolute;margin-left:-140px;top:20%}.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#fff}.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-indent:20px}.list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{text-indent:10px;line-height:55px;background:#e0fbac;margin:0;height:55px;width:270px;color:#fff}.list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{transform:translateZ(.3px);text-shadow:1px 1px 2px rgba(0,0,0,.2);font-size:15px}.list[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{border-top:1px dashed rgba(255,255,255,.3);line-height:35px;font-size:11px;height:35px;margin:0}.toggle[_ngcontent-%COMP%]{transform:translateZ(100px);box-shadow:0 1px 4px #00000026;border-radius:3px;text-transform:uppercase;letter-spacing:-1px;line-height:50px;margin-left:-70px;margin-top:-20px;background:#2b2b2b;text-align:center;font-size:12px;position:absolute;z-index:1;height:50px;bottom:10%;width:140px;color:#fff;left:50%}.toggle[_ngcontent-%COMP%]:hover{background:#e42692}.soft-skills[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .soft-skills[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], .soft-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#73c8a9}.tech-skills[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .tech-skills[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], .tech-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#e32551}.mgmt-skills[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .mgmt-skills[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], .mgmt-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#ffc219}.soft-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#61c19e}.tech-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#d31b46}.mgmt-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#fb0}.tech-skills[_ngcontent-%COMP%]{transform:perspective(1200px) rotateY(40deg)!important;transform-origin:110% 25%;left:20%}.mgmt-skills[_ngcontent-%COMP%]{transform:perspective(600px) translateZ(1px)!important;left:50%}.soft-skills[_ngcontent-%COMP%]{transform:perspective(1200px) rotateY(-40deg)!important;transform-origin:-10% 25%;left:80%}"]})}return s})()}}]);