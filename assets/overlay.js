google.maps.__gjsload__('overlay', function(_){var ZC=function(a){this.Eg=a},xqa=function(){},$C=function(a){a.Jy=a.Jy||new xqa;return a.Jy},yqa=function(a){this.Ch=new _.En(()=>{const b=a.Jy;if(a.getPanes()){if(a.getProjection()){if(!b.bx&&a.onAdd)a.onAdd();b.bx=!0;a.draw()}}else{if(b.bx)if(a.onRemove)a.onRemove();else a.remove();b.bx=!1}},0)},zqa=function(a,b){const c=$C(a);let d=c.lw;d||(d=c.lw=new yqa(a));_.Qb(c.Ph||[],_.Fk);var e=c.ni=c.ni||new _.vla;const f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");
e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);e=c.xC=c.xC||new ZC(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=()=>_.Fn(d.Ch);c.Ph=[_.Dk(a,"panes_changed",e),_.Dk(f,"zoom_changed",e),_.Dk(f,"offset_changed",e),_.Dk(b,"projection_changed",e),_.Dk(f,"projectioncenterq_changed",e)];_.Fn(d.Ch);b instanceof _.al?(_.Pl(b,"Ox"),_.Nl(b,148440)):b instanceof _.jm&&(_.Pl(b,"Oxs"),
_.Nl(b,181451))},Eqa=function(a){if(a){var b=a.getMap();if(Aqa(a)!==b&&b&&b instanceof _.al){const c=b.__gm;c.overlayLayer?a.__gmop=new Bqa(b,a,c.overlayLayer):c.Fg.then(({kh:d})=>{const e=new Cqa(b,d);d.Bi(e);c.overlayLayer=e;Dqa(a);Eqa(a)})}}},Dqa=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.Eg.unbindAll(),b.Eg.set("panes",null),b.Eg.set("projection",null),b.Gg.tl(b),b.Fg&&(b.Fg=!1,b.Eg.onRemove?b.Eg.onRemove():b.Eg.remove()))}},Aqa=function(a){return(a=a.__gmop)?a.map:null},Fqa=function(a,
b){a.Eg.get("projection")!=b&&(a.Eg.bindTo("panes",a.map.__gm),a.Eg.set("projection",b))};_.Ia(ZC,_.Vk);ZC.prototype.changed=function(a){a!="outProjection"&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.qj(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.Eg:null))};var aD={};_.Ia(yqa,_.Vk);aD.Dl=function(a){if(a){var b=a.getMap();($C(a).eC||null)!==b&&(b&&zqa(a,b),$C(a).eC=b)}};aD.tl=function(a){const b=$C(a);var c=b.ni;c&&c.unbindAll();(c=b.xC)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Ph&&_.Qb(b.Ph,_.Fk);b.Ph=null;b.lw&&(b.lw.Ch.Cj(),b.lw=null);delete $C(a).eC};var bD={},Bqa=class{constructor(a,b,c){this.map=a;this.Eg=b;this.Gg=c;this.Fg=!1;_.Pl(this.map,"Ox");_.Nl(this.map,148440);c.Dl(this)}draw(){this.Fg||(this.Fg=!0,this.Eg.onAdd&&this.Eg.onAdd());this.Eg.draw&&this.Eg.draw()}},Cqa=class{constructor(a,b){this.Ig=a;this.Gg=b;this.Eg=null;this.Fg=[]}dispose(){}vi(a,b,c,d,e,f,g,h){const k=this.Eg=this.Eg||new _.BA(this.Ig,this.Gg,()=>{});k.vi(a,b,c,d,e,f,g,h);for(const m of this.Fg)Fqa(m,k),m.draw()}Dl(a){this.Fg.push(a);this.Eg&&Fqa(a,this.Eg);this.Gg.refresh()}tl(a){_.Yb(this.Fg,
a)}};bD.Dl=Eqa;bD.tl=Dqa;_.vk("overlay",{uA:function(a){if(a){(0,aD.tl)(a);(0,bD.tl)(a);var b=a.getMap();b&&(b instanceof _.al?(0,bD.Dl)(a):(0,aD.Dl)(a))}},preventMapHitsFrom:a=>{_.vw(a,{Tk:({event:b})=>{_.Fu(b.Hh)},Zj:b=>_.gw(b),Wp:b=>_.hw(b),Uk:b=>_.hw(b),rk:b=>_.iw(b)}).Fr(!0)},preventMapHitsAndGesturesFrom:a=>{a.addEventListener("click",_.Bk);a.addEventListener("contextmenu",_.Bk);a.addEventListener("dblclick",_.Bk);a.addEventListener("mousedown",_.Bk);a.addEventListener("mousemove",_.Bk);a.addEventListener("MSPointerDown",
_.Bk);a.addEventListener("pointerdown",_.Bk);a.addEventListener("touchstart",_.Bk);a.addEventListener("wheel",_.Bk)}});});
