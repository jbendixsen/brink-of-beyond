var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    username: "brinkofbeyond@westcoastcode.com",
    password: "1980Jeep", // optional, prompted if none given
    passive: true, 
    host: "ftp.westcoastcode.com",
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: "./~dev",
    include: ['.js', 'assets/*s'],
    exclude: ['.git', '.idea', 'tmp/*', 'build/*']
}
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});