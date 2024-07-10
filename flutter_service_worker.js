'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f40fc99ed7315e7e56f32e28a0b25a12",
"version.json": "c733b283588438a2cc78dab159fb49a2",
"index.html": "83fc52d865706bdb7a4d2c88ba0f72fb",
"/": "83fc52d865706bdb7a4d2c88ba0f72fb",
"main.dart.js": "a371c6414c3ce147d37f30395ce1819a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1d1959967dab556873bb9760daf72e9d",
".git/ORIG_HEAD": "f93eed7100ba5206ecdc53c183011928",
".git/config": "8b5a0c1603e2e700822ffa8d0c14ba00",
".git/objects/66/6ff6b83cf3b51e73bfbf496afe39a3c3b3b28a": "58482343b41314a5c576148308f722ac",
".git/objects/57/5be69caffca3b9f258b7bc883d45876e9c533b": "78def7ac5d0c59ffd8f18a1a8a8d122b",
".git/objects/9b/d6073ee745128b93a0879a2e10aa6dfe49ff9d": "b7cf9f4ec29935e5d024d34079c0b0ab",
".git/objects/6a/1d1fa5c2ba48318bfdde0ef56a8d44a0f85398": "ca69957b3667aa2c4d8a8c87c23c10f3",
".git/objects/3d/4a06acc4d090af03569dc140dbb7f5ff3735b9": "4ba11ae2a61305df4781bd38a42fb964",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/34/8ecb101d6375fdf6ead66d7f7dad1076a951c4": "a1b03fa3417cf402ea53c2f2e4c3f919",
".git/objects/be/4926f0f8b16d6cf0e597cff2ca1850b994536c": "bf20d509790308610402e5fa04ddb8ec",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/ded4ada472fb9b17129ceb5387e1f18de65133": "518b0b8750fe4a03e446ae2365da794f",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/0d572300a500371bc4a6bf74e44ffc6c59ce6e": "ea6d564ccc2be682770a7fedbfa15f4f",
".git/objects/fc/ef5ac75f8ab406051e147e1c2feea68dc94efb": "d0ac980131255a278cf070136ae06dd0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/c7e2baa5dbc9c78f600e8fff8bc85e89afd39d": "475387042fa2b2200081e4284ce80c58",
".git/objects/ca/e148495baf8e9fb7a4bc9fa434e58a00a3999f": "17c8f51e5d019ce5723a44d994b65775",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/fb/82ab2ba4aacda93fbe267ec514f67bd403766d": "701c4b7e1fddd3e1c2aed9d5dc11cc64",
".git/objects/fb/d7fc28e7e75f84b8546b9a12979a4ed3a5f0f8": "562a7bca62d0b3024d18955e790bb156",
".git/objects/c1/97289bad9fcb3dfc20b7ec089073037403b5c8": "f00b59cddd26ef9755316979a65efd76",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/16/570914d4eb2a05b85dcb5c4f508b3512dc1657": "9e6368e03b2a51b14cb0f6ea4c2d0dcd",
".git/objects/87/b059eecb19caba38bfb1736eee6da28f818543": "0daf80466de5ac5989b2ae0285646cad",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/e79022ffa740e0c14ce04845af78e592ff7d87": "0417e52ae6912860b05c7189c8999370",
".git/objects/4d/3ab57859e98732363ddc75252d55302018beb0": "8ab4c26753ae5391d9201ca69080977f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/cf099c1b8baebee937ebe7ae0707abc75b4510": "33dec2430e3c2e0e659b692bc923f236",
".git/objects/6e/ba6309df5e1cc1978cdc8f4a00dd11e4ae9517": "07b620207e0d1fea8c677d47bfc777a0",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/31/5cc7fb77a50cda0a8acd59077908b0e5948fec": "933745f7f56325352707cd7e74e60b7f",
".git/objects/3a/e4c4f2d129f384d82abf6a61beea623abbfb92": "e8dcd77fc893ca77244eb3d071d2a2bb",
".git/objects/6d/5d65c5c8ff7b5b1f8e18d6cd1ab8be48453aaa": "8bc3d009feeea4acf78879b71abf26fa",
".git/objects/06/f12a179e99884e607a78b353ec012baa8eeb37": "5ecaa9c1e073a9b42038a6c40c1ed266",
".git/objects/99/9f97acd8a1d9676b9cf394921157c43d1259bb": "f24682810251f65f322e7f1e1e5cb1b6",
".git/objects/52/c24993f0f5722c200715ddeef258b14ecc079b": "568d55fc1fe8c7b0f50f23b08cf0ff90",
".git/objects/0f/9110c201b1cb58037dc83b679895827df27949": "d9bb96b3cd107d7e7ef39b11dd4f2144",
".git/objects/bf/b11c48e7f80c8a403fe098278e8feee1d62e05": "7fe32860b52bfc3cce2cc44f0de41632",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/c391e9f22773dbf284055d90fd34332056df28": "5bd65ebe8d402263fe9d1a1043ef69f2",
".git/objects/b1/10e78972733f8deecf22273d4d19eb65344a42": "1072a070318662cdfc58ed700dc1ef8c",
".git/objects/b1/3c7cca98e43aa5ccf0a0356b2c952dcfa4c2c9": "a79001df19790d552659619f09adce91",
".git/objects/a9/f7b1df02b3564fb7996ee3d59039e8bf2a14ae": "9a99f996d95257d1f888c1473b2e3f1e",
".git/objects/af/7174c6579b3a9d8a64b20bc62e511b7407988a": "5b037016b708bc8a07981fcb7b5816c1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/8c7e663d7e58d111a712037624650cffaaf0cb": "9581c5150e6916e0dfa4c599dd727aeb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/191f3ef4fb3c63ce1fc86a5c8efaafb6fb9a95": "d92fc829c262fccd44a2ef6ed37e7569",
".git/objects/cc/f8b7286233287b207366d0a8cb9f2f90d1194f": "99dd7887a3556bf6054595aa18859a1d",
".git/objects/f7/145b60661c7908f913cfe840f7dd13cc18ba65": "472351afc5183f7eba5a33aa63f5eb47",
".git/objects/c2/c055d4cfd6d751380cead750c19d3642887a88": "f5666443e87ce4feb3a952e8d4826ec2",
".git/objects/79/5f9e0eefac5285f3f150834692ed76ad586dc2": "4ed2cf286067a7eaedc55c7ebdf032fb",
".git/objects/79/27de00a310cae7187ddfd217c8e0a3762917ac": "fe859925684c0a8462b3ce3610776c14",
".git/objects/41/f6fe7eb9e7e22e9d5c3dfd8093e3bbbff65cb9": "80a982a8f358d72cf949b024688c9cdf",
".git/objects/77/a0e22e3360dbbf7fb26410f7039296babc9f61": "88bf3ff855f2fc6a4845f4e9e4d0417a",
".git/objects/77/20a94f67834fc7a158c1b2b4b5cbefacb08bcf": "7a81493b4a45df79e8a5de0b52eba1b7",
".git/objects/84/95579465a68d1762d53c8c885260a3fd695677": "65986c623443652dcca236ccbe2ef912",
".git/objects/1d/5e5f94bdaca6dcaebd1775c7b201841d98c725": "3e5f507ef59c88cf47276981dbb33ba8",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2b/1a5e4eb452cb332d80d7d8ffe46ee6dcee95a3": "4154ac2286863a6f0bf762c0f94b0e1b",
".git/objects/8b/49b3d95ea39f4bd0e60558a8998636e196205d": "87bdfe6ff7618b9cd760f4963e41e454",
".git/objects/7f/9cdb281d4e8732dd5c06ecfd24cfd47ee8169d": "f529cac8eb2cd46c387bc61a42dca1d8",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e74b097e663eeaa061699ca5f500bfe6",
".git/logs/refs/heads/main": "e74b097e663eeaa061699ca5f500bfe6",
".git/logs/refs/remotes/origin/main": "13a5bee7f2d5244f79f2467acb6412c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f93eed7100ba5206ecdc53c183011928",
".git/refs/remotes/origin/main": "f93eed7100ba5206ecdc53c183011928",
".git/index": "43e0ac38a7f23a046cff0510581f7441",
".git/COMMIT_EDITMSG": "685de8990d6c542820801256a22d7c96",
".git/FETCH_HEAD": "8cf3a1c60d3c1bb1862489a1ea0f71d7",
"assets/AssetManifest.json": "715ab7108b4d20380f5a2597d8fb10cb",
"assets/NOTICES": "02dfcd77559716e693f350f510b1d3dd",
"assets/FontManifest.json": "3be8ba3ac6cb2670d2dbc1a5dfee2fa2",
"assets/AssetManifest.bin.json": "b49123c670dca58c8414c61656b5270b",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/packages/fast_image_resizer/assets/lena.png": "af16d124a7d709df7d8e1cdda7ac6e5a",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/pro_image_editor/lib/fonts/ProImageEditorIcons.ttf": "f67c336e8b9a0fcd002e5485e4b9c808",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "924626a5f7a398c33e92734d5ff55bdb",
"assets/fonts/MaterialIcons-Regular.otf": "2f3a873a5c01b28c74883215ed79fcf4",
"assets/assets/blida.jpeg": "d1ec0b6d71ed621059fc08ef32f42d2e",
"assets/assets/usdb.png": "16e18ccc241a7c79f48d663c701f4638",
"assets/assets/congratulations.jpg": "b055cd53804748efb844a8bcf754fdea",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
