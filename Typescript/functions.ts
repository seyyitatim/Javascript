function getAverage(a: number, b: number, c?: number): string {

    let total = a + b;
    let count = 2;

    if (typeof c !== "undefined") {
        total += c;
        count++;
    }

    const result = total / count;

    return "Total: " + result;
}

getAverage(10, 20, 30);
getAverage(10, 20);

function getAverage2(...a: number[]): string {

    const count = a.length;
    let total = 0;
    a.forEach((b) => {
        total += b;
    });
    const result = total / count;
    return "Total: " + result;
}

getAverage2(10, 20, 30, 40);
getAverage2(10, 20);