displayValue = (elementText) => {
    let element = document.createElement('div');
    let text = document.createTextNode(elementText);
    element.appendChild(text);
    document.getElementById("main-content").appendChild(element);
}

timer = (data, callback) => {
    callback(undefined, data);
}

timer(10, (err, data) => {
    displayValue(data);
    timer(9, (err,data) => {
        displayValue(data);
        timer(8, (err,data) => {
            displayValue(data);
            timer(7, (err,data) => {
                displayValue(data);
                timer(6, (err,data) => {
                    displayValue(data);
                    timer(5, (err,data) => {
                        displayValue(data);
                        timer(4, (err,data) => {
                            displayValue(data);
                            timer(3, (err,data) => {
                                displayValue(data);
                                timer(2, (err,data) => {
                                    displayValue(data);
                                    timer(1, (err,data) => {
                                        displayValue(data);
                                        timer('Happy Independence Day!!!', (err,data) => {
                                            displayValue(data);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
