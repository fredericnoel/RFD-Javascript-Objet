var tab1 = ['pommes de terre', 'camembert', 'pommes', 'bière'];
var tab2 = ['salade', 10, true, Math.PI];

tab1.push('whisky');
tab1.push(tab2);
tab1.push(22);
tab1.push("zzzzzzzzzzz");
tab1.sort();
tab1.reverse();

var reponse = "<ul>";

for (var i = 0 ;  i < tab1.length ; i++) {
  reponse += "<li>";

  if (Array.isArray(tab1[i])) {
    let tab2 = tab1[i];
    reponse += "<ul>";

    for (var j = 0 ; j < tab2.length ; j++) {
      reponse += "<li>";
      reponse += tab2[j];
      reponse += "</li>";
    }
    reponse += "</ul>";
  }

  else {
    reponse += tab1[i];
  }

  reponse += "</li>";
}

reponse += "</ul>";
//reponse = reponse + "</ul>";

document.write(reponse);
