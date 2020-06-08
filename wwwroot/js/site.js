// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

function countWords(){
    let str = "";
    let count = 0;
    
    str = document.getElementById("Entry").value;
    console.log(str);
    for (i = 0; i < str.length; i++)
    {
        if (str.charAt(i) === " ")
        {
            count++;
        }
    }
    
    //count = document.getElementById("wordcount")
    return document.getElementById("wordcount").innerHTML = count;
}
