angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('AccountCtrl', function($scope, $ionicModal) {
  $scope.settings = {
    enableFriends: true
  };
  $ionicModal.fromTemplateUrl('templates/newEventModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.newEventModal = modal;
  });
  $scope.openNewEventModal = function() {
    $scope.newEventModal.show();
  };
  $scope.closeNewEventModal = function() {
    $scope.newEventModal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.newEventModal.remove();
  });
  // Execute action on hide modal
  $scope.$on('newEventModal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('newEventModal.removed', function() {
    // Execute action
  });

  $ionicModal.fromTemplateUrl('templates/editEventModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.editEventModal = modal;
  });
  $scope.openEditEventModal = function() {
    $scope.editEventModal.show();
  };
  $scope.closeEditEventModal = function() {
    $scope.editEventModal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.editEventModal.remove();
  });
  // Execute action on hide modal
  $scope.$on('editEventModal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('editEventModal.removed', function() {
    // Execute action
  });
})


.controller('OMDBCtrl', ['$scope', '$http', function($scope, $http) {
 $scope.searchTerm = { q:'' };
 $scope.movies = [];
$scope.search = function() {
  console.log($scope.searchTerm)
  console.log("Search term is: ", $scope.searchTerm.q);
  var req = {
    url: "http://www.omdbapi.com",
    method: 'GET',
    params: {
      s: $scope.searchTerm.q,
    }
  }

  $http(req).then(function success(res) {
    console.log(res)
   $scope.movies = res.data.Search;
    console.log($scope.movies);
  }, function error(res) {
    //do something if the response has an error
    console.log(res);
  });
};
}])


.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
  
 $scope.currentWeather = { q:'' };
 $scope.result = [];
$scope.search = function() {
  var myEl = angular.element( document.querySelector( '#temp-fahrenheit' ) );
  myEl.text('');
  var req = {
    url: "http://api.openweathermap.org/data/2.5/weather",
    method: 'GET',
    params: {
      q: $scope.currentWeather.q,
      mode: 'json',
      units: 'imperial',
      cnt: '7',
      appid: '36caab9ef2fd3b78e6d27555e15958b0'
    }
  }

  $http(req).then(function success(res) {
   
   
    console.log(res)
   $scope.result = res.data;
    myEl.append(' °F');
    console.log($scope.result);
  }, function error(res) {
    //do something if the response has an error
    console.log(res);
  });
};
}]);


