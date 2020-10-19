export default class FetchData {
    getResource = async url => {
        const res = await fetch(url);

        return await res.json();
    }
}