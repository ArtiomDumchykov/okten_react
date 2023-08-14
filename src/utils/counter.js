export function counter(n) { 
    const x = n

    return {
       
        get count() { return n++; },
    
        set count(m) {
            if (m >= n) n = m;
            else throw Error("зна­че­ние счет­чи­ка нель­зя умень­шить ");
        },

        reset: function () { n = x },
        show: function() {
            console.log(x, n)
        }
    };
}