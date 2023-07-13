function counter(n) { 
    const x = n; // Ар­гу­мент n функ­ции - скры­тая пе­ре­мен­ная

    return {
        // Ме­тод чте­ния свой­ст­ва воз­вра­ща­ет и уве­ли­чи­ва­ет пе­ре­мен­ную счет­чи­ка.
        get count() { return n++; },
        // Ме­тод за­пи­си в свой­ст­во не по­зво­ля­ет умень­шать зна­че­ние n
        set count(m) {
            if (m >= n) n = m;
            else throw Error("зна­че­ние счет­чи­ка нель­зя умень­шить ");
        },

        reset: function () { n = x },
        show: function() { console.log(x, n) }
    };
}

export {counter}