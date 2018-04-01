/* global VK, vkAsyncInitCallbacks */
import debug from 'debug';

const vkLog = debug('vk');

const vkAdsInit = (id, adParams) => {
  vkLog('call vkAdsInit()', id, {}, adParams);
  VK.Widgets.Ads(`vk_ads_${id}`, {}, adParams);
};

const run = id => {
  const adsParams = {
    ad_unit_id: id,
    ad_unit_hash: 'cd03259b32fb224628362b0fdabb4254'
  };

  if (window.VK && VK.Widgets) {
    vkAdsInit(id, adsParams);
  } else {
    vkLog('load vk scripts');

    if (!window.vkAsyncInitCallbacks) window.vkAsyncInitCallbacks = [];

    vkAsyncInitCallbacks.push(vkAdsInit);
    const protocol = window.location.protocol === 'https:' ? 'https:' : 'http:';
    const adsElem = document.getElementById(`vk_ads_${id}`);
    const scriptElem = document.createElement('script');
    scriptElem.type = 'text/javascript';
    scriptElem.async = true;
    scriptElem.src = `${protocol}//vk.com/js/api/openapi.js?152`;
    adsElem.parentNode.insertBefore(scriptElem, adsElem.nextSibling);
  }
};

const runVkAd = id => {
  vkLog(`run vk ad with id ${id}`);

  setTimeout(() => {
    run(id);
  }, 0);
};

export default runVkAd;
