(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{9801:(e,r,t)=>{Promise.resolve().then(t.bind(t,1298))},1298:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>eo});var a=t(5155),s=t(2115),o=t(8173),n=t.n(o),l=t(7364),i=t(4085),d=t(9444),c=t(8305),u=t(7988),p=t(5368),h=t(2516);let x=(0,t(7401).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var m=t(8867),f=t(767),g=t(1027),v=t(9602);let j=(0,g.F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function y(e){let{className:r,variant:t,...s}=e;return(0,a.jsx)("div",{className:(0,v.cn)(j({variant:t}),r),...s})}var b=t(3610),w=t(8068),N=t(8166),C=t(9674),k=t(2292),A=t(196),P=t(7668),R=t(905),O=t(7323),D=t(7028),_=t(3360),F=t(2317),E=t(1488),M=t(5587),z=t(4065),T="Popover",[U,$]=(0,N.A)(T,[R.Bk]),q=(0,R.Bk)(),[B,L]=U(T),I=e=>{let{__scopePopover:r,children:t,open:o,defaultOpen:n,onOpenChange:l,modal:i=!1}=e,d=q(r),c=s.useRef(null),[u,p]=s.useState(!1),[h=!1,x]=(0,E.i)({prop:o,defaultProp:n,onChange:l});return(0,a.jsx)(R.bL,{...d,children:(0,a.jsx)(B,{scope:r,contentId:(0,P.B)(),triggerRef:c,open:h,onOpenChange:x,onOpenToggle:s.useCallback(()=>x(e=>!e),[x]),hasCustomAnchor:u,onCustomAnchorAdd:s.useCallback(()=>p(!0),[]),onCustomAnchorRemove:s.useCallback(()=>p(!1),[]),modal:i,children:t})})};I.displayName=T;var S="PopoverAnchor";s.forwardRef((e,r)=>{let{__scopePopover:t,...o}=e,n=L(S,t),l=q(t),{onCustomAnchorAdd:i,onCustomAnchorRemove:d}=n;return s.useEffect(()=>(i(),()=>d()),[i,d]),(0,a.jsx)(R.Mz,{...l,...o,ref:r})}).displayName=S;var Z="PopoverTrigger",G=s.forwardRef((e,r)=>{let{__scopePopover:t,...s}=e,o=L(Z,t),n=q(t),l=(0,w.s)(r,o.triggerRef),i=(0,a.jsx)(_.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":et(o.open),...s,ref:l,onClick:(0,b.m)(e.onClick,o.onOpenToggle)});return o.hasCustomAnchor?i:(0,a.jsx)(R.Mz,{asChild:!0,...n,children:i})});G.displayName=Z;var H="PopoverPortal",[W,V]=U(H,{forceMount:void 0}),K=e=>{let{__scopePopover:r,forceMount:t,children:s,container:o}=e,n=L(H,r);return(0,a.jsx)(W,{scope:r,forceMount:t,children:(0,a.jsx)(D.C,{present:t||n.open,children:(0,a.jsx)(O.Z,{asChild:!0,container:o,children:s})})})};K.displayName=H;var X="PopoverContent",Y=s.forwardRef((e,r)=>{let t=V(X,e.__scopePopover),{forceMount:s=t.forceMount,...o}=e,n=L(X,e.__scopePopover);return(0,a.jsx)(D.C,{present:s||n.open,children:n.modal?(0,a.jsx)(J,{...o,ref:r}):(0,a.jsx)(Q,{...o,ref:r})})});Y.displayName=X;var J=s.forwardRef((e,r)=>{let t=L(X,e.__scopePopover),o=s.useRef(null),n=(0,w.s)(r,o),l=s.useRef(!1);return s.useEffect(()=>{let e=o.current;if(e)return(0,M.Eq)(e)},[]),(0,a.jsx)(z.A,{as:F.DX,allowPinchZoom:!0,children:(0,a.jsx)(ee,{...e,ref:n,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,b.m)(e.onCloseAutoFocus,e=>{var r;e.preventDefault(),l.current||null===(r=t.triggerRef.current)||void 0===r||r.focus()}),onPointerDownOutside:(0,b.m)(e.onPointerDownOutside,e=>{let r=e.detail.originalEvent,t=0===r.button&&!0===r.ctrlKey,a=2===r.button||t;l.current=a},{checkForDefaultPrevented:!1}),onFocusOutside:(0,b.m)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),Q=s.forwardRef((e,r)=>{let t=L(X,e.__scopePopover),o=s.useRef(!1),n=s.useRef(!1);return(0,a.jsx)(ee,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var a,s;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,r),r.defaultPrevented||(o.current||null===(s=t.triggerRef.current)||void 0===s||s.focus(),r.preventDefault()),o.current=!1,n.current=!1},onInteractOutside:r=>{var a,s;null===(a=e.onInteractOutside)||void 0===a||a.call(e,r),r.defaultPrevented||(o.current=!0,"pointerdown"!==r.detail.originalEvent.type||(n.current=!0));let l=r.target;(null===(s=t.triggerRef.current)||void 0===s?void 0:s.contains(l))&&r.preventDefault(),"focusin"===r.detail.originalEvent.type&&n.current&&r.preventDefault()}})}),ee=s.forwardRef((e,r)=>{let{__scopePopover:t,trapFocus:s,onOpenAutoFocus:o,onCloseAutoFocus:n,disableOutsidePointerEvents:l,onEscapeKeyDown:i,onPointerDownOutside:d,onFocusOutside:c,onInteractOutside:u,...p}=e,h=L(X,t),x=q(t);return(0,k.Oh)(),(0,a.jsx)(A.n,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:o,onUnmountAutoFocus:n,children:(0,a.jsx)(C.qW,{asChild:!0,disableOutsidePointerEvents:l,onInteractOutside:u,onEscapeKeyDown:i,onPointerDownOutside:d,onFocusOutside:c,onDismiss:()=>h.onOpenChange(!1),children:(0,a.jsx)(R.UC,{"data-state":et(h.open),role:"dialog",id:h.contentId,...x,...p,ref:r,style:{...p.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),er="PopoverClose";function et(e){return e?"open":"closed"}s.forwardRef((e,r)=>{let{__scopePopover:t,...s}=e,o=L(er,t);return(0,a.jsx)(_.sG.button,{type:"button",...s,ref:r,onClick:(0,b.m)(e.onClick,()=>o.onOpenChange(!1))})}).displayName=er,s.forwardRef((e,r)=>{let{__scopePopover:t,...s}=e,o=q(t);return(0,a.jsx)(R.i3,{...o,...s,ref:r})}).displayName="PopoverArrow";let ea=s.forwardRef((e,r)=>{let{className:t,align:s="center",sideOffset:o=4,...n}=e;return(0,a.jsx)(K,{children:(0,a.jsx)(Y,{ref:r,align:s,sideOffset:o,className:(0,v.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})})});function es(e){let{technologies:r,selectedTechnologies:t,onChange:o}=e,[n,l]=(0,s.useState)(!1),d=e=>{t.includes(e)?o(t.filter(r=>r!==e)):o([...t,e])};return(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2 items-start sm:items-center",children:[(0,a.jsxs)(I,{open:n,onOpenChange:l,children:[(0,a.jsx)(G,{asChild:!0,children:(0,a.jsxs)(i.$,{variant:"outline",className:"border-gray-700 text-gray-300 hover:text-white transition-all duration-300 w-full sm:w-auto",children:["Filter by technology",(0,a.jsx)(x,{className:"ml-2 h-4 w-4 opacity-50"})]})}),(0,a.jsx)(ea,{className:"w-64 p-0 bg-gray-900 border-gray-800",children:(0,a.jsxs)("div",{className:"p-2",children:[(0,a.jsx)("div",{className:"text-sm font-medium text-gray-300 mb-2",children:"Technologies"}),(0,a.jsx)("div",{className:"space-y-1 max-h-[300px] overflow-auto",children:r.map(e=>(0,a.jsxs)("div",{className:(0,v.cn)("flex items-center px-2 py-1.5 rounded-md cursor-pointer hover:bg-gray-800",t.includes(e)?"bg-gray-800":""),onClick:()=>d(e),children:[(0,a.jsx)("div",{className:"flex items-center justify-center w-4 h-4 mr-2 rounded-sm border border-gray-700",children:t.includes(e)&&(0,a.jsx)(m.A,{className:"h-3 w-3 text-purple-400"})}),(0,a.jsx)("span",{className:"text-gray-300",children:e})]},e))})]})})]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-2 mt-2 sm:mt-0",children:[t.length>0&&(0,a.jsxs)(i.$,{variant:"ghost",size:"sm",onClick:()=>{o([])},className:"h-8 text-gray-400 hover:text-white",children:["Clear filters",(0,a.jsx)(f.A,{className:"ml-2 h-3 w-3"})]}),t.map(e=>(0,a.jsxs)(y,{variant:"secondary",className:"bg-gray-800 hover:bg-gray-700 text-gray-300 flex items-center",children:[e,(0,a.jsx)("button",{className:"ml-1 rounded-full hover:bg-gray-700 p-0.5",onClick:()=>d(e),children:(0,a.jsx)(f.A,{className:"h-3 w-3"})})]},e))]})]})}function eo(){let{t:e,language:r}=(0,u.o)(),t=(0,h.TB)(r),[o,x]=(0,s.useState)([]),m=(0,s.useMemo)(()=>{let e=new Set;return t.forEach(r=>{r.technologies.forEach(r=>e.add(r))}),Array.from(e).sort()},[t]),f=(0,s.useMemo)(()=>0===o.length?t:t.filter(e=>o.every(r=>e.technologies.includes(r))),[t,o]);return(0,a.jsxs)("div",{className:"min-h-screen text-white",children:[(0,a.jsx)(c.A,{}),(0,a.jsxs)("main",{className:"container mx-auto px-4 pt-32 pb-20",children:[(0,a.jsxs)(p.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent",children:e("projects.allProjectsTitle")}),(0,a.jsx)("p",{className:"text-gray-400 max-w-2xl mb-4",children:e("projects.allProjectsDescription")})]}),(0,a.jsx)(n(),{href:"/",children:(0,a.jsxs)(i.$,{variant:"outline",className:"border-gray-700 text-gray-300 hover:text-white transition-all duration-300",children:[(0,a.jsx)(l.A,{className:"mr-2 h-4 w-4"}),e("projects.backToHome")]})})]}),(0,a.jsx)("div",{className:"mb-8",children:(0,a.jsx)(es,{technologies:m,selectedTechnologies:o,onChange:x})}),0===f.length?(0,a.jsxs)("div",{className:"text-center py-12",children:[(0,a.jsx)("p",{className:"text-gray-400 text-lg",children:"No projects match the selected filters."}),(0,a.jsx)(i.$,{variant:"link",onClick:()=>x([]),className:"text-purple-400 hover:text-purple-300 mt-2",children:"Clear all filters"})]}):(0,a.jsx)(p.P.div,{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 grid-flow-row-dense",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05,delayChildren:.3}}},initial:"hidden",animate:"visible",children:f.map((e,r)=>(0,a.jsx)(d.A,{title:e.title,description:e.description,technologies:e.technologies.slice(0,4),imageUrl:e.images[0],githubUrl:e.githubUrl,liveUrl:e.liveUrl,id:e.id,index:r},e.id))})]}),(0,a.jsx)("footer",{className:"py-8 border-t border-gray-800 text-center text-gray-500",children:(0,a.jsx)("div",{className:"container mx-auto px-4",children:(0,a.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Wilfredo Paiz. ",e("footer.rights")]})})})]})}ea.displayName=Y.displayName},9444:(e,r,t)=>{"use strict";t.d(r,{A:()=>h});var a=t(5155),s=t(1626),o=t(5765),n=t(5007),l=t(4085),i=t(5565),d=t(8173),c=t.n(d),u=t(5368),p=t(7988);function h(e){let{title:r,description:t,technologies:d,imageUrl:h,githubUrl:x,liveUrl:m,id:f=r.toLowerCase().replace(/\s+/g,"-"),index:g=0}=e,{t:v}=(0,p.o)();return(0,a.jsx)(u.P.div,{variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},className:"h-full",children:(0,a.jsxs)(n.Zp,{className:"bg-gradient-to-br from-gray-900 to-black border-gray-800 overflow-hidden flex flex-col h-full hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300",children:[(0,a.jsx)(c(),{href:"/projects/".concat(f),children:(0,a.jsx)("div",{className:"relative h-48 w-full overflow-hidden",children:(0,a.jsx)(i.default,{src:h||"/placeholder.svg",alt:r,fill:!0,className:"object-cover transition-transform duration-500 hover:scale-105"})})}),(0,a.jsxs)(n.aR,{children:[(0,a.jsx)(c(),{href:"/projects/".concat(f),children:(0,a.jsx)(n.ZB,{className:"text-xl font-bold hover:text-purple-400 transition-colors duration-300",children:r})}),(0,a.jsx)(n.BT,{className:"text-gray-400 line-clamp-2",children:t})]}),(0,a.jsx)(n.Wu,{className:"flex-grow overflow-hidden",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 mt-2",children:d.map((e,r)=>(0,a.jsx)("span",{className:"px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300",children:e},r))})}),(0,a.jsxs)(n.wL,{className:"flex gap-3 mt-auto",children:[x&&(0,a.jsx)("a",{href:x,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)(l.$,{variant:"outline",size:"sm",className:"border-gray-700 text-gray-300 hover:text-white transition-all duration-300",children:[(0,a.jsx)(s.A,{className:"h-4 w-4 mr-2"}),"Code"]})}),m&&(0,a.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)(l.$,{variant:"outline",size:"sm",className:"border-gray-700 text-gray-300 hover:text-white transition-all duration-300",children:[(0,a.jsx)(o.A,{className:"h-4 w-4 mr-2"}),"Live Demo"]})}),(0,a.jsx)(c(),{href:"/projects/".concat(f),className:"ml-auto",children:(0,a.jsx)(l.$,{size:"sm",className:"bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300",children:v("projects.viewDetails")})})]})]})})}},7364:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});let a=(0,t(7401).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},5765:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});let a=(0,t(7401).A)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},1626:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});let a=(0,t(7401).A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])}},e=>{var r=r=>e(e.s=r);e.O(0,[225,411,666,441,517,358],()=>r(9801)),_N_E=e.O()}]);