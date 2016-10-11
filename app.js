angular.module("vacaApp", [])
.directive("dirName", function(){
  return {
    template:"<h2> hey {{name}}</h2>" ,
    restrict: 'E',
    link: function(scope, element){
      scope.name = "Lance";
      element.on("click", function(){
        element.css("color", "red");
    })
  }
}
});


// .directive("myh1dir", function(){
//   return {
//     restrict: "AE",
//     link: function(scope, element){
//
//     }
//   }
// })
