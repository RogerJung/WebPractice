#include<stdio.h>
#include<stdlib.h>

int main(void)
{
	int a[10];
	int i,temp;
	int length=10;
	scanf("%d%d%d%d%d%d%d%d%d%d",&a[0],&a[1],&a[2],&a[3],&a[4],&a[5],&a[6],&a[7],&a[8],&a[9]);
    while (length>1){
    	length--;
	    for (i=0;i<length;i++){
	    	if (a[i]<a[i+1]){
	    		temp=a[i];
	    		a[i]=a[i+1];
	    		a[i+1]=temp;
			}
		}
   }
   for (i=0;i<10;i++)
   		printf("%d ",a[i]);
   	return 0;
}
