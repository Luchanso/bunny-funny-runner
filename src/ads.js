/* eslint-disable */

export const runVKAds = () => {
  setTimeout(function() {
    var adsParams = {
      ad_unit_id: 102296,
      ad_unit_hash: 'cd03259b32fb224628362b0fdabb4254'
    };
    function vkAdsInit() {
      VK.Widgets.Ads('vk_ads_102296', {}, adsParams);
      console.log('vk ads runned');
    }
    if (window.VK && VK.Widgets) {
      vkAdsInit();
    } else {
      if (!window.vkAsyncInitCallbacks) window.vkAsyncInitCallbacks = [];
      vkAsyncInitCallbacks.push(vkAdsInit);
      var protocol = location.protocol === 'https:' ? 'https:' : 'http:';
      var adsElem = document.getElementById('vk_ads_102296');
      var scriptElem = document.createElement('script');
      scriptElem.type = 'text/javascript';
      scriptElem.async = true;
      scriptElem.src = protocol + '//vk.com/js/api/openapi.js?152';
      adsElem.parentNode.insertBefore(scriptElem, adsElem.nextSibling);
    }
  }, 0);
};
