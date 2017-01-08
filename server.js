var combineProperties = require('./tool/combineProperties');
var bodyParser 				= require('body-parser');
var template   				= require('gulp-template');
var vfs        				= require('vinyl-fs');
var webpack  					= require('webpack');
var publishConfig 		= require('./build/webpack.publish.config');
var express    				= require('express'),
	path = require('path'),
	app = express(),
	port = 9123;

app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(path.join(__dirname, 'dist/')));

app.post('/create', function (req, res) {
	var pageInfo = req.body;
	var tranId = req.body.tranId;

	var info = generateModules(pageInfo.components);

	
	vfs.src('server/template/**.*')
		.pipe(template({
      ImportModules: info.ImportModules,
			Title: pageInfo.title,
      Modules: info.Modules
    }))
		.pipe(vfs.dest('dist/temp/'+tranId+'/'))
		.on('end', () => {
			var config = publishConfig(tranId);
			webpack(config, (err, stats) => {
				if(err)  {
					console.error('error',err);
				}

				console.log('end');

				res.end();
			});
		})
		.on('error',(e)=>{
			console.log(e);
			res.end();
		})
});

app.get('/api', function (req, res) {
	console.log('api.req.params', req.params)
	res.end();
});

function generateModules(components) {
	if (!components || components.length === 0) {
		return {}
	}

	var needImport = [];
	var modules = components.map(function (component) {
		if (needImport.indexOf(component.componentName) == -1) {
			needImport.push(component.componentName);
		}
		var property = combineProperties(component.properties);
		return `<${component.componentName}  id={'${component.id}'} property={${JSON.stringify(property)}} />
		`
	})

	var importModules = needImport.map(function (name) {
		return `import ${name} from '../../../client/component/modules/${name}/source'`;
	})
	return {
		ImportModules: importModules.join(';'),
		Modules: modules.join(' ')
	}
}


app.listen(port);
console.log('Server is Up and Running at Port : ' + port);