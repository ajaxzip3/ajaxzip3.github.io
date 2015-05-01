'use strict';

self.addEventListener('push', function(event) {
  console.log('Received a push message', event);

  fetch("/newmessage.json", {
      "method": "GET"
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.icon,
        tag: data.tag
      })
    );
  }).catch(function(err) {
    console.log(err);
  })

});

self.addEventListener('notificationclick', function(event){
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/event/')
  );
});
