app.factory('PostService', function ($http, API) {

  var posts;

  function getAll() {
    return $http.get(API.POSTS).then(function (response) {
      data = response.data.result;
      return response;
    })
  };

  function getByUser(id) {
    var list = [];
    console.log(posts);

    for (var i in posts) {
      if (id == posts[i].owner) {
        console.log(posts[i].owner);
        list.push(posts[i]);
      }
    }
    return list;
  };

  function save(data) {
    return $http.post(API.POSTS, data).then(function (response) {
      return response;
    })
  }

  return {
    getAll: getAll,
    getByUser: getByUser,
    save: save
  };

})
