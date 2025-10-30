async function fetchData() {
    const res=await fetch ("https://www.wikipedia.org/");
    const record=await res.json();
    document.getElementById("Tests1").innerHTML=record.data[0].Test;
    document.getElementById("Tests3").innerHTML=record.data[0].Test2;
    document.getElementById("Tests2").innerHTML=record.data[0].Test3;
    document.getElementById("Tests4").innerHTML=record.data[0].Test4;
}
fetchData();
