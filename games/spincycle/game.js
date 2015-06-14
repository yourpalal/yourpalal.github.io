define(["zepto","underscore","backbone","gameView","modes","timer","ScoreTable"],function(e,t,n,r,i,s,o){var u=n.Model.extend({defaults:{state:null,mode:null},states:{running:0,paused:1,won:2,lost:3},initialize:function(){this.timer=new s(50),this.gameView=new r(e("#canvas-fg")[0].getContext("2d"),e("#canvas-bg")[0].getContext("2d"))},state:function(){return this.get("state")},userLost:function(e){this.endGame(e,this.states.lost)},userWon:function(){this.endGame("You did it!",this.states.won)},endGame:function(e,t){var n=this.get("mode");this.set({state:t}),n.updateScore(),drawer.updateGameOverTab(scoreTable.get(n.getModeString().toLowerCase()),n.score,e),scoreTable.considerScore(n.score,n.getModeString().toLowerCase())},newMode:function(e){this.timer.scope=this,this.timer.update=function(e){var t=this.get("mode");this.state()===this.states.running&&(t.update(e),t.draw(),this.state()===this.states.running&&this.timer.run())},e.init(),e.drawOnce(),this.set({mode:e,state:this.states.running}),this.timer.run()},newGame:function(){this.timer.clear(),this.gameView.clearCanvases(),this.set({mode:null})},tryAgain:function(){var e=this.get("mode");e.init(),e.drawOnce(),this.set({state:this.states.running}),this.timer.run()},pauseGame:function(){this.state()===this.states.paused?(this.set({state:this.states.running}),this.timer.run()):this.state()===this.states.running&&(this.set({state:this.states.paused}),this.timer.clear())},makeOnBackgroundCallback:function(){t.bind(function(){this.has("mode")&&this.state()===this.states.running&&this.pauseGame()},this)},setupEvents:function(){window.onblur=this.makeOnBackgroundCallback(),window.onorientationchange=this.adjustCanvasTransformForOrientation,window.blackberry&&blackberry.app.event.onBackground(t.bind(function(){this.state()===this.states.running&&this.pauseGame()},this))},adjustCanvasTransformForOrientation:function(){var t=window.orientation;switch(t){case 0:case 180:e("canvas").css({"-webkit-transform":"translate(0px, 0px)"});break;case-90:case 90:e("canvas").css({"-webkit-transform":"translate(-80px, 80px)"})}}});return new u});