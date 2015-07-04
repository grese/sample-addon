module.exports = {
  description: 'A sample addon',
  locals: function(options){
    console.log('locals(OPTIONS): ', options);
    return {
      foo: 'BAR'
    };
  },
  afterInstall: function(options){
    console.log('afterInstall(OPTIONS): ', options);
  }
};
