//npm i cookie-parser

/*🔹 Cookies क्या होते हैं (What are Cookies)?
Cookies एक small piece of data होती है जो कि user के browser में store की जाती है जब वो किसी website 
को visit करता है।
//Cookie कैसे काम करती है?
जब user पहली बार site पर जाता है, backend server एक Set-Cookie header के साथ response भेजता है।
Browser उस cookie को locally store कर लेता है।
अगली बार जब भी वही site open होती है, browser उस cookie को Request header में वापस
 भेज देता है – जिससे server को पता चल जाता है कि ये वही user है।
 */

//TUMNE JO BHEJA THA BO PLAIN TEXT PAR SERVER KO MILABLOB IS NOT DIRECTLY READABLE
//AAB ES CHEEJ KO HANDLE KARNA PADEGA KI HAM US BLOOB KO WAPAS SE READABLE KAR SAKE 
//SO WE USE
app.use(express.json());
app.use(express.urlencoded({extended:true}));

