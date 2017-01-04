'use strict';


// Declare app level module which depends on views, and components


angular.module('myApp',
 [

  'ngRoute',

  'myApp.view1',

  'myApp.view2',

  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.version'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $locationProvider.hashPrefix('!');


  $routeProvider.otherwise({
    redirectTo: '/view1'});

}]).controller('xController', function($scope){

  $scope.stuff = Math.floor(Math.random() * 10);

  $scope.xmen = [
    {displayname: "Cyclops", name: "Cyclops", rate: 85, pic: "cyclops_gif.gif", quip: "Would be more dangerous if his blast actually did damage.", num: 0},
    {displayname: "Beast", name: "Beast", rate: 71, pic: "beast_gif.gif", quip: "Will literally read you to death.", num: 0},
    {displayname: "Wolverine", name: "Wolverine", rate: 99, pic: "Wolverine_gif.gif", quip: "Saw him in Les Miserables I think.", num: 0},
    {displayname: "Phoenix", name: "Phoenix", rate: 99, pic: "phoenix_gif.gif", quip: "She's only called 'Phoenix' three days every month.", num: 0},
    {displayname: "Gambit", name: "Gambit", rate: 72, pic: "gambit_gif.gif", quip: "Can make things explode.", num: 0},
    {displayname: "Rogue", name: "Rogue", rate: 92, pic: "rogue_gif.gif", quip: "Can fly and has super strength.", num: 0},
    {displayname: "Nightcrawler", name: "Nightcrawler", rate: 76, pic: "nightcrawler_gif.gif", quip: "Can teleport and say his prayers.", num: 0},
    {displayname: "Cable", name: "Cable", rate: 79, pic: "cable_gif.gif", quip: "Not even he knows what his powers are.", num: 0},
    {displayname: "Emma Frost", name: "Emma", rate: 89, pic: "emma_frost_gif.gif", quip: "Because it's best to fight crime in underwear.", num: 0},
    {displayname: "Storm", name: "Storm", rate: 85, pic: "storm_gif.gif", quip: "Can lightning you.", num: 0},
    {displayname: "X-23", name: "X-23", rate: 99, pic: "x_23_gif.gif", quip: "Like Wolverine, but with girl parts.", num: 0}];

  $scope.clFnct = function(xman){

    location.assign("#!/view5/:" + xman.name);
    $scope.hash = location.hash;
    $scope.xmanname = $scope.hash.substr($scope.hash.indexOf(":") + 1);
    for(var n = 0; n < $scope.xmen.length; n++){
      if($scope.xmen[n].name == $scope.xmanname){
        $scope.xman = $scope.xmen[n];
      }
    }
  };

  $scope.cart = [];
  $scope.login = "Log in";
  $scope.total = 0;
  $scope.totes = 0;

  $scope.addToCart = function(x){
    x.num += 1;
    if(x.num < 2){
      $scope.cart.push(x);
    }
    $scope.totes = 0;
    $scope.total = 0;
    for(var m = 0; m < $scope.cart.length; m++){
      $scope.total += $scope.cart[m].num * $scope.cart[m].rate;
      $scope.totes += $scope.cart[m].num;
    }
  };

  $scope.remove = function(x){
    x.num = 0;
    $scope.cart.splice($scope.cart.indexOf(x), 1);
    $scope.totes = 0;
    $scope.total = 0;
    for(var m = 0; m < $scope.cart.length; m++){
      $scope.total += $scope.cart[m].num * $scope.cart[m].rate;
      $scope.totes += $scope.cart[m].num;
    }
  };

  $scope.login = "Log in";
  $scope.password = "Password";

  $scope.loginF = function(str){
    $scope.login = str;
  };

  $scope.click = function(){
    document.getElementById('in1').value = "";
    document.getElementById('in2').value = "";
  };

  $scope.checkOut = function(){
    if($scope.login == "Log in"){
      location.assign("#!/view4");
    }
    else{
      document.getElementById('main').innerHTML += "<form ng-controller='xController'><p>Card Number:  </p><input type='text' ng-model='ccnum'><p>Expiration Date:  </p><input type='text ng-model='expdate'><p>CVC Number:  </p><input type='text' ng-model='cvcnum'><br><button type='submit' class='aForm' ng-click='payment()'>Submit Payment</button></form>";
    }
  };


  $scope.ccnum = 0;
  $scope.expdate = 0;
  $scope.cvcnum = 0;

  $scope.payment = function(){
    $scope.cart = [];
    $scope.total = 0;
    $scope.totes = 0;
    alert("You made a purchase!");
    location.assign("#!/view1");
  };

});
