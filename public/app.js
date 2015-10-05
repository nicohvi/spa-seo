var homeButton  = document.getElementById('home'),
    faqButton   = document.getElementById('faq'),
    aboutButton = document.getElementById('about'),
    content     = document.getElementById('content');

homeButton.addEventListener('click', getJSON.bind(this, '/main'), false);
faqButton.addEventListener('click', getJSON.bind(this, '/faq'), false);
aboutButton.addEventListener('click', getJSON.bind(this, '/about'), false);

function render (json) {
  var image = json.image ? '<img src='+json.image+'/>' : '';
  return '<h3>'+json.title+'</h3><p>'+json.body+'</p>'+image;
};

function getJSON (url, e) {
  if(e) e.preventDefault();

  superagent
  .get(url)
  .set('X-Requested-With', 'XMLHttpRequest')
  .end(function(err, res) {
    content.innerHTML = render(JSON.parse(res.text)); 
    updateAddressBar(url);
  });
}

function updateAddressBar (url) {
  history.pushState(null, null, url);
};

if(init) {
  getJSON('/'+init);
} else {
  getJSON('/main');
}

