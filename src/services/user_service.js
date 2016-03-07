app.factory('UserService', function ($http, API) {

  var users;

  function getAll() {
    return $http.get(API.PEOPLES).then(function (response) {
      users = response.data.result;
      return response;
    })
  };

  function getById(id) {
    var list = [];
    if (id.indexOf(',') > -1) {
      var ids = id.split(',');

      for (var i in ids) {
        for (var j in users) {
          if (ids[j] == users[j]['id']) {
            list.push(users[i]);
          }
        }
      }
      return list;
    } else {
      for (var i in users) {
        if (id == users[i].id) {
          return users[i];
        }
      }
    }
    return false;
  }

  return {
    getAll: getAll,
    getById: getById
  };

})
