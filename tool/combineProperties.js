function combineProperties(properties){
	var property = {};
	properties.forEach(p=>{
		return property[p.propKey] = p.value;
	})
	return property;
}

module.exports = combineProperties;