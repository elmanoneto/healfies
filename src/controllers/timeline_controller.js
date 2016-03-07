app.controller('TimelineController', function ($scope, UserService, PostService, CommentService) {

  // $scope.user;
  // $scope.post;
  $scope.newcomment = {};

  var posts;

  UserService.getAll().then(function (response) {
    $scope.user = response.data.result[0];
  });

  PostService.getAll().then(function (response) {
    console.log(response.data.result);
    posts = response.data.result;
  }).then(function () {
    if($scope.user) {
      filter();
    } else {
      setTimeout(function () {
        filter();
      }, 2000);
    }
  })

  CommentService.getAll().then(function (response) {
    $scope.comments = response.data.result;
  });

  $scope.getUsername = function (id) {
    var user = UserService.getById(id);
    return user.name;
  }

  $scope.getPhoto = function (id) {
    var user = UserService.getById(id);
    return user.photo;
  }

  $scope.addPost = function (newpost, tags) {
    var data = {
      content: newpost,
      // owner: $scope.user.id,
      post_time: new Date(),
      files: 'https://cdn.healfies.com/temp_jedi/odonto.png, https://cdn.healfies.com/temp_jedi/odonto1.jpg, https://cdn.healfies.com/temp_jedi/odonto2.jpg, https://cdn.healfies.com/temp_jedi/odonto3.jpg',
      shares: '2, 3'
    };

    if (tags.length > 1) {
      for (var i in tags) {
        if(tags.length-1 == i) {
          data.folders += tags[i].text;
        } else {
          data.folders += tags[i].text+', ';
        }
      }
    } else {
      data.folders = tags[0].text;
    }

    PostService.save(data).then(function () {
      $scope.posts.push(new Object(data));
    })
  }

  $scope.addComment = function (id, index) {
    var data = {
      content: $scope.newcomment[index],
      created_at: new Date(),
      created_by: $scope.user.id,
      post: id
    }

    CommentService.save(data).then(function (response) {
      $scope.comments.push(new Object(data));
    });

  }

  function filter() {
    var list = [];
    for (var i in posts) {
      if ($scope.user.id == posts[i].owner) {
        list.push(posts[i]);
      }
    }

    $scope.posts = list;
  }

});
