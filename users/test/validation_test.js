const assert = require('assert');
const User =require('../src/user');

describe('Validating Records',()=>{
  it('requires a username',()=>{
    const user = new User({name: undefined});
    const validationResult= user.validateSync();
    const {message}= validationResult.errors.name;
    assert(message==='Name is required.');
  });

  it('requires a username longer than 2 characaters',()=>{
    const user = new User({name: 'AL'});
    const validationResult = user.validateSync();
    const {message}= validationResult.errors.name;
    assert(message==='Name must be longer than 2 characters');

  });

  it ('Disallows invalid records from being saved',(done)=>{
    const user= new User({name: 'Al'});
    user.save()
      .catch((validationResult)=>{
        const {message}= validationResult.errors.name;
        assert(message==='Name must be longer than 2 characters');
        done();
      });
  });
});
