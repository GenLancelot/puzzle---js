var obraz;
var wartosc;
var i=1;
var tab=new Array();
	tab[0]=1;
	tab[1]=2;
	tab[2]=3;
	tab[3]=4;
	tab[4]=5;
	tab[5]=6;
	tab[6]=7;
	tab[7]=8;
	tab[8]=9;
function losuj()
{
	
	var wylosowany=Math.floor(Math.random()*9)+1;
	var check=0;
	for(var i=0;i<9;i++)
	{
		if(wylosowany==tab[i])
		{
			obraz="background-image:url('"+wylosowany+".png');";
			wartosc=wylosowany;
			tab[i]=20;
			check=1;
			break;
		}
		else
		{
			check=0;
		}
	}
	while(check==0)
	{
		wylosowany=Math.floor(Math.random()*9)+1;
		for(var i=0;i<9;i++)
		{
			if(wylosowany==tab[i])
			{
				obraz="background-image:url('"+wylosowany+".png');";
				wartosc=wylosowany;
				tab[i]=20;
				check=1;
				break;
			}
		}
	}
	document.getElementById("wylosowany").setAttribute('style',obraz);
	check=0;
	
}
function sprawdzplansze()
{
	if(document.getElementById("poleGL").getAttribute("value")==1 && document.getElementById("poleGS").getAttribute("value")==2 && document.getElementById("poleGP").getAttribute("value")==3 && document.getElementById("poleSL").getAttribute("value")==4 && document.getElementById("poleSS").getAttribute("value")==5 && document.getElementById("poleSP").getAttribute("value")==6 && document.getElementById("poleDL").getAttribute("value")==7 && document.getElementById("poleDS").getAttribute("value")==8 && document.getElementById("poleDP").getAttribute("value")==9)
	{
		alert("ułożyłeś puzzle");
		document.getElementById("wygrana").innerHTML="<input type='button' value='od nowa' onclick='window.location.reload();'/>";
	}
	else
	{
		i=1;
		tab[0]=1;
		tab[1]=2;
		tab[2]=3;
		tab[3]=4;
		tab[4]=5;
		tab[5]=6;
		tab[6]=7;
		tab[7]=8;
		tab[8]=9;
		reset();
	}
}
function f1(pole)
{
	var x=pole.id;
	i++;
	if(i==10)
	{
		
		document.getElementById(x).setAttribute('style',obraz);
		document.getElementById(x).setAttribute('value',wartosc);
		document.getElementById(x).setAttribute('onclick','disabled()');
		sprawdzplansze();
	}
	else
	{
		document.getElementById(x).setAttribute('style',obraz);
		document.getElementById(x).setAttribute('value',wartosc);
		document.getElementById(x).setAttribute('onclick','disabled()');
		losuj();
	}
	
}
function reset()
{
		document.getElementById("poleGL").setAttribute('onclick','f1(this)');
		document.getElementById("poleGS").setAttribute('onclick','f1(this)');
		document.getElementById("poleGP").setAttribute('onclick','f1(this)');
		document.getElementById("poleSL").setAttribute('onclick','f1(this)');
		document.getElementById("poleSS").setAttribute('onclick','f1(this)');
		document.getElementById("poleSP").setAttribute('onclick','f1(this)');
		document.getElementById("poleDL").setAttribute('onclick','f1(this)');
		document.getElementById("poleDS").setAttribute('onclick','f1(this)');
		document.getElementById("poleDP").setAttribute('onclick','f1(this)');
		document.getElementById("poleGL").setAttribute('style','(background-color:white;)');
		document.getElementById("poleGS").setAttribute('style','(background-color:white;)');
		document.getElementById("poleGP").setAttribute('style','(background-color:white;)');
		document.getElementById("poleSL").setAttribute('style','(background-color:white;)');
		document.getElementById("poleSS").setAttribute('style','(background-color:white;)');
		document.getElementById("poleSP").setAttribute('style','(background-color:white;)');
		document.getElementById("poleDL").setAttribute('style','(background-color:white;)');
		document.getElementById("poleDS").setAttribute('style','(background-color:white;)');
		document.getElementById("poleDP").setAttribute('style','(background-color:white;)');
		losuj();
}
function disabled()
{
	
}