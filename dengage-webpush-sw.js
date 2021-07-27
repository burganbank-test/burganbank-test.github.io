var swUrl = new URL(location);
var accountId = swUrl.searchParams.get('account_id') || '';
var appGuid = swUrl.searchParams.get('app_guid') || '';
if (accountId && appGuid) {
    importScripts("https://dengage-public-data-collector-proxy.burgan.com.tr/p/push/" + accountId + "/" + appGuid + "/dengage_sw.js");
}