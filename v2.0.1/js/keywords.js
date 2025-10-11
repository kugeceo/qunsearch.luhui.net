(function() {
    clear();
    const words = [];

    function uniq(value, index, self) { 
        return self.indexOf(value) === index;
    }
   
    let selector = `#rso > div > div > div > div > div em`;       
    const found = document.querySelectorAll(selector);       
    if (found.length > 0) {
        found.forEach((f) => {
            let text = f.textContent;                                                           
            if (text) {
                words.push(text);
            }
        });
    }

    console.log("%cLOWER CASE", "font-size:14px;font-weight:bold");
    console.log(words.map(v => v.toLowerCase()).filter(uniq).join("\n"));
    console.log("%cALL", "font-size:14px;font-weight:bold;");
    console.log(words.filter(uniq).join("\n"));    
})();