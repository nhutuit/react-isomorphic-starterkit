const del = require('del');

var folder;
//L'url du folder est relatif et est au même niveau que package.json (npm run)
if(process.argv[2])
	folder = process.argv[2];
else
	folder = 'public';

//Pour exclure un fichier spécifique:
//del([folder+'/**', '!'+folder, '!'+folder+'/index.html']).then(paths => {
del([folder + '/**']).then(paths => {
	if(paths.length > 0)
		console.log(folder + ' folder successfully cleaned (index.html remains)');
	else
		console.log('Error during cleaning folder ' + folder);
});