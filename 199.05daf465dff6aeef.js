"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[199],{1199:(M,l,a)=>{a.r(l),a.d(l,{SkillsComponent:()=>C});var e=a(4438),c=a(177),d=a(6954),p=a(2815),g=a(634);const m=["title"],f=["experience"],k=()=>["/blog-posts"];function h(s,r){if(1&s&&(e.j41(0,"dd")(1,"a"),e.EFF(2),e.k0s()()),2&s){const n=r.$implicit;e.R7$(2),e.JRh(n)}}function u(s,r){if(1&s&&(e.j41(0,"dd")(1,"a"),e.EFF(2),e.k0s()()),2&s){const n=r.$implicit;e.R7$(2),e.JRh(n)}}function _(s,r){if(1&s&&(e.j41(0,"dd")(1,"a"),e.EFF(2),e.k0s()()),2&s){const n=r.$implicit;e.R7$(2),e.JRh(n)}}let C=(()=>{class s{constructor(){this.isMakisuOpen=!0,this.startingYear=2014,this.skills=g.J3,this.renderer=(0,e.WQX)(e.sFG)}ngOnInit(){this.yearsOfExperience=(new Date).getFullYear()-this.startingYear}toggleExperience(){this.isMakisuOpen=!this.isMakisuOpen,this.isMakisuOpen?(this.renderer.removeClass(this.experience.nativeElement,"fade-in"),this.renderer.addClass(this.experience.nativeElement,"fade-out")):(this.renderer.addClass(this.experience.nativeElement,"fade-in"),this.renderer.removeClass(this.experience.nativeElement,"fade-out"))}loadMakisus(){const n=window.jQuery;if(n.fn.makisu.enabled){const i=n(".tech-skills"),t=n(".mgmt-skills"),o=n(".soft-skills");i.makisu({selector:"dd",overlap:.85,speed:1.7}),t.makisu({selector:"dd",overlap:.6,speed:.85}),o.makisu({selector:"dd",overlap:.2,speed:.5}),n(".list").makisu("open"),n(".toggle").on("click",function(){n(".list").makisu("toggle")})}else console.error("Error loading Makisus")}ngAfterViewInit(){this.loadMakisus(),new p.A("h1",{returnGenerated:!0,delimiter:"character",tag:"span",search:!1,customClass:"",aria:!0,debug:!1,name:"blast"});let n=this.titlePieces.nativeElement.children,i=0;for(const t of Array.from(n))setTimeout(()=>{this.renderer.addClass(t,"animated"),this.renderer.addClass(t,"bounceIn")},i),i+=100,setTimeout(()=>{this.renderer.removeClass(t,"animated"),this.renderer.removeClass(t,"bounceIn"),this.renderer.setStyle(t,"opacity",1),t.addEventListener("mouseenter",()=>{this.renderer.addClass(t,"animated"),this.renderer.addClass(t,"rubberBand")}),t.addEventListener("mouseleave",()=>{this.renderer.removeClass(t,"animated"),this.renderer.removeClass(t,"rubberBand")})},2e3)}static#e=this.\u0275fac=function(i){return new(i||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["app-skills"]],viewQuery:function(i,t){if(1&i&&(e.GBs(m,5),e.GBs(f,5)),2&i){let o;e.mGM(o=e.lsd())&&(t.titlePieces=o.first),e.mGM(o=e.lsd())&&(t.experience=o.first)}},standalone:!0,features:[e.aNF],decls:34,vars:7,consts:[["title",""],["experience",""],[1,"header"],[1,"skills-section"],[1,"list","tech-skills"],[4,"ngFor","ngForOf"],[1,"list","mgmt-skills"],[1,"list","soft-skills"],[1,"experience-section"],[3,"routerLink"],["href","https://www.linkedin.com/in/akashkriplani25","target","_blank"],[1,"toggle",3,"click"]],template:function(i,t){if(1&i){const o=e.RV6();e.j41(0,"header",2)(1,"h1",null,0),e.EFF(3,"Skills and Experience"),e.k0s()(),e.j41(4,"section",3)(5,"dl",4)(6,"dt"),e.EFF(7,"Tech Skills"),e.k0s(),e.DNE(8,h,3,1,"dd",5),e.k0s(),e.j41(9,"dl",6)(10,"dt"),e.EFF(11,"Management Skills"),e.k0s(),e.DNE(12,u,3,1,"dd",5),e.k0s(),e.j41(13,"dl",7)(14,"dt"),e.EFF(15,"Soft Skills"),e.k0s(),e.DNE(16,_,3,1,"dd",5),e.k0s(),e.j41(17,"div",8,1)(19,"p"),e.EFF(20),e.k0s(),e.j41(21,"p"),e.EFF(22," I have created successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development (HTML, CSS, JS, Angular). I have developed large enterprise banking apps, custom features and coded interactive layouts. "),e.k0s(),e.j41(23,"p"),e.EFF(24," I am familiar with other popular libraries like React.js and backend technologies like Node.js. I also have a fair bit of experience with ERP tools like NetSuite. Additionally, I write a lot of awesome technical content on "),e.j41(25,"a",9),e.EFF(26,"Medium. "),e.k0s()(),e.j41(27,"p"),e.EFF(28," Visit my "),e.j41(29,"a",10),e.EFF(30,"LinkedIn "),e.k0s(),e.EFF(31," profile for more details. "),e.k0s()(),e.j41(32,"a",11),e.bIt("click",function(){return e.eBV(o),e.Njj(t.toggleExperience())}),e.EFF(33),e.k0s()()}2&i&&(e.R7$(8),e.Y8G("ngForOf",t.skills.techSkills),e.R7$(4),e.Y8G("ngForOf",t.skills.mgmtSkills),e.R7$(4),e.Y8G("ngForOf",t.skills.softSkills),e.R7$(4),e.SpI(" I have started my journey as a front end developer in 2014, and nearly ",t.yearsOfExperience," years later, I\u2019ve the experience of doing some awesome work for banking clients, retail and commerce clients, in-house products, apparel stores, aviation agencies, etc. I have collaborated with talented people to create web products for both business and consumer use. "),e.R7$(5),e.Y8G("routerLink",e.lJ4(6,k)),e.R7$(8),e.JRh(t.isMakisuOpen?"Experience":"Skills"))},dependencies:[c.pM,d.Wk],styles:[".header[_ngcontent-%COMP%]{text-align:center;position:absolute;z-index:1;width:100%;top:5%}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:4rem;padding:5px 0}.experience-section[_ngcontent-%COMP%]{display:none;flex-direction:column;text-align:left;align-items:center;padding:190px 20px;justify-content:center}.experience-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:10px 0;text-align:left}.fade-in[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_FadeIn;animation-duration:3s;transition-timing-function:linear;display:block}.fade-out[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_FadeOut;animation-duration:3s;transition-timing-function:linear}@keyframes _ngcontent-%COMP%_FadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_FadeOut{0%{opacity:1}to{opacity:0}}a[_ngcontent-%COMP%]{transition:all .25s cubic-bezier(.23,1,.32,1);cursor:pointer;color:#08fdd8;text-decoration:none}a[_ngcontent-%COMP%]:hover{opacity:.8}.list[_ngcontent-%COMP%]{-webkit-transform-style:preserve-3d;-moz-transform-stle:preserve-3d;transform-style:preserve-3d;text-transform:uppercase;position:absolute;margin-left:-140px;top:20%}.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#fff}.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-indent:20px}.list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{text-indent:10px;line-height:55px;background:#e0fbac;margin:0;height:55px;width:270px;color:#fff}.list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{transform:translateZ(.3px);text-shadow:1px 1px 2px rgba(0,0,0,.2);font-size:15px}.list[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{border-top:1px dashed rgba(255,255,255,.3);line-height:35px;font-size:11px;height:35px;margin:0}.toggle[_ngcontent-%COMP%]{transform:translateZ(100px);box-shadow:0 1px 4px #00000026;border-radius:3px;text-transform:uppercase;letter-spacing:-1px;line-height:50px;margin-left:-70px;margin-top:-20px;background:#2b2b2b;text-align:center;font-size:12px;position:absolute;z-index:1;height:50px;bottom:10%;width:140px;color:#fff;left:50%}.toggle[_ngcontent-%COMP%]:hover{background:#e42692}.soft-skills[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .soft-skills[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], .soft-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#73c8a9}.tech-skills[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .tech-skills[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], .tech-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#e32551}.mgmt-skills[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .mgmt-skills[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], .mgmt-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#ffc219}.soft-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#61c19e}.tech-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#d31b46}.mgmt-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#fb0}.tech-skills[_ngcontent-%COMP%]{transform:perspective(1200px) rotateY(40deg)!important;transform-origin:110% 25%;left:20%}.mgmt-skills[_ngcontent-%COMP%]{transform:perspective(600px) translateZ(1px)!important;left:50%}.soft-skills[_ngcontent-%COMP%]{transform:perspective(1200px) rotateY(-40deg)!important;transform-origin:-10% 25%;left:80%}"]})}return s})()}}]);