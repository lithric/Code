function sec(x) {
    return new time(x);
}

function time(n) {
    this.per = new timing(n);
}

function timing(a) {
    this.min = function(n) {
        return 60*n/a;
    }
}

log = new ignore();

function ignore() {
    Object.prototype.log = function() {
        console.log(this);
    }
}
sec(1).per.min(1).log();
sec(1).per.log();
[2,5].log();
true.log();
null.log();

//sec(x).per.min
//sec(n).per.hour