define(["backbone","underscore","modes","score"],function(e,t,n,r){return e.Model.extend({defaults:{easy:0,medium:0,hard:0,infinite:0},considerScore:function(e,t){var n=e.total(),r=this.get(t),i={};n>r&&(i[t]=n,this.set(i),this.writeScores())},loadScores:function(){var e=JSON.parse(localStorage.getItem("highScores")),n;e===null&&(e={}),n=t.defaults(t.pick(e,"easy","medium","hard","infinite"),{easy:e.Easy,medium:e.Medium,hard:e.Hard,infinite:e.Infinite}),t.each(n,function(e,i){if(t.isNumber(e))return;if(t.isObject(e)&&t.has(e,"timeBonus")&&t.has(e,"ringsCleared")){n[i]=(new r({timeBonus:e.timeBonus,ringsCleared:e.ringsCleared})).total();return}n[i]=0}),this.set(n)},writeScores:function(){localStorage.setItem("highScores",JSON.stringify(this))}})});