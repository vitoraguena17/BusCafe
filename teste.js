const URL = 'http://168.75.77.79:5000/Product'

async function CallApi() {
    const resp = await fetch(URL);
    if (resp.status === 200) {
        const obj = await resp.json();
        console.log(obj);
    }

}

CallApi();