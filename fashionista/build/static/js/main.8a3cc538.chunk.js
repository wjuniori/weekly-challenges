(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,a,t){},138:function(e,a,t){},140:function(e,a,t){},142:function(e,a,t){},144:function(e,a,t){},146:function(e,a,t){},148:function(e,a,t){},150:function(e,a,t){},152:function(e,a,t){},154:function(e,a,t){},156:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(54),l=t.n(c),s=t(55),i=t.n(s),o=t(6),u=t(160),_=t(161),d=t(22),p=t(11),m=Object(p.a)(),g=t(159),v=t(5),f=t(17),b=t(23),h=t(59),E=t.n(h),z=function(e){var a=e.children,t=Object(f.a)(e,["children"]);return n.a.createElement("button",Object.assign({type:"button"},t),a,n.a.createElement(E.a,null))},O=function(e){var a=e.children,t=Object(f.a)(e,["children"]);return n.a.createElement(z,t,n.a.createElement(b.d,null),a)};O.defaultProps={className:"",children:""};var P=function(e){var a=e.children,t=Object(f.a)(e,["children"]);return n.a.createElement(z,t,n.a.createElement(b.e,null),a)};P.defaultProps={className:"",children:""};var R=function(e){var a=e.children,t=Object(f.a)(e,["children"]);return n.a.createElement(z,t,n.a.createElement(b.a,null),a)};R.defaultProps={className:"",children:""};var k=function(e){var a=e.children,t=Object(f.a)(e,["children"]);return n.a.createElement(z,t,n.a.createElement(b.c,null),a)};k.defaultProps={className:"",children:""};var C=function(e){var a=e.children,t=Object(f.a)(e,["children"]);return n.a.createElement(z,t,n.a.createElement(b.b,null),a)};C.defaultProps={className:"",children:""};var S,j=t(3),N=t(2),A=t(10),G=Object(A.createActions)({toogleCart:[""],toogleSearch:[""],dismissDrawer:[""]}),T=G.Types,y=G.Creators,I={isDrawerVisible:!1,isCartOpen:!1,isSearchOpen:!1},$=(S={},Object(j.a)(S,T.TOOGLE_CART,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;return Object(N.a)({},e,{isDrawerVisible:!e.isDrawerVisible,isCartOpen:!e.isCartOpen,isSearchOpen:!1})}),Object(j.a)(S,T.TOOGLE_SEARCH,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;return Object(N.a)({},e,{isDrawerVisible:!e.isDrawerVisible,isCartOpen:!1,isSearchOpen:!e.isSearchOpen})}),Object(j.a)(S,T.DISMISS_DRAWER,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;return Object(N.a)({},e,{isDrawerVisible:!1,isCartOpen:!1,isSearchOpen:!1})}),S),D=Object(A.createReducer)(I,$),w=(t(40),function(e){var a=e.children;return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"app__container"},a))}),M=y.dismissDrawer,L=function(e){var a=e.dismissDrawerConnected,t=e.headerTitle;return n.a.createElement(w,null,n.a.createElement("div",{className:"header__context"},n.a.createElement("div",{className:"header__icons"},n.a.createElement(R,{className:"header__icons--back",onClick:a})),n.a.createElement("div",{className:"header__title"},t)))};L.defaultProps={headerTitle:""};var x=Object(o.connect)(null,function(e){return Object(v.b)({dismissDrawerConnected:M},e)})(L),F=t(16),U=t.n(F),q=(t(134),function(e){var a=e.discount;return n.a.createElement("span",{className:"badge badge--discount"},"-".concat(a))});q.defaultProps={discount:""};var V=q,B=function(e){var a=e.image,t=e.onSale,r=e.discount,c=e.altAttr;return n.a.createElement("figure",{className:"product__image"},t&&n.a.createElement(V,{discount:r}),a?n.a.createElement("img",{src:a,alt:"Produto ".concat(c),title:c}):n.a.createElement("img",{src:"https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon\xedvel",alt:"Produto ".concat(c),title:c,className:"product__placeholder"}))};B.defaultProps={image:"",onSale:!1,discount:"",altAttr:""};var H,W,Q,Y=B,Z=function(e){var a=e.item,t=e.onClickAdd,r=e.onClickRemove,c=e.onClickDropItem;return n.a.createElement("div",{className:"product__list__item"},n.a.createElement("div",{className:"product__list__row"},n.a.createElement(Y,a),n.a.createElement("div",{className:"product__list__info"},n.a.createElement("p",{className:"product__list__name"},a.name),n.a.createElement("p",{className:"product__list__size"},a.sizes.filter(function(e){return a.selectedSize===e.sku}).map(function(e){return n.a.createElement("span",{key:U()()},"Tam.: ".concat(e.size))})),a.quantity&&n.a.createElement("div",{className:"product__list__quantity"},n.a.createElement(C,{className:"cart__icons",onClick:function(e){return r(e,a.name)}}),n.a.createElement("div",{className:"product__list__input"},a.quantity),n.a.createElement(k,{className:"cart__icons",onClick:function(e){return t(e,a)}}))),n.a.createElement("div",{className:"product__list__pricing"},n.a.createElement("div",{className:"product__list__current"},a.actual_price),n.a.createElement("div",{className:"product__list__installments"},a.installments))),a.quantity&&n.a.createElement("div",{className:"product__row"},n.a.createElement(z,{className:"cart__remove",onClick:function(e){return c(e,a.name)}},"Remover item")))},J=t(14),K=t(12),X=t.n(K),ee=t(18),ae=Object(A.createActions)({fetchProductsStart:[""],fetchProductsSuccess:["products"],fetchProductsError:["error"]}),te=ae.Types,re=ae.Creators,ne={loading:!1,error:null,products:[]},ce=(H={},Object(j.a)(H,te.FETCH_PRODUCTS_START,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne;return Object(N.a)({},e,{loading:!0,error:null})}),Object(j.a)(H,te.FETCH_PRODUCTS_SUCCESS,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;return Object(N.a)({},e,{loading:!1,error:null,products:a.products})}),Object(j.a)(H,te.FETCH_PRODUCTS_ERROR,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;return Object(N.a)({},e,{loading:!1,error:a.error})}),H),le=Object(A.createReducer)(ne,ce),se=Object(A.createActions)({loadProductStart:[""],loadProductSuccess:["product"],loadProductError:["error"],clearProduct:[""],addSize:["sku"]}),ie=se.Types,oe=se.Creators,ue={loading:!1,error:null,product:{},selectedSize:""},_e=(W={},Object(j.a)(W,ie.LOAD_PRODUCT_START,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue;return Object(N.a)({},e,{loading:!0,error:null})}),Object(j.a)(W,ie.LOAD_PRODUCT_SUCCESS,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0;return Object(N.a)({},e,{loading:!1,error:null,product:a.product})}),Object(j.a)(W,ie.LOAD_PRODUCT_ERROR,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0;return Object(N.a)({},e,{loading:!1,error:a.error})}),Object(j.a)(W,ie.ADD_SIZE,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0;return Object(N.a)({},e,{selectedSize:a.sku})}),Object(j.a)(W,ie.CLEAR_PRODUCT,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue;return Object(N.a)({},e,{loading:!1,error:null,product:{},selectedSize:""})}),W),de=Object(A.createReducer)(ue,_e),pe=function(e){return e.toString().normalize("NFD").toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},me=function(e,a){return a.filter(function(a){return pe(a.name)!==pe(e)})},ge=function(e,a){return a.filter(function(a){return pe(a.name)===pe(e)})},ve=function(e,a){return a.findIndex(function(a){return pe(a.name)===pe(e)})},fe=function(e){return e.sort(function(e,a){return e.name.localeCompare(a.name)})},be=function(e,a){var t=e.find(function(e){return e.selectedSize===a.selectedSize});return t?(t.quantity+=1,e):(e.push(Object(N.a)({},a,{quantity:1})),e)},he=Object(A.createActions)({addToCart:["product"],removeFromCart:["products"],emptyCart:[""],checkSizes:[""],dismissSizeWarning:[""]}),Ee=he.Types,ze=he.Creators,Oe={items:[],count:0,sizeIsMissing:!1},Pe=(Q={},Object(j.a)(Q,Ee.ADD_TO_CART,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,a=arguments.length>1?arguments[1]:void 0;return Object(N.a)({},e,{items:fe([a.product].concat(Object(J.a)(e.items))),count:[a.product].concat(Object(J.a)(e.items)).length})}),Object(j.a)(Q,Ee.REMOVE_FROM_CART,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,a=arguments.length>1?arguments[1]:void 0;return Object(N.a)({},e,{items:fe(Object(J.a)(a.products)),count:Object(J.a)(a.products).length})}),Object(j.a)(Q,Ee.EMPTY_CART,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe;return Object(N.a)({},e,{items:[],count:0,sizeIsMissing:!1})}),Object(j.a)(Q,Ee.CHECK_SIZES,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe;return Object(N.a)({},e,{sizeIsMissing:!0})}),Object(j.a)(Q,Ee.DISMISS_SIZE_WARNING,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe;return Object(N.a)({},e,{sizeIsMissing:!1})}),Q),Re=Object(A.createReducer)(Oe,Pe),ke=Object(A.createActions)({search:["products"]}),Ce=ke.Types,Se=ke.Creators,je={itemsFound:[]},Ne=Object(j.a)({},Ce.SEARCH,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,a=arguments.length>1?arguments[1]:void 0;return Object(N.a)({},e,{itemsFound:Object(J.a)(a.products)})}),Ae=Object(A.createReducer)(je,Ne),Ge=t(43),Te=function(e){return new Promise(function(a){return a(Object(J.a)(e.products))})},ye=function(e){return new Promise(function(a){return a(function(e,a,t){var r=pe(function(e){return e.split("/").pop()}(e));return t(a).then(function(e){return e.filter(function(e){return pe(e.name)===r})}).then(function(e){return e.reduce(function(e){return e})})}(e,Ge,Te))})},Ie={getProducts:function(){return Te(Ge)},getProductByPathname:function(e){return ye(e)}},$e=re.fetchProductsStart,De=re.fetchProductsSuccess,we=re.fetchProductsError,Me=oe.loadProductStart,Le=oe.loadProductSuccess,xe=oe.loadProductError,Fe=oe.clearProduct,Ue=oe.addSize,qe=ze.addToCart,Ve=ze.removeFromCart,Be=ze.checkSizes,He=ze.dismissSizeWarning,We=Se.search,Qe=y.dismissDrawer,Ye=function(e){return function(){var a=Object(ee.a)(X.a.mark(function a(t){return X.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(Me());case 2:return a.abrupt("return",Ie.getProductByPathname(e).then(function(e){return t(Qe()),t(Le(e)),e}).catch(function(e){return t(xe(e))}));case 3:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},Ze=function(e,a){return e.preventDefault(),function(e){return e(Ue(a))}},Je=function(e,a){return e.preventDefault(),function(){var e=Object(ee.a)(X.a.mark(function e(t,r){var n;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r().single.product,""!==a){e.next=3;break}return e.abrupt("return",t(Be("mensagem de erro")));case 3:return e.abrupt("return",t(qe(Object(N.a)({},n,{selectedSize:a}))));case 4:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}()},Ke=function(){return function(){var e=Object(ee.a)(X.a.mark(function e(a){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(Fe());case 2:return e.abrupt("return",a(He()));case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},Xe=function(e,a){return e.preventDefault(),function(e){return e(qe(Object(N.a)({},a)))}},ea=function(e,a){return e.preventDefault(),function(){var e=Object(ee.a)(X.a.mark(function e(t,r){var n,c;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r().cart.items,c=ve(a,n),!(ge(a,n).length>1)){e.next=6;break}return n.splice(c,1),e.abrupt("return",t(Ve(n)));case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}()},aa=function(e,a){return e.preventDefault(),function(){var e=Object(ee.a)(X.a.mark(function e(t,r){var n,c;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r().cart.items,c=me(a,n),e.abrupt("return",t(Ve(c)));case 3:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}()},ta=function(e){var a=e.target.value;return function(e,t){if(a.length<3)return e(We([]));var r=t().catalog.products,n=function(e,a){return a.filter(function(a){var t=a.name.toLowerCase(),r=e.toLowerCase();return t.includes(r)})}(a,r);return e(We(Object(J.a)(n)))}},ra=(t(138),function(e){var a=e.items,t=e.addQuantityConnected,r=e.removeQuantityConnected,c=e.removeItemConnected;return n.a.createElement("div",{className:"cart"},n.a.createElement("div",{className:"product__list"},a.length>0?a.reduce(be,[]).map(function(e){return n.a.createElement(Z,{item:e,key:U()(),onClickAdd:t,onClickRemove:r,onClickDropItem:c})}):n.a.createElement("span",{className:"cart__empty"},"Sua sacola est\xe1 vazia :\\")),n.a.createElement("div",{className:"cart__subtotal"},n.a.createElement("div",{className:"header__title"},"Subtotal - R$ ".concat(function(e){return e.reduce(function(e,a){var t=a.actual_price.replace("R$ ","").replace(",",".");return e+parseFloat(t)},0).toFixed(2).replace(".",",")}(a)))))});ra.defaultProps={items:[],addQuantityConnected:function(){},removeQuantityConnected:function(){},removeItemConnected:function(){}};var na=Object(o.connect)(function(e){return{items:e.cart.items}},function(e){return Object(v.b)({addQuantityConnected:Xe,removeQuantityConnected:ea,removeItemConnected:aa},e)})(ra),ca=t(158),la=(t(140),function(e){var a=e.itemsFound,t=e.searchConnected;return n.a.createElement("div",{className:"search"},n.a.createElement("div",{className:"search__form"},n.a.createElement("input",{className:"search__input",type:"text",placeholder:"Buscar por produto...",onChange:function(e){return t(e)}})),a.length>0&&n.a.createElement("div",{className:"header__title"},"".concat(a.length," items")),n.a.createElement("div",{className:"product__list"},a.length>0?a.map(function(e){return n.a.createElement(ca.a,{key:U()(),to:"/produto/".concat(pe(e.name))},n.a.createElement(Z,{item:e}))}):n.a.createElement("span",{className:"cart__empty"},"Nenhum item encontrado :\\")))});la.defaultProps={itemsFound:[],searchConnected:function(){}};var sa=Object(o.connect)(function(e){return{itemsFound:e.search.itemsFound}},function(e){return Object(v.b)({searchConnected:ta},e)})(la),ia=(t(142),function(e){var a=e.isDrawerVisible,t=e.isCartOpen,r=e.isSearchOpen,c=e.cartCounter;return n.a.createElement("div",{className:"drawer ".concat(a?"drawer--is-visible":"")},t&&n.a.createElement(x,{headerTitle:"Sacola (".concat(c,")")}),r&&n.a.createElement(x,{headerTitle:"Buscar Produtos"}),n.a.createElement("div",{className:"drawer__content"},t&&n.a.createElement(na,null),r&&n.a.createElement(sa,null)))});ia.defaultProps={isCartOpen:!1,isSearchOpen:!1,cartCounter:0};var oa=Object(o.connect)(function(e){return{isDrawerVisible:e.drawer.isDrawerVisible,isCartOpen:e.drawer.isCartOpen,isSearchOpen:e.drawer.isSearchOpen,cartCounter:e.cart.count}})(ia),ua=(t(144),Object(g.a)(Object(o.connect)(function(e){return{isDrawerVisible:e.drawer.isDrawerVisible}})(function(e){var a=e.children,t=e.isDrawerVisible;return n.a.createElement("div",{className:"app ".concat(t?"app--is-drawer-visible":"")},a,n.a.createElement(oa,null))}))),_a=(t(146),function(e){var a=e.counter;return n.a.createElement("sup",{className:"counter"},n.a.createElement("span",{className:"counter__value"},a))});_a.defaultProps={counter:0};function da(){return(da=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var pa=n.a.createElement("path",{d:"M44.23 2.238L0 87.197h14.75l12.89-24.643h39.72l13.06 24.643h15.53L51.08 2.237h-6.848zm16.462 47.114H34.561l13.097-25.03 13.034 25.03zM198.748 2.238l-34.3 62.587L130.38 2.238h-5.966L111.05 87.202h13.396l8.347-52.92 28.81 52.92h5.734l29.021-52.815 8.065 52.815h13.395L204.912 2.238zm77.676 0l-44.229 84.959h14.749l12.89-24.643h39.718l13.062 24.643h15.53l-44.868-84.96h-6.852zm16.463 47.114h-26.13l13.096-25.03 13.034 25.03zm96.078-.79c4.974-1.818 8.87-4.572 11.586-8.176 2.831-3.763 4.116-10.332 4.116-14.846 0-5.74-2.012-10.645-5.98-14.58-3.891-3.864-8.996-6.412-15.163-7.578-4.072-.776-7.975-1.144-19.119-1.144h-21.282V87.2h13.23V51.34h8.091l27.47 35.862h17.36l-28.143-36.57c2.298-.505 5.779-1.32 7.834-2.07zm.362-15.875c-1.442 1.844-3.497 3.21-6.107 4.065-2.748.903-7.121 1.352-12.986 1.352l-13.88-.092V15.47h14.24c6.045 0 10.38.423 12.908 1.254 2.43.8 4.325 2.09 5.81 3.93 1.443 1.806 2.147 3.739 2.147 5.929.002 2.263-.69 4.262-2.132 6.104zm109.446-20.121C490.028 4.226 479.013 0 466.058 0c-8.007 0-15.564 1.94-22.447 5.777-6.898 3.84-12.415 9.223-16.41 15.994-3.988 6.785-6.023 14.241-6.023 22.179 0 11.926 4.45 22.223 13.216 30.618 8.753 8.375 19.634 12.625 32.334 12.625 12.557 0 23.348-4.276 32.084-12.683C507.563 66.083 512 55.673 512 43.57c0-12.215-4.455-22.645-13.227-31.003zm.272 30.977c0 5.859-1.433 11.246-4.244 16.028-2.813 4.779-6.79 8.6-11.821 11.355-5.047 2.767-10.619 4.172-16.548 4.172-8.88 0-16.57-3.044-22.852-9.056-6.264-5.984-9.443-13.428-9.443-22.13 0-5.884 1.431-11.295 4.27-16.076 2.833-4.786 6.833-8.645 11.89-11.471 5.06-2.835 10.485-4.27 16.139-4.27 5.747 0 11.268 1.437 16.402 4.274 5.132 2.831 9.16 6.65 11.974 11.34 2.811 4.684 4.233 10.012 4.233 15.834z"}),ma=function(e){return n.a.createElement("svg",da({viewBox:"0 0 512 88",preserveAspectRatio:"xMidYMid"},e),pa)},ga=(t.p,function(e){return n.a.createElement(ma,e)}),va=y.toogleCart,fa=y.toogleSearch,ba=function(e){var a=e.toogleCartConnected,t=e.toogleSearchConnected,r=e.cartCounter;return n.a.createElement(w,null,n.a.createElement("div",{className:"header__default"},n.a.createElement(ca.a,{to:"/"},n.a.createElement(ga,{className:"header__brand"})),n.a.createElement("div",{className:"header__icons"},n.a.createElement(O,{className:"header__icons--search",onClick:t}),n.a.createElement(P,{className:"header__icons--cart",onClick:a},n.a.createElement(_a,{counter:r})))))};ba.defaultProps={cartCounter:0};var ha=Object(o.connect)(function(e){return{cartCounter:e.cart.count}},function(e){return Object(v.b)({toogleCartConnected:va,toogleSearchConnected:fa},e)})(ba),Ea=(t(148),function(e){var a=e.className,t=e.name,r=e.style,c=e.discount_percentage,l=e.on_sale,s=e.image,i=e.regular_price,o=e.actual_price;return n.a.createElement("div",{className:a,key:r},n.a.createElement(ca.a,{to:"/produto/".concat(pe(t))},n.a.createElement(Y,{image:s,onSale:l,discount:c,altAttr:t}),n.a.createElement("h3",{className:"product__name"},t),n.a.createElement("div",{className:"product__pricing"},l&&n.a.createElement("span",{className:"product__price product__price--from"},i),n.a.createElement("span",{className:"product__price product__price--to"},o))))});Ea.defaultProps={className:"product",name:"",style:"",discount_percentage:"",on_sale:"",image:"",regular_price:"",actual_price:""};var za=Ea,Oa=(t(150),function(e){var a=e.products,t=e.loading,r=e.clearProductConnected;return n.a.createElement("section",{className:"products"},n.a.createElement("div",{className:"app__container",onLoad:r},a.length>0&&n.a.createElement("div",{className:"header__title"},"".concat(a.length," items")),n.a.createElement("div",{className:"products__grid"},!t&&a.map(function(e){return n.a.createElement(za,Object.assign({key:U()(),className:"products__box"},e))}))))});Oa.defaultProps={products:[],loading:!0,clearProductConnected:function(){}};var Pa=Object(o.connect)(function(e){return{products:e.catalog.products,loading:e.catalog.loading}},function(e){return Object(v.b)({clearProductConnected:Ke},e)})(Oa),Ra=function(){return n.a.createElement(r.Fragment,null,n.a.createElement(ha,null),n.a.createElement(Pa,null))},ka=function(e){var a=e.name,t=e.onSale,r=e.regular_price,c=e.actual_price,l=e.installments,s=e.sizes,i=e.selectedSize,o=e.onClickAdd,u=e.onClickSize,_=e.sizeWasNotSelected;return n.a.createElement("div",{className:"product__content"},n.a.createElement("h3",{className:"product__name"},a),n.a.createElement("div",{className:"product__pricing"},t&&n.a.createElement("span",{className:"product__price product__price--from"},r),n.a.createElement("span",{className:"product__price product__price--to"},c),n.a.createElement("span",{className:"product__price product__price--installments"},"em at\xe9 ".concat(l))),n.a.createElement("div",{className:"product__sizes"},n.a.createElement("p",{className:"product__sizes__title"},"Escolha o tamanho"),_&&n.a.createElement("p",{className:"product__sizes__warning"},"\xc9 necess\xe1rio escolher um tamanho"),n.a.createElement("div",{className:"product__btn-group"},s.length>0&&s.filter(function(e){return!0===e.available}).map(function(e){return n.a.createElement(z,{onClick:function(a){return u(a,e.sku)},key:U()(),className:"product__filter ".concat(i===e.sku?"product__filter--selected":"")},e.size)}))),n.a.createElement("div",{className:"product__actions"},n.a.createElement(z,{className:"product__add-to-cart",onClick:function(e){return o(e,i)}},"Adicionar \xe0 Sacola")))};ka.defaultProps={name:"",onSale:!1,regular_price:"",actual_price:"",installments:"",sizes:[],selectedSize:"",sizeWasNotSelected:!1,onClickSize:function(){},onClickAdd:function(){}};var Ca=ka,Sa=(t(152),function(e){var a=e.pathname,t=e.product,r=e.selectedSize,c=e.selectSizeConnected,l=e.loadProductConnected,s=e.addToCartConnected,i=e.sizeIsMissing;return n.a.createElement("div",{className:"single-product",onLoad:function(){return l(a)}},n.a.createElement(Y,Object.assign({},t,{onSale:t.on_sale,discount:t.discount_percentage})),n.a.createElement(Ca,Object.assign({},t,{selectedSize:r,onClickSize:c,onClickAdd:s,onSale:t.on_sale,sizeWasNotSelected:i})))});Sa.defaultProps={selectedSize:"",sizeIsMissing:!1};var ja=Object(o.connect)(function(e){return{pathname:e.router.location.pathname,product:e.single.product,selectedSize:e.single.selectedSize,sizeIsMissing:e.cart.sizeIsMissing}},function(e){return Object(v.b)({loadProductConnected:Ye,selectSizeConnected:Ze,addToCartConnected:Je},e)})(Sa),Na=function(){return n.a.createElement(r.Fragment,null,n.a.createElement(ha,null),n.a.createElement(ja,null))},Aa=function(){return n.a.createElement(d.ConnectedRouter,{history:m},n.a.createElement(ua,null,n.a.createElement(u.a,null,n.a.createElement(_.a,{exact:!0,path:"/",component:Ra}),n.a.createElement(_.a,{exact:!0,path:"/produto/:id",component:Na}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(154);var Ga=t(60),Ta=function(e){return Object(v.c)({router:Object(d.connectRouter)(e),drawer:D,cart:Re,catalog:le,single:de,search:Ae})},ya=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(a){return}}(),Ia=[Ga.a,Object(d.routerMiddleware)(m)],$a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,Da=Object(v.e)(Ta(m),ya,$a(v.a.apply(void 0,Ia)));Da.subscribe(function(){!function(e){try{var a=JSON.stringify(e);localStorage.setItem("state",a)}catch(t){}}({cart:Da.getState().cart})});var wa=Da;i.a.load({google:{families:["Noto Sans SC:400,600,700","sans-serif"]}}),l.a.render(n.a.createElement(o.Provider,{store:wa,onLoad:wa.dispatch(function(){var e=Object(ee.a)(X.a.mark(function e(a){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a($e());case 2:return e.abrupt("return",Ie.getProducts().then(function(e){return a(De(e)),e}).catch(function(e){return a(we(e))}));case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}())},n.a.createElement(Aa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},40:function(e,a,t){},43:function(e){e.exports={products:[{name:"VESTIDO TRANSPASSE BOW",style:"20002605",code_color:"20002605_613",color_slug:"tapecaria",color:"TAPE\xc7ARIA",on_sale:!1,regular_price:"R$ 199,90",actual_price:"R$ 199,90",discount_percentage:"",installments:"3x R$ 66,63",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912",sizes:[{available:!1,size:"PP",sku:"5807_343_0_PP"},{available:!0,size:"P",sku:"5807_343_0_P"},{available:!0,size:"M",sku:"5807_343_0_M"},{available:!0,size:"G",sku:"5807_343_0_G"},{available:!1,size:"GG",sku:"5807_343_0_GG"}]},{name:"REGATA ALCINHA FOLK",style:"20002570",code_color:"20002570_614",color_slug:"preto",color:"PRETO",on_sale:!1,regular_price:"R$ 99,90",actual_price:"R$ 99,90",discount_percentage:"",installments:"3x R$ 33,30",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_002_catalog_1.jpg?1459948578",sizes:[{available:!0,size:"PP",sku:"5723_40130843_0_PP"},{available:!0,size:"P",sku:"5723_40130843_0_P"},{available:!0,size:"M",sku:"5723_40130843_0_M"},{available:!0,size:"G",sku:"5723_40130843_0_G"},{available:!0,size:"GG",sku:"5723_40130843_0_GG"}]},{name:"TOP CROPPED SUEDE",style:"20002575",code_color:"20002575_035",color_slug:"caramelo",color:"CARAMELO",on_sale:!1,regular_price:"R$ 129,90",actual_price:"R$ 129,90",discount_percentage:"",installments:"3x R$ 43,30",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002575_027_catalog_1.jpg?1459537946",sizes:[{available:!1,size:"PP",sku:"5733_1000054_0_PP"},{available:!0,size:"P",sku:"5733_1000054_0_P"},{available:!0,size:"M",sku:"5733_1000054_0_M"},{available:!0,size:"G",sku:"5733_1000054_0_G"},{available:!1,size:"GG",sku:"5733_1000054_0_GG"}]},{name:"BATA DECOTE FLUID",style:"20002581",code_color:"20002581_614",color_slug:"mini-folk",color:"MINI FOLK",on_sale:!1,regular_price:"R$ 149,90",actual_price:"R$ 149,90",discount_percentage:"",installments:"3x R$ 49,97",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611",sizes:[{available:!1,size:"PP",sku:"5749_341_0_PP"},{available:!0,size:"P",sku:"5749_341_0_P"},{available:!1,size:"M",sku:"5749_341_0_M"},{available:!0,size:"G",sku:"5749_341_0_G"},{available:!0,size:"GG",sku:"5749_341_0_GG"}]},{name:"T-SHIRT LEATHER DULL",style:"20002602",code_color:"20002602_027",color_slug:"marinho",color:"MARINHO",on_sale:!0,regular_price:"R$ 139,90",actual_price:"R$ 119,90",discount_percentage:"12%",installments:"3x R$ 39,97",image:"",sizes:[{available:!0,size:"PP",sku:"5793_1000032_0_PP"},{available:!0,size:"P",sku:"5793_1000032_0_P"},{available:!0,size:"M",sku:"5793_1000032_0_M"},{available:!1,size:"G",sku:"5793_1000032_0_G"},{available:!1,size:"GG",sku:"5793_1000032_0_GG"}]},{name:"CAMISA SUEDE SPAN",style:"20002584",code_color:"20002584_027",color_slug:"burgundy",color:"BURGUNDY",on_sale:!1,regular_price:"R$ 189,90",actual_price:"R$ 189,90",discount_percentage:"",installments:"3x R$ 63,30",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139",sizes:[{available:!1,size:"PP",sku:"5755_1000070_0_PP"},{available:!0,size:"P",sku:"5755_1000070_0_P"},{available:!0,size:"M",sku:"5755_1000070_0_M"},{available:!1,size:"G",sku:"5755_1000070_0_G"},{available:!1,size:"GG",sku:"5755_1000070_0_GG"}]},{name:"CAL\xc7A CLASSIC PRINT",style:"20002634",code_color:"20002634_613",color_slug:"free-dots",color:"FREE DOTS",on_sale:!1,regular_price:"R$ 159,90",actual_price:"R$ 159,90",discount_percentage:"",installments:"3x R$ 53,30",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002634_613_catalog_1.jpg?1459548109",sizes:[{available:!0,size:"36",sku:"5865_339_0_36"},{available:!0,size:"38",sku:"5865_339_0_38"},{available:!0,size:"40",sku:"5865_339_0_40"},{available:!0,size:"42",sku:"5865_339_0_42"},{available:!0,size:"44",sku:"5865_339_0_44"}]},{name:"REGATA ALCINHA FOLK",style:"20002570",code_color:"20002570_612",color_slug:"off-white",color:"OFF WHITE",on_sale:!1,regular_price:"R$ 99,90",actual_price:"R$ 99,90",discount_percentage:"",installments:"3x R$ 33,30",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_029_catalog_1.jpg?1459948578",sizes:[{available:!0,size:"PP",sku:"5723_1000058_0_PP"},{available:!1,size:"P",sku:"5723_1000058_0_P"},{available:!0,size:"M",sku:"5723_1000058_0_M"},{available:!0,size:"G",sku:"5723_1000058_0_G"},{available:!0,size:"GG",sku:"5723_1000058_0_GG"}]},{name:"MACAQUINHO ALFAIATARIA PEACE",style:"20002612",code_color:"20002612_612",color_slug:"floral-red",color:"FLORAL RED",on_sale:!1,regular_price:"R$ 149,90",actual_price:"R$ 149,90",discount_percentage:"",installments:"3x R$ 49,97",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002612_612_catalog_1.jpg?1459531023",sizes:[{available:!1,size:"PP",sku:"5819_337_0_PP"},{available:!0,size:"P",sku:"5819_337_0_P"},{available:!0,size:"M",sku:"5819_337_0_M"},{available:!1,size:"G",sku:"5819_337_0_G"},{available:!1,size:"GG",sku:"5819_337_0_GG"}]},{name:"BOLSA FLAP TRIANGLE",style:"20002945",code_color:"20002945_027",color_slug:"caramelo",color:"CARAMELO",on_sale:!0,regular_price:"R$ 199,90",actual_price:"R$ 159,90",discount_percentage:"25%",installments:"3x R$ 53,30",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002945_027_catalog_1.jpg?1459540966",sizes:[{available:!0,size:"U",sku:"6559_1000054_0_U"}]},{name:"VESTIDO LONGO FLOAT",style:"20002606",code_color:"20002606_612",color_slug:"tapecaria",color:"TAPE\xc7ARIA",on_sale:!1,regular_price:"R$ 219,90",actual_price:"R$ 219,90",discount_percentage:"",installments:"3x R$ 73,30",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002606_615_catalog_1.jpg?1459515279",sizes:[{available:!0,size:"PP",sku:"5811_343_0_PP"},{available:!1,size:"P",sku:"5811_343_0_P"},{available:!0,size:"M",sku:"5811_343_0_M"},{available:!0,size:"G",sku:"5811_343_0_G"},{available:!1,size:"GG",sku:"5811_343_0_GG"}]},{name:"BATA DECOTE FLUID",style:"20002581",code_color:"20002581_612",color_slug:"bohemian-preto",color:"BOHEMIAN PRETO",on_sale:!1,regular_price:"R$ 149,90",actual_price:"R$ 149,90",discount_percentage:"",installments:"3x R$ 49,97",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_611_catalog_1.jpg?1459536611",sizes:[{available:!1,size:"PP",sku:"5749_333_0_PP"},{available:!0,size:"P",sku:"5749_333_0_P"},{available:!0,size:"M",sku:"5749_333_0_M"},{available:!0,size:"G",sku:"5749_333_0_G"},{available:!1,size:"GG",sku:"5749_333_0_GG"}]},{name:"VESTIDO FRANZIDO RECORTES",style:"20001609",code_color:"20001609_029",color_slug:"preto",color:"PRETO",on_sale:!0,regular_price:"R$ 139,90",actual_price:"R$ 69,90",discount_percentage:"50%",installments:"2x R$ 34,95",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20001609_002_catalog_1.jpg?",sizes:[{available:!0,size:"PP",sku:"3627_40130843_0_PP"},{available:!0,size:"P",sku:"3627_40130843_0_P"},{available:!0,size:"M",sku:"3627_40130843_0_M"},{available:!1,size:"G",sku:"3627_40130843_0_G"},{available:!1,size:"GG",sku:"3627_40130843_0_GG"}]},{name:"CAL\xc7A COMFORT TASSEL",style:"20001786",code_color:"20001786_594",color_slug:"paisley-gipsy-azul",color:"PAISLEY GIPSY AZUL",on_sale:!0,regular_price:"R$ 139,90",actual_price:"R$ 84,90",discount_percentage:"39%",installments:"2x R$ 42,45",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20001786_594_catalog_1.jpg?1449159646",sizes:[{available:!0,size:"36",sku:"4029_259_0_36"},{available:!0,size:"38",sku:"4029_259_0_38"},{available:!0,size:"40",sku:"4029_259_0_40"},{available:!0,size:"42",sku:"4029_259_0_42"},{available:!1,size:"44",sku:"4029_259_0_44"}]},{name:"SAIA DENIM BOT\xd5ES",style:"20001695",code_color:"20001695_063",color_slug:"indigo-escuro",color:"INDIGO ESCURO",on_sale:!0,regular_price:"R$ 139,90",actual_price:"R$ 69,90",discount_percentage:"50%",installments:"2x R$ 34,95",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20001695_063_catalog_1.jpg?",sizes:[{available:!1,size:"36",sku:"3787_233_0_36"},{available:!0,size:"38",sku:"3787_233_0_38"},{available:!0,size:"40",sku:"3787_233_0_40"},{available:!0,size:"42",sku:"3787_233_0_42"},{available:!1,size:"44",sku:"3787_233_0_44"}]},{name:"BLUSA LA\xc7O ISTAMBUL",style:"20002600",code_color:"20002600_293",color_slug:"laranja-queimado",color:"LARANJA QUEIMADO",on_sale:!1,regular_price:"R$ 149,90",actual_price:"R$ 149,90",discount_percentage:"",installments:"3x R$ 49,97",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002600_293_catalog_1.jpg?1460416037",sizes:[{available:!0,size:"PP",sku:"5789_311_0_PP"},{available:!0,size:"P",sku:"5789_311_0_P"},{available:!0,size:"M",sku:"5789_311_0_M"},{available:!1,size:"G",sku:"5789_311_0_G"},{available:!1,size:"GG",sku:"5789_311_0_GG"}]},{name:"BLUSA RIB STRIPES",style:"20002829",code_color:"20002829_006",color_slug:"bege",color:"BEGE",on_sale:!1,regular_price:"R$ 149,90",actual_price:"R$ 149,90",discount_percentage:"",installments:"3x R$ 49,97",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002829_006_catalog_1.jpg?1459550820",sizes:[{available:!1,size:"PP",sku:"6299_1000012_0_PP"},{available:!0,size:"P",sku:"6299_1000012_0_P"},{available:!0,size:"M",sku:"6299_1000012_0_M"},{available:!0,size:"G",sku:"6299_1000012_0_G"},{available:!0,size:"GG",sku:"6299_1000012_0_GG"}]},{name:"CASACO WHITE FUR",style:"20002648",code_color:"20002648_029",color_slug:"off-white",color:"OFF-WHITE",on_sale:!1,regular_price:"R$ 239,90",actual_price:"R$ 239,90",discount_percentage:"",installments:"3x R$ 79,97",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20002648_029_catalog_1.jpg?1459552552",sizes:[{available:!1,size:"PP",sku:"5891_1000058_0_PP"},{available:!0,size:"P",sku:"5891_1000058_0_P"},{available:!0,size:"M",sku:"5891_1000058_0_M"},{available:!0,size:"G",sku:"5891_1000058_0_G"},{available:!1,size:"GG",sku:"5891_1000058_0_GG"}]},{name:"VESTIDO CURTO FESTIVAL",style:"20001684",code_color:"20001684_587",color_slug:"floral-vintage-vermelho",color:"FLORAL VINTAGE VERMELHO",on_sale:!0,regular_price:"R$ 129,90",actual_price:"R$ 59,90",discount_percentage:"54%",installments:"1x R$ 59,90",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20001684_585_catalog_1.jpg?",sizes:[{available:!1,size:"PP",sku:"3765_211_0_PP"},{available:!1,size:"P",sku:"3765_211_0_P"},{available:!1,size:"M",sku:"3765_211_0_M"},{available:!1,size:"G",sku:"3765_211_0_G"},{available:!0,size:"GG",sku:"3765_211_0_GG"}]},{name:"\xd3CULOS DE SOL BOLD",style:"20001882",code_color:"20001882_008",color_slug:"marrom",color:"MARRROM",on_sale:!0,regular_price:"R$ 109,90",actual_price:"R$ 49,90",discount_percentage:"55%",installments:"1x R$ 49,90",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20001882_008_catalog_1.jpg?",sizes:[{available:!0,size:"U",sku:"4229_1000016_0_U"}]},{name:"\xd3CULOS DE SOL AVIADOR VINTAGE",style:"20001883",code_color:"20001883_019",color_slug:"cinza",color:"CINZA",on_sale:!0,regular_price:"R$ 109,90",actual_price:"R$ 49,90",discount_percentage:"55%",installments:"1x R$ 49,90",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20001883_019_catalog_1.jpg?",sizes:[{available:!0,size:"U",sku:"4231_1000038_0_U"}]},{name:"PULSEIRA STYLISH",style:"20001913",code_color:"20001913_009",color_slug:"dourado",color:"dourado",on_sale:!1,regular_price:"R$ 29,90",actual_price:"R$ 29,90",discount_percentage:"",installments:"1x R$ 29,90",image:"https://d3l7rqep7l31az.cloudfront.net/images/products/20001913_009_catalog_1.jpg?",sizes:[{available:!0,size:"U",sku:"4279_1000018_0_U"}]}]}},61:function(e,a,t){e.exports=t(156)}},[[61,2,1]]]);
//# sourceMappingURL=main.8a3cc538.chunk.js.map