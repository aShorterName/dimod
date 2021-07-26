function updateTempEternity() {
	if (!tmp.eter) tmp.eter = {};
	if (!tmp.eter.showTab) tmp.eter.showTab = (x)=>{
		[...document.querySelectorAll(".eterTab")].forEach((y)=>{
			new Element(y).setDisplay(false)
		})
		tmp.el[x].setDisplay(true)
	}
}