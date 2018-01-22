var app= angular.module('myApp',['ngStorage']);

app.controller('myCtrl',function($scope,$http,$localStorage,$filter){
    $scope.member='pratyush'
    $scope.friends=[
        {
            "id":  "12",
            "user": "Ryan Smith",
            "img": "https://randomuser.me/api/portraits/women/16.jpg",
            "messages": [
                {
                    "id": 0,
                    "text": "Hi, Mamatha. How are you?",
                    "created": "Fri, 14 Jul 2017 09:56:37 GMT",
                    "createdBy": 0,
                    "img": "https://randomuser.me/api/portraits/women/16.jpg",
                    "user":"Ryan Smith"
                },
                {
                    "id": 0,
                    "text": "Hello, Ryan Smith. I'm Fine",
                    "created": "Fri, 15 Jul 2017 09:56:37 GMT",
                    "createdBy": 12,
                    "img": "https://randomuser.me/api/portraits/women/16.jpg",
                    "user":"Ryan Smith"
                }
            ]
        },
        {
            "id":  "2",
            "user": "Bertha	Keller",
            "img": "https://randomuser.me/api/portraits/women/73.jpg",
            "messages": [

            ]
        },
        {
            "id":  "3",
            "user": "Marian	Harris",
            "img": "https://randomuser.me/api/portraits/women/12.jpg",
            "messages": [
            ]
        },
        {
            "id":  "4",
            "user": "Chester Dixon",
            "img": "https://randomuser.me/api/portraits/women/66.jpg",
            "messages": [

            ]
        }
    ]
    $localStorage.Friends= $scope.friends;
    $scope.selectedFriend=function(a){
        console.log(a);
        $scope.friendName=a;
        var filter= $filter('filter')($scope.friends, {user:a})[0].messages;
        $scope.messages=filter;
        var position=filter.length;
    }    

    $scope.sendMessage=function(response){
        var data=$scope.messages;
        var position=data.length;
        $sendingResponse=response;
        $scope.messageTime = new Date();
        $scope.reply={"text":$sendingResponse,"user":"user","created": $scope.messageTime};
        data.splice(position,0,$scope.reply);
        $scope.messages=data;
        $localStorage.Friends=$scope.friends;
        $scope.response='';
    }

})