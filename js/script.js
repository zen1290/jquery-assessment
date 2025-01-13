
// t= new time();

function x()
{
    d= new Date();
    document.getElementById('date').innerHTML= (d);
    setTimeout('x()',1000);
    console.log('hi');
    
}
x();

// document.getElementById('time').innerHTML= ();

