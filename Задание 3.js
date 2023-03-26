let str = prompt('Введите строку с числами, через пробелы:');
document.write('<p>Введённая строка: ' + str + '</p>');

str = str + ' ';
let pos = 0;
let oldPos = 0;
let newStr = '';
let sum = 0;
let boolIsNum = false;

while (str.indexOf(' ', pos + 1) != -1) 
{
    oldPos = pos;                
    pos = str.indexOf(' ', pos) + 1;  
    newStr = str.slice(oldPos, pos);   

    if (isNaN(parseFloat(newStr)) || !isFinite(newStr)) 
    {
			continue;
    }
    else
    {
					for (let j = 0; j < newStr.length; j++)
					{
						if (newStr.charAt(j) != '.'){
						let currNum = Number(newStr.charAt(j));       
            if(boolIsNum == false) 
            {
                boolIsNum = true;
            }
						sum += currNum;
					}
				}
    }
}

if(boolIsNum == false)
{
    document.write('Во введённой строке нет чисел!');
}
else
{
    document.write('Сумма цифр: ' + sum);
}
