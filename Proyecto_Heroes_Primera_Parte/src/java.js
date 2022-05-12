setTimeout(function () {
    var CodigoGlobal = $("#folioGeneradoGlobal").text();

    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    var directorio = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));

    var urlDocumento = directorio + "ImprimeDocumentoTicket3.aspx?CodigoGlobal=" + CodigoGlobal + "&a=";

    var urlImprime = encodeURIComponent(urlDocumento);
    var urlRegreso = encodeURIComponent(directorio + "TerminaImpresion.aspx");

    var urlRedireccion = "starpassprnt://v1/print/nopreview?size=3&back=" + urlRegreso + "&url=" + urlImprime;

    location.href = "heroes.component.html";
}, 3000);