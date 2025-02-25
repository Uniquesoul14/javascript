function print(num,end)
{
    if(num > end)
    {
        return 1 ;
    }

    document.write(end + " ")
    print(num , end - 1 );
}

let n = prompt("Enter any number : ");
n =parseInt(n);

print(1 , n);