let n = prompt('Введите n: ', '10');

if ((isNaN(parseFloat(n)) || !isFinite(n)))
{
    alert('Ошибочное число: ' + n);
}
else if ((n <= 2) || (n>=15))
{
    alert('Недопустимое значение: ' + n);
}
else
{
    n = Number(n);    
    let t = 0;

    for(let i = 1; i< n+1; i++)
    {
        let line = 100/i; // Округлять не будем

        document.write('<hr width=' + line + '%>');
    }

    document.write('<table align="center" border = "1">');
		let x = 1;
    for(let i = 0; i<n;i++)
    {
        document.write('<tr>');
        for(let j = 0; j< n; j++)
        {
            if((i >= n/2) && (j >= n/2))
            {
            	document.write('<td bgcolor="black"> </td>');
            }
						else if ((i == n - j - 1) && (i >= n/2) && (j <= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 2) && (i >= n/2) && (j <= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 3) && (i >= n/2) && (j <= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 4) && (i >= n/2) && (j <= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 5) && (i >= n/2) && (j <= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 6) && (i >= n/2) && (j <= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 7) && (i >= n/2) && (j <= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 8) && (i >= n/2) && (j <= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 9) && (i >= n/2) && (j <= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 1) && (i <= n/2) && (j >= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 2) && (i <= n/2) && (j >= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 3) && (i <= n/2) && (j >= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 4) && (i <= n/2) && (j >= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 5) && (i <= n/2) && (j >= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 6) && (i <= n/2) && (j >= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 7) && (i <= n/2) && (j >= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 8) && (i <= n/2) && (j >= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
						else if ((i == n - j - 9) && (i <= n/2) && (j >= n/2))
						{
							document.write('<td bgcolor="black"> </td>');
						}
            else
            {
                document.write('<td bgcolor="white"> </td>');
            }
        }
        document.write('</tr>');
    }

    document.write('</table>');

    for(let i = n; i> 0; i--)
    {
        let line = 100/i; 

        document.write('<hr width=' + line + '%>');
		}
	}