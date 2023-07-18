function CurrencyFormatter({movie}) {

    const money = movie
    const usDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <>
            {usDollar.format(money)}
        </>
    );
}

export default CurrencyFormatter;