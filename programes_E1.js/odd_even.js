const odd_even =100;
odd_sum=0;even_sum=0;
for (i = 1; i <=odd_even; i++)
    {
        if (i % 2 == 0)
            even_sum = even_sum + i;
        else
            odd_sum = odd_sum + i;
    }
console.log("total odd numbers is", odd_sum);
console.log("total even numbers", even_sum);