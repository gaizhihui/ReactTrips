/*
 * Compressed by JSA(www.xidea.org)
 */
(function(_,D){var F=[].slice,I=/\s+/,B=function(){return false},$=function(){return true};function H(_,A,$){(_||"").split(I).forEach(function(_){$(_,A)})}function E($){return new RegExp("(?:^| )"+$.replace(" "," .* ?")+"(?: |$)")}function G($){var _=(""+$).split(".");return{e:_[0],ns:_.slice(1).sort().join(" ")}}function A(_,A,C,B){var $,D;D=G(A);D.ns&&($=E(D.ns));return _.filter(function(_){return _&&(!D.e||_.e===D.e)&&(!D.ns||$.test(_.ns))&&(!C||_.cb===C||_.cb._cb===C)&&(!B||_.ctx===B)})}function C($,_){if(!(this instanceof C))return new C($,_);_&&D.extend(this,_);this.type=$;return this}C.prototype={isDefaultPrevented:B,isPropagationStopped:B,preventDefault:function(){this.isDefaultPrevented=$},stopPropagation:function(){this.isPropagationStopped=$}};_.event={on:function(_,B,A){var C=this,$;if(!B)return this;$=this._events||(this._events=[]);H(_,B,function(_,B){var D=G(_);D.cb=B;D.ctx=A;D.ctx2=A||C;D.id=$.length;$.push(D)});return this},one:function($,A,_){var B=this;if(!A)return this;H($,A,function(A,C){var $=function(){B.off(A,$);return C.apply(_||B,arguments)};$._cb=C;B.on(A,$,_)});return this},off:function(_,C,B){var $=this._events;if(!$)return this;if(!_&&!C&&!B){this._events=[];return this}H(_,C,function(_,C){A($,_,C,B).forEach(function(_){delete $[_.id]})});return this},trigger:function(D){var H=-1,B,_,E,G,$;if(!this._events||!D)return this;typeof D==="string"&&(D=new C(D));B=F.call(arguments,1);D.args=B;B.unshift(D);_=A(this._events,D.type);if(_){G=_.length;while(++H<G)if((E=D.isPropagationStopped())||false===($=_[H]).cb.apply($.ctx2,B)){E||(D.stopPropagation(),D.preventDefault());break}}return this}};_.Event=C})(gmu,gmu.$)