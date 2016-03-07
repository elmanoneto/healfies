app.factory('CommentService', function ($http, API) {

  function getAll() {
    return $http.get(API.COMMENTS).then(function (response) {
      return response;
    })
  };

  function save (data) {
    return $http.post(API.COMMENTS, data).then(function (response) {
      return response;
    });
  }

  return {
    getAll: getAll,
    save: save
  };

})
