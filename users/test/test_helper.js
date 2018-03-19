const mongoose = require('mongoose');
//global.Promise is reference to ES6 implementation of promise.
mongoose.Promise= global.Promise;
before((done)=>{
  mongoose.connect('mongodb://localhost/users_test1');
  mongoose.connection
    .once('open',()=> {done();})
    .on ('error',(error)=> {console.warn('Warning', error);
  });
});



beforeEach((done)=>{
  mongoose.connection.collections.users.drop(()=>{
    // Ready to run the next test!
    done();
  });
});
