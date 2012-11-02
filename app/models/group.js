var Group = function () {

  this.defineProperties({
    name: {type: 'string', required: true},
    convictions: {type: 'array'},
    members: {type: 'array'},
    public: {type: 'boolean'},
    administrators: {type: 'array'},
    description: {type: 'string'},
    created: {type: 'datetime'},
    location: {type: 'object'},
    radius: {type: 'number'},
    officialsite: {type: 'string'},
  });

  this.autoIncrementId = true;

  /*
  this.property('login', 'string', {required: true});
  this.property('password', 'string', {required: true});
  this.property('lastName', 'string');
  this.property('firstName', 'string');

  this.validatesPresent('login');
  this.validatesFormat('login', /[a-z]+/, {message: 'Subdivisions!'});
  this.validatesLength('login', {min: 3});
  // Use with the name of the other parameter to compare with
  this.validatesConfirmed('password', 'confirmPassword');
  // Use with any function that returns a Boolean
  this.validatesWithFunction('password', function (s) {
      return s.length > 0;
  });

  // Can define methods for instances like this
  this.someMethod = function () {
    // Do some stuff
  };
  */

};

/*
// Can also define them on the prototype
Group.prototype.someOtherMethod = function () {
  // Do some other stuff
};
// Can also define static methods and properties
Group.someStaticMethod = function () {
  // Do some other stuff
};
Group.someStaticProperty = 'YYZ';
*/

Group = geddy.model.register('Group', Group);

