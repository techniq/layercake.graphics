import{X as e,T as t,d as n,b as r,Z as s,c as i,e as a,f as l,g as o,s as c,h as u,S as h,k as p,I as f,l as g,m as d,J as m,o as k,p as v,W as b,t as x,D as y,V as _,_ as w,n as $,U as S,K as z,E as A,F as R,N as L,aa as E,O as D,a8 as C,P as j,y as Z,a6 as q,x as I,Q as O,M as T,ad as P,a5 as U}from"./index.ac40091a.js";import{_ as B}from"./asyncToGenerator.5229e80b.js";import{e as M}from"./_examples.654e1fd5.js";import{h as V,a as N}from"./hljsDefineSvelte.7d8ab484.js";var H=e((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}})),F=(H.defaults,H.getDefaults,H.changeDefaults,/[&<>"']/),J=/[&<>"']/g,X=/[<>"']|&(?!#?\w+;)/,G=/[<>"']|&(?!#?\w+;)/g,K={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},W=function(e){return K[e]};var Q=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Y(e){return e.replace(Q,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var ee=/(^|[^\[])\^/g;var te=/[^\w:]/g,ne=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;var re={},se=/^[^:]+:\/*[^/]*$/,ie=/^([^:]+:)[\s\S]*$/,ae=/^([^:]+:\/*[^/]*)[\s\S]*$/;function le(e,t){re[" "+e]||(se.test(e)?re[" "+e]=e+"/":re[" "+e]=oe(e,"/",!0));var n=-1===(e=re[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(ie,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(ae,"$1")+t:e+t}function oe(e,t,n){var r=e.length;if(0===r)return"";for(var s=0;s<r;){var i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.substr(0,r-s)}var ce=function(e,t){if(t){if(F.test(e))return e.replace(J,W)}else if(X.test(e))return e.replace(G,W);return e},ue=Y,he=function(e,t,n){if(e){var r;try{r=decodeURIComponent(Y(n)).replace(te,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!ne.test(n)&&(n=le(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},pe=function(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=function(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var r=!1,s=t;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"})).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},ge=oe,de=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,r=0,s=0;s<n;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&--r<0)return s;return-1},me=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},ke={exec:function(){}},ve=function(e,t){e=e.source||e,t=t||"";var n={replace:function(t,r){return r=(r=r.source||r).replace(ee,"$1"),e=e.replace(t,r),n},getRegex:function(){return new RegExp(e,t)}};return n},be=pe,xe={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:ke,table:ke,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};xe.def=ve(xe.def).replace("label",xe._label).replace("title",xe._title).getRegex(),xe.bullet=/(?:[*+-]|\d{1,9}\.)/,xe.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,xe.item=ve(xe.item,"gm").replace(/bull/g,xe.bullet).getRegex(),xe.list=ve(xe.list).replace(/bull/g,xe.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+xe.def.source+")").getRegex(),xe._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",xe._comment=/<!--(?!-?>)[\s\S]*?-->/,xe.html=ve(xe.html,"i").replace("comment",xe._comment).replace("tag",xe._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),xe.paragraph=ve(xe._paragraph).replace("hr",xe.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",xe._tag).getRegex(),xe.blockquote=ve(xe.blockquote).replace("paragraph",xe.paragraph).getRegex(),xe.normal=be({},xe),xe.gfm=be({},xe.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),xe.pedantic=be({},xe.normal,{html:ve("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",xe._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:ke,paragraph:ve(xe.normal._paragraph).replace("hr",xe.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",xe.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var ye={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:ke,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:ke,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};ye.em=ve(ye.em).replace(/punctuation/g,ye._punctuation).getRegex(),ye._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,ye._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,ye._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,ye.autolink=ve(ye.autolink).replace("scheme",ye._scheme).replace("email",ye._email).getRegex(),ye._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,ye.tag=ve(ye.tag).replace("comment",xe._comment).replace("attribute",ye._attribute).getRegex(),ye._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ye._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,ye._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,ye.link=ve(ye.link).replace("label",ye._label).replace("href",ye._href).replace("title",ye._title).getRegex(),ye.reflink=ve(ye.reflink).replace("label",ye._label).getRegex(),ye.normal=be({},ye),ye.pedantic=be({},ye.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:ve(/^!?\[(label)\]\((.*?)\)/).replace("label",ye._label).getRegex(),reflink:ve(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ye._label).getRegex()}),ye.gfm=be({},ye.normal,{escape:ve(ye.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),ye.gfm.url=ve(ye.gfm.url,"i").replace("email",ye.gfm._extended_email).getRegex(),ye.breaks=be({},ye.gfm,{br:ve(ye.br).replace("{2,}","*").getRegex(),text:ve(ye.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var _e={block:xe,inline:ye},we=H.defaults,$e=_e.block,Se=ge,ze=fe,Ae=ce,Re=function(){function e(t){n(this,e),this.tokens=[],this.tokens.links=Object.create(null),this.options=t||we,this.rules=$e.normal,this.options.pedantic?this.rules=$e.pedantic:this.options.gfm&&(this.rules=$e.gfm)}return t(e,[{key:"lex",value:function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}},{key:"token",value:function(e,t){var n,r,s,i,a,l,o,c,u,h,p,f,g,d,m,k;for(e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e)){var v=this.tokens[this.tokens.length-1];e=e.substring(s[0].length),v&&"paragraph"===v.type?v.text+="\n"+s[0].trimRight():(s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?s:Se(s,"\n")}))}else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2]?s[2].trim():s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if((s=this.rules.nptable.exec(e))&&(l={type:"table",header:ze(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===l.align.length){for(e=e.substring(s[0].length),p=0;p<l.align.length;p++)/^ *-+: *$/.test(l.align[p])?l.align[p]="right":/^ *:-+: *$/.test(l.align[p])?l.align[p]="center":/^ *:-+ *$/.test(l.align[p])?l.align[p]="left":l.align[p]=null;for(p=0;p<l.cells.length;p++)l.cells[p]=ze(l.cells[p],l.header.length);this.tokens.push(l)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),o={type:"list_start",ordered:d=(i=s[2]).length>1,start:d?+i:"",loose:!1},this.tokens.push(o),c=[],n=!1,g=(s=s[0].match(this.rules.item)).length,p=0;p<g;p++)h=(l=s[p]).length,~(l=l.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(h-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+h+"}","gm"),"")),p!==g-1&&(a=$e.bullet.exec(s[p+1])[0],(i.length>1?1===a.length:a.length>1||this.options.smartLists&&a!==i)&&(e=s.slice(p+1).join("\n")+e,p=g-1)),r=n||/\n\n(?!\s*$)/.test(l),p!==g-1&&(n="\n"===l.charAt(l.length-1),r||(r=n)),r&&(o.loose=!0),k=void 0,(m=/^\[[ xX]\] /.test(l))&&(k=" "!==l[1],l=l.replace(/^\[[ xX]\] +/,"")),u={type:"list_item_start",task:m,checked:k,loose:r},c.push(u),this.tokens.push(u),this.token(l,!1),this.tokens.push({type:"list_item_end"});if(o.loose)for(g=c.length,p=0;p<g;p++)c[p].loose=!0;this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):Ae(s[0]):s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),f=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[f]||(this.tokens.links[f]={href:s[2],title:s[3]});else if((s=this.rules.table.exec(e))&&(l={type:"table",header:ze(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===l.align.length){for(e=e.substring(s[0].length),p=0;p<l.align.length;p++)/^ *-+: *$/.test(l.align[p])?l.align[p]="right":/^ *:-+: *$/.test(l.align[p])?l.align[p]="center":/^ *:-+ *$/.test(l.align[p])?l.align[p]="left":l.align[p]=null;for(p=0;p<l.cells.length;p++)l.cells[p]=ze(l.cells[p].replace(/^ *\| *| *\| *$/g,""),l.header.length);this.tokens.push(l)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2].charAt(0)?1:2,text:s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}}],[{key:"lex",value:function(t,n){return new e(n).lex(t)}},{key:"rules",get:function(){return $e}}]),e}(),Le=H.defaults,Ee=he,De=ce,Ce=function(){function e(t){n(this,e),this.options=t||Le}return t(e,[{key:"code",value:function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var s=this.options.highlight(e,r);null!=s&&s!==e&&(n=!0,e=s)}return r?'<pre><code class="'+this.options.langPrefix+De(r,!0)+'">'+(n?e:De(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:De(e,!0))+"</code></pre>"}},{key:"blockquote",value:function(e){return"<blockquote>\n"+e+"</blockquote>\n"}},{key:"html",value:function(e){return e}},{key:"heading",value:function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}},{key:"hr",value:function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}},{key:"list",value:function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}},{key:"listitem",value:function(e){return"<li>"+e+"</li>\n"}},{key:"checkbox",value:function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}},{key:"paragraph",value:function(e){return"<p>"+e+"</p>\n"}},{key:"table",value:function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}},{key:"tablerow",value:function(e){return"<tr>\n"+e+"</tr>\n"}},{key:"tablecell",value:function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}},{key:"strong",value:function(e){return"<strong>"+e+"</strong>"}},{key:"em",value:function(e){return"<em>"+e+"</em>"}},{key:"codespan",value:function(e){return"<code>"+e+"</code>"}},{key:"br",value:function(){return this.options.xhtml?"<br/>":"<br>"}},{key:"del",value:function(e){return"<del>"+e+"</del>"}},{key:"link",value:function(e,t,n){if(null===(e=Ee(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href="'+De(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>"}},{key:"image",value:function(e,t,n){if(null===(e=Ee(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"}},{key:"text",value:function(e){return e}}]),e}(),je=function(){function e(){n(this,e),this.seen={}}return t(e,[{key:"slug",value:function(e){var t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}}]),e}(),Ze=H.defaults,qe=_e.inline,Ie=de,Oe=ce,Te=function(){function e(t,r){if(n(this,e),this.options=r||Ze,this.links=t,this.rules=qe.normal,this.options.renderer=this.options.renderer||new Ce,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=qe.pedantic:this.options.gfm&&(this.options.breaks?this.rules=qe.breaks:this.rules=qe.gfm)}return t(e,[{key:"output",value:function(t){for(var n,r,s,i,a,l,o="";t;)if(a=this.rules.escape.exec(t))t=t.substring(a[0].length),o+=Oe(a[1]);else if(a=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(a[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(a[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(this.inRawBlock=!1),t=t.substring(a[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):Oe(a[0]):a[0];else if(a=this.rules.link.exec(t)){var c=Ie(a[2],"()");if(c>-1){var u=(0===a[0].indexOf("!")?5:4)+a[1].length+c;a[2]=a[2].substring(0,c),a[0]=a[0].substring(0,u).trim(),a[3]=""}t=t.substring(a[0].length),this.inLink=!0,s=a[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s))?(s=n[1],i=n[3]):i="":i=a[3]?a[3].slice(1,-1):"",s=s.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(a,{href:e.escapes(s),title:e.escapes(i)}),this.inLink=!1}else if((a=this.rules.reflink.exec(t))||(a=this.rules.nolink.exec(t))){if(t=t.substring(a[0].length),n=(a[2]||a[1]).replace(/\s+/g," "),!(n=this.links[n.toLowerCase()])||!n.href){o+=a[0].charAt(0),t=a[0].substring(1)+t;continue}this.inLink=!0,o+=this.outputLink(a,n),this.inLink=!1}else if(a=this.rules.strong.exec(t))t=t.substring(a[0].length),o+=this.renderer.strong(this.output(a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.em.exec(t))t=t.substring(a[0].length),o+=this.renderer.em(this.output(a[6]||a[5]||a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.code.exec(t))t=t.substring(a[0].length),o+=this.renderer.codespan(Oe(a[2].trim(),!0));else if(a=this.rules.br.exec(t))t=t.substring(a[0].length),o+=this.renderer.br();else if(a=this.rules.del.exec(t))t=t.substring(a[0].length),o+=this.renderer.del(this.output(a[1]));else if(a=this.rules.autolink.exec(t))t=t.substring(a[0].length),s="@"===a[2]?"mailto:"+(r=Oe(this.mangle(a[1]))):r=Oe(a[1]),o+=this.renderer.link(s,null,r);else if(this.inLink||!(a=this.rules.url.exec(t))){if(a=this.rules.text.exec(t))t=t.substring(a[0].length),this.inRawBlock?o+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):Oe(a[0]):a[0]):o+=this.renderer.text(Oe(this.smartypants(a[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===a[2])s="mailto:"+(r=Oe(a[0]));else{do{l=a[0],a[0]=this.rules._backpedal.exec(a[0])[0]}while(l!==a[0]);r=Oe(a[0]),s="www."===a[1]?"http://"+r:r}t=t.substring(a[0].length),o+=this.renderer.link(s,null,r)}return o}},{key:"outputLink",value:function(e,t){var n=t.href,r=t.title?Oe(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,Oe(e[1]))}},{key:"smartypants",value:function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}},{key:"mangle",value:function(e){if(!this.options.mangle)return e;for(var t,n=e.length,r="",s=0;s<n;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r}}],[{key:"output",value:function(t,n,r){return new e(n,r).output(t)}},{key:"escapes",value:function(t){return t?t.replace(e.rules._escapes,"$1"):t}},{key:"rules",get:function(){return qe}}]),e}(),Pe=function(){function e(){n(this,e)}return t(e,[{key:"strong",value:function(e){return e}},{key:"em",value:function(e){return e}},{key:"codespan",value:function(e){return e}},{key:"del",value:function(e){return e}},{key:"text",value:function(e){return e}},{key:"link",value:function(e,t,n){return""+n}},{key:"image",value:function(e,t,n){return""+n}},{key:"br",value:function(){return""}}]),e}(),Ue=H.defaults,Be=pe,Me=ue,Ve=function(){function e(t){n(this,e),this.tokens=[],this.token=null,this.options=t||Ue,this.options.renderer=this.options.renderer||new Ce,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new je}return t(e,[{key:"parse",value:function(e){this.inline=new Te(e.links,this.options),this.inlineText=new Te(e.links,Be({},this.options,{renderer:new Pe})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t}},{key:"next",value:function(){return this.token=this.tokens.pop(),this.token}},{key:"peek",value:function(){return this.tokens[this.tokens.length-1]||0}},{key:"parseText",value:function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)}},{key:"tok",value:function(){var e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,Me(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var t,n,r,s,i="";for(r="",t=0;t<this.token.header.length;t++)r+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(r),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],r="",s=0;s<n.length;s++)r+=this.renderer.tablecell(this.inline.output(n[s]),{header:!1,align:this.token.align[s]});e+=this.renderer.tablerow(r)}return this.renderer.table(i,e);case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":e="";for(var a=this.token.ordered,l=this.token.start;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,a,l);case"list_item_start":e="";var o=this.token.loose,c=this.token.checked,u=this.token.task;if(this.token.task)if(o)if("text"===this.peek().type){var h=this.peek();h.text=this.renderer.checkbox(c)+" "+h.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(c)});else e+=this.renderer.checkbox(c);for(;"list_item_end"!==this.next().type;)e+=o||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,u,c);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var p='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(p);console.log(p)}}}],[{key:"parse",value:function(t,n){return new e(n).parse(t)}}]),e}(),Ne=pe,He=me,Fe=ce,Je=H.getDefaults,Xe=H.changeDefaults,Ge=H.defaults;function Ke(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){var s=function(){n||(n=t,t=null),t=Ne({},Ke.defaults,t||{}),He(t);var r,s,i=t.highlight,a=0;try{r=Re.lex(e,t)}catch(e){return{v:n(e)}}s=r.length;var l=function(e){if(e)return t.highlight=i,n(e);var s;try{s=Ve.parse(r,t)}catch(t){e=t}return t.highlight=i,e?n(e):n(null,s)};if(!i||i.length<3)return{v:l()};if(delete t.highlight,!s)return{v:l()};for(;a<r.length;a++)!function(e){"code"!==e.type?--s||l():i(e.text,e.lang,(function(t,n){return t?l(t):null==n||n===e.text?--s||l():(e.text=n,e.escaped=!0,void(--s||l()))}))}(r[a]);return{v:void 0}}();if("object"===r(s))return s.v}try{return t=Ne({},Ke.defaults,t||{}),He(t),Ve.parse(Re.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||Ke.defaults).silent)return"<p>An error occurred:</p><pre>"+Fe(e.message+"",!0)+"</pre>";throw e}}Ke.options=Ke.setOptions=function(e){return Ne(Ke.defaults,e),Xe(Ke.defaults),Ke},Ke.getDefaults=Je,Ke.defaults=Ge,Ke.Parser=Ve,Ke.parser=Ve.parse,Ke.Renderer=Ce,Ke.TextRenderer=Pe,Ke.Lexer=Re,Ke.lexer=Re.lex,Ke.InlineLexer=Te,Ke.inlineLexer=Te.output,Ke.Slugger=je,Ke.parse=Ke;for(var We=Ke,Qe=[],Ye=0;Ye<256;Ye++){for(var et=Ye,tt=0;tt<8;tt++)et=1&et?3988292384^et>>>1:et>>>1;Qe[Ye]=et}var nt=function(e){var t=-1,n=!0,r=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value;t=t>>>8^Qe[255&(t^l)]}}catch(e){r=!0,s=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return-1^t},rt=function(e,t){for(var n=[];t--;)n.push(255&e),e>>>=8;return n},st=function(e){return"string"==typeof e?s(e).map((function(e){return e.charCodeAt(0)})):e},it=function(e){var t=[],n=[],r=!0,i=!1,a=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){var c=l.value,u=c.path,h=c.data,p=st(h),f=st(u),g=[10,0,0,0,0,0,0,0,0,0].concat(s(rt(nt(p),4)),s(rt(p.length,4)),s(rt(p.length,4)),s(rt(f.length,2)),[0,0]);n.push.apply(n,[80,75,1,2,20,0].concat(s(g),[0,0,0,0,0,0,0,0,0,0],s(rt(t.length,4)),s(f))),t=[].concat(s(t),[80,75,3,4],s(g),s(f),s(p))}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return[].concat(s(t),n,[80,75,5,6,0,0,0,0],s(rt(e.length,2)),s(rt(e.length,2)),s(rt(n.length,4)),s(rt(t.length,4)),[0,0])},at=function(e){return new Blob([Uint8Array.from(it(e))],{type:"application/zip"})},lt=function(e){return Buffer.from(it(e))},ot=function(e){return("undefined"==typeof Blob?lt:at)(e)},ct=function(e,t){var n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,r.style.display="none",document.body.appendChild(r),r.click(),URL.revokeObjectURL(n),r.remove()};function ut(e){var t,n,r;return{c:function(){t=p("button"),n=f("Download      "),this.h()},l:function(e){t=g(e,"BUTTON",{disabled:!0,title:!0,class:!0,style:!0});var r=d(t);n=m(r,"Download      "),r.forEach(k),this.h()},h:function(){t.disabled=e[0],v(t,"title","download zip file"),v(t,"class","icon svelte-oy8tk5"),b(t,"background-image","url(/icons/download.svg)")},m:function(s,i){x(s,t,i),y(t,n),r=_(t,"click",e[1])},p:function(e,n){1&w(n,1)[0]&&(t.disabled=e[0])},i:$,o:$,d:function(e){e&&k(t),r()}}}function ht(e,t,n){var r=t.data,i=t.slug,a=!1,l=[r.main].concat(s(r.components),s(r.componentComponents)).reduce((function(e,t){return e.concat(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.match(/from\s'(.+)'?/gm)||[],n=t.map((function(e){return e.replace(/(from |'|"|;)/g,"")})).filter((function(e){return!e.startsWith(".")}));return n}(t.contents))}),[]).reduce((function(e,t){return e.includes(t)?e:(e.push(t),e)}),[]);function o(){return(o=B(S.mark((function e(){var t,o,c,u,h,p,f;return S.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(0,a=!0),t=(new Date).getTime(),e.next=4,window.fetch("/svelte-app.json?".concat(t));case 4:return e.next=6,e.sent.json();case 6:return o=e.sent,e.next=9,window.fetch("/deps.json?".concat(t));case 9:return e.next=11,e.sent.json();case 11:c=e.sent,l.length>0&&(u=o.findIndex((function(e){return"package.json"===e.path})),h=JSON.parse(o[u].data),p={},f={},l.forEach((function(e){if("layercake"===e)f[e]=c[e];else{if("svelte"===e)return;p[e]=c[e]}c[e]||window.alert('Missing dependency, add "'.concat(e,"\" to layercake.graphic's package.json"))})),Object.assign(h.dependencies,p),Object.assign(h.devDependencies,f),o[u].data=JSON.stringify(h,null,"  ")),o.push.apply(o,s(r.components.map((function(e){return{path:"src/".concat(e.title.replace("./","")),data:e.contents}})))),o.push.apply(o,s(r.modules.map((function(e){return{path:"src/".concat(e.title.replace("./","")),data:e.contents}})))),o.push.apply(o,s(r.componentModules.map((function(e){return{path:"src/".concat(e.title.replace("../","")),data:e.contents}})))),o.push.apply(o,s(r.componentComponents.map((function(e){return{path:"src/".concat(e.title),data:e.contents}})))),o.push.apply(o,s(r.csvs.map((function(e){return{path:"src/".concat(e.title.replace("../","")),data:e.contents}})))),o.push({path:"src/App.svelte",data:r.main.contents}),ct(ot(o.filter(Boolean)),"layercake-".concat(i,".zip")),n(0,a=!1);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return e.$set=function(e){"data"in e&&n(2,r=e.data),"slug"in e&&n(3,i=e.slug)},[a,function(){return o.apply(this,arguments)},r,i]}var pt=function(e){function t(e){var r;return n(this,t),r=a(this,l(t).call(this)),o(u(r),e,ht,ut,c,{data:2,slug:3}),r}return i(t,h),t}(),ft=P.document;function gt(e,t,n){var r=e.slice();return r[10]=t[n],r}function dt(e,t,n){var r=e.slice();return r[10]=t[n],r}function mt(e){var t,n=e[5](e[1].dek)+"";return{c:function(){t=p("div"),this.h()},l:function(e){t=g(e,"DIV",{class:!0}),d(t).forEach(k),this.h()},h:function(){v(t,"class","dek svelte-l2ls6t")},m:function(e,r){x(e,t,r),t.innerHTML=n},p:function(e,r){2&r&&n!==(n=e[5](e[1].dek)+"")&&(t.innerHTML=n)},d:function(e){e&&k(t)}}}function kt(e){var t,n,r,s,i=e[10].title+"";function a(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return((t=e)[9].apply(t,[e[10]].concat(r)))}return{c:function(){t=p("li"),n=f(i),this.h()},l:function(e){t=g(e,"LI",{class:!0});var r=d(t);n=m(r,i),r.forEach(k),this.h()},h:function(){v(t,"class",r="tab "+(e[2]===wt(e[10].title)?"active":"")+" svelte-l2ls6t")},m:function(e,r){x(e,t,r),y(t,n),s=_(t,"click",a)},p:function(s,a){e=s,8&a&&i!==(i=e[10].title+"")&&z(n,i),12&a&&r!==(r="tab "+(e[2]===wt(e[10].title)?"active":"")+" svelte-l2ls6t")&&v(t,"class",r)},d:function(e){e&&k(t),s()}}}function vt(e){var t,n,r,s=_t(e[10].contents,e[10].title)+"";return{c:function(){t=p("div"),n=p("pre"),r=A(),this.h()},l:function(e){t=g(e,"DIV",{class:!0,style:!0});var s=d(t);n=g(s,"PRE",{class:!0}),d(n).forEach(k),r=R(s),s.forEach(k),this.h()},h:function(){v(n,"class","svelte-l2ls6t"),v(t,"class","contents"),b(t,"display",e[2]===wt(e[10].title)?"block":"none")},m:function(e,i){x(e,t,i),y(t,n),n.innerHTML=s,y(t,r)},p:function(e,r){8&r&&s!==(s=_t(e[10].contents,e[10].title)+"")&&(n.innerHTML=s),12&r&&b(t,"display",e[2]===wt(e[10].title)?"block":"none")},d:function(e){e&&k(t)}}}function bt(e){var t,n,r,s,i,a,l,o,c,u,h,b,$,S,P,B,M,V,N,H,F,J,X,G,K=e[4].title+"";ft.title=t=e[4].title;var W=e[4].component;if(W)var Q=new W({});for(var Y=new pt({props:{data:e[1],slug:e[0]}}),ee=e[1].dek&&mt(e),te=e[3],ne=[],re=0;re<te.length;re+=1)ne[re]=kt(dt(e,te,re));for(var se=e[3],ie=[],ae=0;ae<se.length;ae+=1)ie[ae]=vt(gt(e,se,ae));return{c:function(){n=p("link"),r=A(),s=p("div"),i=p("h1"),a=f(K),l=p("a"),o=f("Edit"),u=A(),h=p("div"),Q&&L(Q.$$.fragment),b=A(),$=p("div"),L(Y.$$.fragment),S=A(),ee&&ee.c(),P=A(),B=p("div"),M=p("ul");for(var e=0;e<ne.length;e+=1)ne[e].c();V=A(),N=p("div"),H=p("div"),F=A();for(var t=0;t<ie.length;t+=1)ie[t].c();this.h()},l:function(e){var t=E('[data-svelte="svelte-dklk17"]',ft.head);n=g(t,"LINK",{rel:!0,href:!0}),t.forEach(k),r=R(e),s=g(e,"DIV",{class:!0});var c=d(s);i=g(c,"H1",{});var p=d(i);a=m(p,K),l=g(p,"A",{class:!0,href:!0,target:!0,rel:!0});var f=d(l);o=m(f,"Edit"),f.forEach(k),p.forEach(k),u=R(c),h=g(c,"DIV",{class:!0});var v=d(h);Q&&D(Q.$$.fragment,v),v.forEach(k),b=R(c),$=g(c,"DIV",{class:!0});var x=d($);D(Y.$$.fragment,x),x.forEach(k),S=R(c),ee&&ee.l(c),P=R(c),B=g(c,"DIV",{id:!0,class:!0});var y=d(B);M=g(y,"UL",{id:!0,class:!0});for(var _=d(M),w=0;w<ne.length;w+=1)ne[w].l(_);_.forEach(k),V=R(y),N=g(y,"DIV",{id:!0,class:!0});var z=d(N);H=g(z,"DIV",{class:!0}),d(H).forEach(k),F=R(z);for(var A=0;A<ie.length;A+=1)ie[A].l(z);z.forEach(k),y.forEach(k),c.forEach(k),this.h()},h:function(){v(n,"rel","stylesheet"),v(n,"href","hljs.css"),v(l,"class","edit-repl svelte-l2ls6t"),v(l,"href",c="https://svelte.dev/repl/"+e[4].replPath),v(l,"target","_blank"),v(l,"rel","nofollow"),v(h,"class","chart-hero svelte-l2ls6t"),v($,"class","download svelte-l2ls6t"),v(M,"id","page-nav"),v(M,"class","svelte-l2ls6t"),v(H,"class","copy svelte-l2ls6t"),v(N,"id","contents-container"),v(N,"class","svelte-l2ls6t"),v(B,"id","pages"),v(B,"class",J=C(e[1].dek?"has-dek":"")+" svelte-l2ls6t"),v(s,"class","main svelte-l2ls6t")},m:function(t,c){y(ft.head,n),x(t,r,c),x(t,s,c),y(s,i),y(i,a),y(i,l),y(l,o),y(s,u),y(s,h),Q&&j(Q,h,null),y(s,b),y(s,$),j(Y,$,null),y(s,S),ee&&ee.m(s,null),y(s,P),y(s,B),y(B,M);for(var p=0;p<ne.length;p+=1)ne[p].m(M,null);y(B,V),y(B,N),y(N,H),y(N,F);for(var f=0;f<ie.length;f+=1)ie[f].m(N,null);X=!0,G=_(H,"click",e[6])},p:function(e,n){var r=w(n,1)[0];if((!X||16&r)&&t!==(t=e[4].title)&&(ft.title=t),(!X||16&r)&&K!==(K=e[4].title+"")&&z(a,K),(!X||16&r&&c!==(c="https://svelte.dev/repl/"+e[4].replPath))&&v(l,"href",c),W!==(W=e[4].component)){if(Q){U();var i=Q;Z(i.$$.fragment,1,0,(function(){O(i,1)})),q()}W?(Q=new W({}),L(Q.$$.fragment),I(Q.$$.fragment,1),j(Q,h,null)):Q=null}var o={};if(2&r&&(o.data=e[1]),1&r&&(o.slug=e[0]),Y.$set(o),e[1].dek?ee?ee.p(e,r):((ee=mt(e)).c(),ee.m(s,P)):ee&&(ee.d(1),ee=null),12&r){var u;for(te=e[3],u=0;u<te.length;u+=1){var p=dt(e,te,u);ne[u]?ne[u].p(p,r):(ne[u]=kt(p),ne[u].c(),ne[u].m(M,null))}for(;u<ne.length;u+=1)ne[u].d(1);ne.length=te.length}if(12&r){var f;for(se=e[3],f=0;f<se.length;f+=1){var g=gt(e,se,f);ie[f]?ie[f].p(g,r):(ie[f]=vt(g),ie[f].c(),ie[f].m(N,null))}for(;f<ie.length;f+=1)ie[f].d(1);ie.length=se.length}(!X||2&r&&J!==(J=C(e[1].dek?"has-dek":"")+" svelte-l2ls6t"))&&v(B,"class",J)},i:function(e){X||(Q&&I(Q.$$.fragment,e),I(Y.$$.fragment,e),X=!0)},o:function(e){Q&&Z(Q.$$.fragment,e),Z(Y.$$.fragment,e),X=!1},d:function(e){k(n),e&&k(r),e&&k(s),Q&&O(Q),O(Y),ee&&ee.d(),T(ne,e),T(ie,e),G()}}}function xt(e){return yt.apply(this,arguments)}function yt(){return(yt=B(S.mark((function e(t){var n,r,s;return S.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,t.query,e.next=3,this.fetch("example/".concat(n.slug,".json"));case 3:return r=e.sent,e.next=6,r.json();case 6:if(s=e.sent,200!==r.status){e.next=11;break}return e.abrupt("return",{slug:n.slug,data:s});case 11:this.error(r.status,s.message);case 12:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function _t(e,t){var n=t.split("."),r=n[n.length-1];return"csv"===r&&(r="diff"),V.highlight(r,e).value}function wt(e){var t=e.split("/");return t[t.length-1].split(".")[0].toLowerCase()}function $t(e,t,n){V.registerLanguage("svelte",N),N(V);var r=t.slug,s=t.data,i="index",a=new We.Renderer;var l=new Map;M.forEach((function(e){l.set(e.slug,e)}));var o,c;return e.$set=function(e){"slug"in e&&n(0,r=e.slug),"data"in e&&n(1,s=e.data)},e.$$.update=function(){2&e.$$.dirty&&n(3,o=[s.main].concat(s.components).concat(s.modules).concat(s.componentModules).concat(s.componentComponents).concat(s.csvs)),1&e.$$.dirty&&n(4,c=l.get(r))},[r,s,i,o,c,function(e){return We(e,{renderer:a})},function(){var e=o.filter((function(e){return wt(e.title)===i}))[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.textContent=e,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(e){return console.warn("Copy to clipboard failed.",e),!1}finally{document.body.removeChild(t)}}},a,l,function(e){return n(2,i=wt(e.title))}]}var St=function(e){function t(e){var r;return n(this,t),r=a(this,l(t).call(this)),o(u(r),e,$t,bt,c,{slug:0,data:1}),r}return i(t,h),t}();export default St;export{xt as preload};
