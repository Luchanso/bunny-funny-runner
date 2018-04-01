/* eslint-disable */

import debug from 'debug';

const vkLog = debug('vk');

const runVkAd = id => {
  vkLog(`run vk ad with id ${id}`);
  setTimeout(function() {
    var adsParams = {
      ad_unit_id: id,
      ad_unit_hash: 'cd03259b32fb224628362b0fdabb4254'
    };
    function vkAdsInit() {
      vkLog('call vkAdsInit()', id, {}, adsParams);
      VK.Widgets.Ads(`vk_ads_${id}`, {}, adsParams);
    }
    if (window.VK && VK.Widgets) {
      vkAdsInit();
    } else {
      vkLog('load vk scripts');
      if (!window.vkAsyncInitCallbacks) window.vkAsyncInitCallbacks = [];
      vkAsyncInitCallbacks.push(vkAdsInit);
      var protocol = location.protocol === 'https:' ? 'https:' : 'http:';
      var adsElem = document.getElementById(`vk_ads_${id}`);
      var scriptElem = document.createElement('script');
      scriptElem.type = 'text/javascript';
      scriptElem.async = true;
      scriptElem.src = protocol + '//vk.com/js/api/openapi.js?152';
      adsElem.parentNode.insertBefore(scriptElem, adsElem.nextSibling);
    }
  }, 0);
};

export default runVkAd;
