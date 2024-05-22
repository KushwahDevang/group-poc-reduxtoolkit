"use strict";(self.webpackChunkgroup_poc_reduxtoolkit_ts=self.webpackChunkgroup_poc_reduxtoolkit_ts||[]).push([[364],{364:(e,t,n)=>{n.r(t),n.d(t,{getCLS:()=>y,getFCP:()=>g,getFID:()=>F,getLCP:()=>P,getTTFB:()=>D});var i,r,a,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},s=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},f=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},m=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},v=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},d=function(){s((function(e){var t=e.timeStamp;v=t}),!0)},l=function(){return v<0&&(v=p(),d(),f((function(){setTimeout((function(){v=p(),d()}),0)}))),{get firstHiddenTime(){return v}}},g=function(e,t){var n,i=l(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(s&&s.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),n(!0)))},o=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],s=o?null:c("paint",a);(o||s)&&(n=m(e,r,t),o&&a(o),f((function(i){r=u("FCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,n(!0)}))}))})))},h=!1,T=-1,y=function(e,t){h||(g((function(e){T=e.value})),h=!0);var n,i=function(t){T>-1&&e(t)},r=u("CLS",0),a=0,o=[],v=function(e){if(!e.hadRecentInput){var t=o[0],i=o[o.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]),a>r.value&&(r.value=a,r.entries=o,n())}},p=c("layout-shift",v);p&&(n=m(i,r,t),s((function(){p.takeRecords().map(v),n(!0)})),f((function(){a=0,T=-1,r=u("CLS",0),n=m(i,r,t)})))},E={passive:!0,capture:!0},w=new Date,L=function(e,t){i||(i=t,r=e,a=new Date,k(removeEventListener),S())},S=function(){if(r>=0&&r<a-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(t){t(e)})),o=[]}},b=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){L(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,E),removeEventListener("pointercancel",i,E)};addEventListener("pointerup",n,E),addEventListener("pointercancel",i,E)}(t,e):L(t,e)}},k=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,b,E)}))},F=function(e,t){var n,a=l(),v=u("FID"),p=function(e){e.startTime<a.firstHiddenTime&&(v.value=e.processingStart-e.startTime,v.entries.push(e),n(!0))},d=c("first-input",p);n=m(e,v,t),d&&s((function(){d.takeRecords().map(p),d.disconnect()}),!0),d&&f((function(){var a;v=u("FID"),n=m(e,v,t),o=[],r=-1,i=null,k(addEventListener),a=p,o.push(a),S()}))},C={},P=function(e,t){var n,i=l(),r=u("LCP"),a=function(e){var t=e.startTime;t<i.firstHiddenTime&&(r.value=t,r.entries.push(e),n())},o=c("largest-contentful-paint",a);if(o){n=m(e,r,t);var v=function(){C[r.id]||(o.takeRecords().map(a),o.disconnect(),C[r.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),s(v,!0),f((function(i){r=u("LCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,C[r.id]=!0,n(!0)}))}))}))}},D=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0||n.value>performance.now())return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("load",(function(){return setTimeout(t,0)}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQUM4QixNQUFLLEVBQUdkLFNBQVEsR0FBSyxJQUFHL0IsRUFBRWUsR0FBRSxHQUFJVixHQUFFLFNBQVU1QixHQUFHK0IsRUFBRTlCLEVBQUUsT0FBT0YsRUFBRStCLEVBQUVqQyxFQUFFa0MsRUFBRWpDLEdBQUcrQyx1QkFBc0IsV0FBWUEsdUJBQXNCLFdBQVlkLEVBQUU1QixNQUFNd0MsWUFBWWxDLE1BQU1ULEVBQUVrQyxVQUFVZ0MsRUFBRW5DLEVBQUV6QixLQUFJLEVBQUdQLEdBQUUsRUFBSSxHQUFHLEdBQUcsR0FBRSxDQUFDLEVBQUVzRSxFQUFFLFNBQVN4RSxHQUFHLElBQUlDLEVBQUVDLEVBQUVFLEVBQUUsUUFBUUgsRUFBRSxXQUFXLElBQUksSUFBSUEsRUFBRTZDLFlBQVkyQixpQkFBaUIsY0FBYyxJQUFJLFdBQVcsSUFBSXpFLEVBQUU4QyxZQUFZNEIsT0FBT3pFLEVBQUUsQ0FBQzZELFVBQVUsYUFBYW5CLFVBQVUsR0FBRyxJQUFJLElBQUl6QyxLQUFLRixFQUFFLG9CQUFvQkUsR0FBRyxXQUFXQSxJQUFJRCxFQUFFQyxHQUFHVyxLQUFLOEQsSUFBSTNFLEVBQUVFLEdBQUdGLEVBQUU0RSxnQkFBZ0IsSUFBSSxPQUFPM0UsQ0FBQyxDQUFqTCxHQUFxTCxHQUFHQyxFQUFFSSxNQUFNSixFQUFFSyxNQUFNTixFQUFFNEUsY0FBYzNFLEVBQUVJLE1BQU0sR0FBR0osRUFBRUksTUFBTXdDLFlBQVlsQyxNQUFNLE9BQU9WLEVBQUVNLFFBQVEsQ0FBQ1AsR0FBR0QsRUFBRUUsRUFBRSxDQUFDLE1BQU1GLEdBQUcsQ0FBQyxFQUFFLGFBQWEyQixTQUFTbUQsV0FBV3ZDLFdBQVd0QyxFQUFFLEdBQUc2QixpQkFBaUIsUUFBTyxXQUFZLE9BQU9TLFdBQVd0QyxFQUFFLEVBQUcsR0FBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JvdXAtcG9jLXJlZHV4dG9vbGtpdC10cy8uL25vZGVfbW9kdWxlcy93ZWItdml0YWxzL2Rpc3Qvd2ViLXZpdGFscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZSx0LG4saSxyPWZ1bmN0aW9uKGUsdCl7cmV0dXJue25hbWU6ZSx2YWx1ZTp2b2lkIDA9PT10Py0xOnQsZGVsdGE6MCxlbnRyaWVzOltdLGlkOlwidjItXCIuY29uY2F0KERhdGUubm93KCksXCItXCIpLmNvbmNhdChNYXRoLmZsb29yKDg5OTk5OTk5OTk5OTkqTWF0aC5yYW5kb20oKSkrMWUxMil9fSxhPWZ1bmN0aW9uKGUsdCl7dHJ5e2lmKFBlcmZvcm1hbmNlT2JzZXJ2ZXIuc3VwcG9ydGVkRW50cnlUeXBlcy5pbmNsdWRlcyhlKSl7aWYoXCJmaXJzdC1pbnB1dFwiPT09ZSYmIShcIlBlcmZvcm1hbmNlRXZlbnRUaW1pbmdcImluIHNlbGYpKXJldHVybjt2YXIgbj1uZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0RW50cmllcygpLm1hcCh0KX0pKTtyZXR1cm4gbi5vYnNlcnZlKHt0eXBlOmUsYnVmZmVyZWQ6ITB9KSxufX1jYXRjaChlKXt9fSxvPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24gbihpKXtcInBhZ2VoaWRlXCIhPT1pLnR5cGUmJlwiaGlkZGVuXCIhPT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGV8fChlKGkpLHQmJihyZW1vdmVFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLG4sITApLHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLG4sITApKSl9O2FkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsbiwhMCksYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsbiwhMCl9LHU9ZnVuY3Rpb24oZSl7YWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsKGZ1bmN0aW9uKHQpe3QucGVyc2lzdGVkJiZlKHQpfSksITApfSxjPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaTtyZXR1cm4gZnVuY3Rpb24ocil7dC52YWx1ZT49MCYmKHJ8fG4pJiYodC5kZWx0YT10LnZhbHVlLShpfHwwKSwodC5kZWx0YXx8dm9pZCAwPT09aSkmJihpPXQudmFsdWUsZSh0KSkpfX0sZj0tMSxzPWZ1bmN0aW9uKCl7cmV0dXJuXCJoaWRkZW5cIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZT8wOjEvMH0sbT1mdW5jdGlvbigpe28oKGZ1bmN0aW9uKGUpe3ZhciB0PWUudGltZVN0YW1wO2Y9dH0pLCEwKX0sdj1mdW5jdGlvbigpe3JldHVybiBmPDAmJihmPXMoKSxtKCksdSgoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe2Y9cygpLG0oKX0pLDApfSkpKSx7Z2V0IGZpcnN0SGlkZGVuVGltZSgpe3JldHVybiBmfX19LGQ9ZnVuY3Rpb24oZSx0KXt2YXIgbixpPXYoKSxvPXIoXCJGQ1BcIiksZj1mdW5jdGlvbihlKXtcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIj09PWUubmFtZSYmKG0mJm0uZGlzY29ubmVjdCgpLGUuc3RhcnRUaW1lPGkuZmlyc3RIaWRkZW5UaW1lJiYoby52YWx1ZT1lLnN0YXJ0VGltZSxvLmVudHJpZXMucHVzaChlKSxuKCEwKSkpfSxzPXdpbmRvdy5wZXJmb3JtYW5jZSYmcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZSYmcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZShcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIilbMF0sbT1zP251bGw6YShcInBhaW50XCIsZik7KHN8fG0pJiYobj1jKGUsbyx0KSxzJiZmKHMpLHUoKGZ1bmN0aW9uKGkpe289cihcIkZDUFwiKSxuPWMoZSxvLHQpLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7by52YWx1ZT1wZXJmb3JtYW5jZS5ub3coKS1pLnRpbWVTdGFtcCxuKCEwKX0pKX0pKX0pKSl9LHA9ITEsbD0tMSxoPWZ1bmN0aW9uKGUsdCl7cHx8KGQoKGZ1bmN0aW9uKGUpe2w9ZS52YWx1ZX0pKSxwPSEwKTt2YXIgbixpPWZ1bmN0aW9uKHQpe2w+LTEmJmUodCl9LGY9cihcIkNMU1wiLDApLHM9MCxtPVtdLHY9ZnVuY3Rpb24oZSl7aWYoIWUuaGFkUmVjZW50SW5wdXQpe3ZhciB0PW1bMF0saT1tW20ubGVuZ3RoLTFdO3MmJmUuc3RhcnRUaW1lLWkuc3RhcnRUaW1lPDFlMyYmZS5zdGFydFRpbWUtdC5zdGFydFRpbWU8NWUzPyhzKz1lLnZhbHVlLG0ucHVzaChlKSk6KHM9ZS52YWx1ZSxtPVtlXSkscz5mLnZhbHVlJiYoZi52YWx1ZT1zLGYuZW50cmllcz1tLG4oKSl9fSxoPWEoXCJsYXlvdXQtc2hpZnRcIix2KTtoJiYobj1jKGksZix0KSxvKChmdW5jdGlvbigpe2gudGFrZVJlY29yZHMoKS5tYXAodiksbighMCl9KSksdSgoZnVuY3Rpb24oKXtzPTAsbD0tMSxmPXIoXCJDTFNcIiwwKSxuPWMoaSxmLHQpfSkpKX0sVD17cGFzc2l2ZTohMCxjYXB0dXJlOiEwfSx5PW5ldyBEYXRlLGc9ZnVuY3Rpb24oaSxyKXtlfHwoZT1yLHQ9aSxuPW5ldyBEYXRlLHcocmVtb3ZlRXZlbnRMaXN0ZW5lciksRSgpKX0sRT1mdW5jdGlvbigpe2lmKHQ+PTAmJnQ8bi15KXt2YXIgcj17ZW50cnlUeXBlOlwiZmlyc3QtaW5wdXRcIixuYW1lOmUudHlwZSx0YXJnZXQ6ZS50YXJnZXQsY2FuY2VsYWJsZTplLmNhbmNlbGFibGUsc3RhcnRUaW1lOmUudGltZVN0YW1wLHByb2Nlc3NpbmdTdGFydDplLnRpbWVTdGFtcCt0fTtpLmZvckVhY2goKGZ1bmN0aW9uKGUpe2Uocil9KSksaT1bXX19LFM9ZnVuY3Rpb24oZSl7aWYoZS5jYW5jZWxhYmxlKXt2YXIgdD0oZS50aW1lU3RhbXA+MWUxMj9uZXcgRGF0ZTpwZXJmb3JtYW5jZS5ub3coKSktZS50aW1lU3RhbXA7XCJwb2ludGVyZG93blwiPT1lLnR5cGU/ZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbigpe2coZSx0KSxyKCl9LGk9ZnVuY3Rpb24oKXtyKCl9LHI9ZnVuY3Rpb24oKXtyZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsbixUKSxyZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLGksVCl9O2FkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIixuLFQpLGFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsaSxUKX0odCxlKTpnKHQsZSl9fSx3PWZ1bmN0aW9uKGUpe1tcIm1vdXNlZG93blwiLFwia2V5ZG93blwiLFwidG91Y2hzdGFydFwiLFwicG9pbnRlcmRvd25cIl0uZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIGUodCxTLFQpfSkpfSxMPWZ1bmN0aW9uKG4sZil7dmFyIHMsbT12KCksZD1yKFwiRklEXCIpLHA9ZnVuY3Rpb24oZSl7ZS5zdGFydFRpbWU8bS5maXJzdEhpZGRlblRpbWUmJihkLnZhbHVlPWUucHJvY2Vzc2luZ1N0YXJ0LWUuc3RhcnRUaW1lLGQuZW50cmllcy5wdXNoKGUpLHMoITApKX0sbD1hKFwiZmlyc3QtaW5wdXRcIixwKTtzPWMobixkLGYpLGwmJm8oKGZ1bmN0aW9uKCl7bC50YWtlUmVjb3JkcygpLm1hcChwKSxsLmRpc2Nvbm5lY3QoKX0pLCEwKSxsJiZ1KChmdW5jdGlvbigpe3ZhciBhO2Q9cihcIkZJRFwiKSxzPWMobixkLGYpLGk9W10sdD0tMSxlPW51bGwsdyhhZGRFdmVudExpc3RlbmVyKSxhPXAsaS5wdXNoKGEpLEUoKX0pKX0sYj17fSxGPWZ1bmN0aW9uKGUsdCl7dmFyIG4saT12KCksZj1yKFwiTENQXCIpLHM9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdGFydFRpbWU7dDxpLmZpcnN0SGlkZGVuVGltZSYmKGYudmFsdWU9dCxmLmVudHJpZXMucHVzaChlKSxuKCkpfSxtPWEoXCJsYXJnZXN0LWNvbnRlbnRmdWwtcGFpbnRcIixzKTtpZihtKXtuPWMoZSxmLHQpO3ZhciBkPWZ1bmN0aW9uKCl7YltmLmlkXXx8KG0udGFrZVJlY29yZHMoKS5tYXAocyksbS5kaXNjb25uZWN0KCksYltmLmlkXT0hMCxuKCEwKSl9O1tcImtleWRvd25cIixcImNsaWNrXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe2FkZEV2ZW50TGlzdGVuZXIoZSxkLHtvbmNlOiEwLGNhcHR1cmU6ITB9KX0pKSxvKGQsITApLHUoKGZ1bmN0aW9uKGkpe2Y9cihcIkxDUFwiKSxuPWMoZSxmLHQpLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7Zi52YWx1ZT1wZXJmb3JtYW5jZS5ub3coKS1pLnRpbWVTdGFtcCxiW2YuaWRdPSEwLG4oITApfSkpfSkpfSkpfX0sUD1mdW5jdGlvbihlKXt2YXIgdCxuPXIoXCJUVEZCXCIpO3Q9ZnVuY3Rpb24oKXt0cnl7dmFyIHQ9cGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm5hdmlnYXRpb25cIilbMF18fGZ1bmN0aW9uKCl7dmFyIGU9cGVyZm9ybWFuY2UudGltaW5nLHQ9e2VudHJ5VHlwZTpcIm5hdmlnYXRpb25cIixzdGFydFRpbWU6MH07Zm9yKHZhciBuIGluIGUpXCJuYXZpZ2F0aW9uU3RhcnRcIiE9PW4mJlwidG9KU09OXCIhPT1uJiYodFtuXT1NYXRoLm1heChlW25dLWUubmF2aWdhdGlvblN0YXJ0LDApKTtyZXR1cm4gdH0oKTtpZihuLnZhbHVlPW4uZGVsdGE9dC5yZXNwb25zZVN0YXJ0LG4udmFsdWU8MHx8bi52YWx1ZT5wZXJmb3JtYW5jZS5ub3coKSlyZXR1cm47bi5lbnRyaWVzPVt0XSxlKG4pfWNhdGNoKGUpe319LFwiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGU/c2V0VGltZW91dCh0LDApOmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHNldFRpbWVvdXQodCwwKX0pKX07ZXhwb3J0e2ggYXMgZ2V0Q0xTLGQgYXMgZ2V0RkNQLEwgYXMgZ2V0RklELEYgYXMgZ2V0TENQLFAgYXMgZ2V0VFRGQn07XG4iXSwibmFtZXMiOlsiZSIsInQiLCJuIiwiaSIsInIiLCJuYW1lIiwidmFsdWUiLCJkZWx0YSIsImVudHJpZXMiLCJpZCIsImNvbmNhdCIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhIiwiUGVyZm9ybWFuY2VPYnNlcnZlciIsInN1cHBvcnRlZEVudHJ5VHlwZXMiLCJpbmNsdWRlcyIsInNlbGYiLCJnZXRFbnRyaWVzIiwibWFwIiwib2JzZXJ2ZSIsInR5cGUiLCJidWZmZXJlZCIsIm8iLCJkb2N1bWVudCIsInZpc2liaWxpdHlTdGF0ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidSIsInBlcnNpc3RlZCIsImMiLCJmIiwicyIsIm0iLCJ0aW1lU3RhbXAiLCJ2Iiwic2V0VGltZW91dCIsImZpcnN0SGlkZGVuVGltZSIsImQiLCJkaXNjb25uZWN0Iiwic3RhcnRUaW1lIiwicHVzaCIsIndpbmRvdyIsInBlcmZvcm1hbmNlIiwiZ2V0RW50cmllc0J5TmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJsIiwiaCIsImhhZFJlY2VudElucHV0IiwibGVuZ3RoIiwidGFrZVJlY29yZHMiLCJUIiwicGFzc2l2ZSIsImNhcHR1cmUiLCJ5IiwiZyIsInciLCJFIiwiZW50cnlUeXBlIiwidGFyZ2V0IiwiY2FuY2VsYWJsZSIsInByb2Nlc3NpbmdTdGFydCIsImZvckVhY2giLCJTIiwiTCIsImIiLCJGIiwib25jZSIsIlAiLCJnZXRFbnRyaWVzQnlUeXBlIiwidGltaW5nIiwibWF4IiwibmF2aWdhdGlvblN0YXJ0IiwicmVzcG9uc2VTdGFydCIsInJlYWR5U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9