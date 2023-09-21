function Element(sym, fullName, molMass){
    this.symbol = sym;
    this.name = fullName;
    this.molarMass = molMass;
};

Element.prototype.getSymbol = function(){
    return this.symbol;
}

Element.prototype.getName = function(){
    return this.name;
}
Element.prototype.getMolMass = function(){
    return this.molarMass;
}

const Hydrogen = new Element("H", "Hydrogen", 1.008);

document.getElementById("H").innerHTML = Hydrogen.molarMass;