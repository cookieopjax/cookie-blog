# C/C++指標完全解析

## 什麼是指標？
指標是一種資料型態，有點類似int,double等
不同的是它裡面儲存的型態是記憶體位置

### 兩個重要運算子
* 取址運算子(&)：對「任何型態」取址
* 取值運算子(*)：對「指標」取值

:::warning
取值運算子(*)和宣告時的type *是不同的 
:::

#### 使用範例
```c
#include <stdio.h>
int main(){
    int a=5;
    int *b=&a;//用&把a的地址給指標b
    int *c=b;//把指標b的地址給指標c
    printf("&a=%p\n",&a);//取a的位址即為指標b
    printf("b=%p\n",b);//b本身就是a的位置
    printf("c=%p\n",c);//c的位址是b,b的位址是a
    printf("a=%d\n",a);//a本身的值
    printf("*b=%d\n",*b);//用*把指標a的位置的值取出來
    printf("c=%d\n\n",*c);//c的位址是a,用*取出

    *c=7;//改變該位址的大小
    
    printf("&a=%p\n",&a);//a的位址即為指標b
    printf("b=%p\n",b);//b本身就是a的位置
    printf("c=%p\n",c);//c的位址是b,b的位址是a
    printf("a=%d\n",a);//a本身的值
    printf("*b=%d\n",*b);//用*把指標a的位置的值取出來
    printf("c=%d\n",*c);//c的位址是a,用*取出
}
```

```
#include <stdio.h>
int main(){
    int a=5;
    int *b=&a;//用&把a的地址給指標b
    int *c=b;//把指標b的地址給指標c
    printf("&a=%p\n",&a);//取a的位址即為指標b
    printf("b=%p\n",b);//b本身就是a的位置
    printf("c=%p\n",c);//c的位址是b,b的位址是a
    printf("a=%d\n",a);//a本身的值
    printf("*b=%d\n",*b);//用*把指標a的位置的值取出來
    printf("c=%d\n\n",*c);//c的位址是a,用*取出

    *c=7;//改變該位址的大小
    
    printf("&a=%p\n",&a);//a的位址即為指標b
    printf("b=%p\n",b);//b本身就是a的位置
    printf("c=%p\n",c);//c的位址是b,b的位址是a
    printf("a=%d\n",a);//a本身的值
    printf("*b=%d\n",*b);//用*把指標a的位置的值取出來
    printf("c=%d\n",*c);//c的位址是a,用*取出
}
```
這段程式碼中間，我取得指標c的值，將它的值換成7，會發現a,b,c都變成了7，這就是指標有趣的點

## 應用、觀念釐清
輸入兩數 將其交換
```c
#include<stdio.h>
void swap(int *x, int *y){
    int temp=0;
    temp=*x;
    *x=*y;
    *y=temp;
}
int main(){
    int a,b;
    scanf("%d%d",&a,&b);
    swap(&a,&b);
    printf("%d %d\n",a,b);
    return 0;
}
```
:::tip
main中的swap()，利用取址運算子取得a,b之位址，才能跟上面的指標x,y為同一型態
:::

:::warning
swap中的int *x跟後兩行的*x不一樣，前者是宣告變數的型態，後者是取值運算子，用以取得指標的值
:::

## 陣列與指標
當指標碰到陣列，會有種違背上面所學內容的感覺，因此來說指標在陣列中的幾點神奇之處吧!

:::tip
非指標陣列可以自動隱性轉化為指標
:::

學過上面的指標觀念後，應該會覺得兩種不同型態哪能直接指定(=)
但如是陣列型別，會自己把陣列第一個元素位置自動轉性設到指標裡

```c
int a[10];
int *b;
b=a;//可運作，且跟下方一樣
b=&a[0];
```
:::tip
陣列指標可以做一定程度的「運算」
:::

一般觀念下，指標是位址，位址不可能+1-1，但在陣列指標中是可以的，只是它代表的意義是位址的移動

```c
int a[10];
&a[0]+1==&a[1];
&a[2]-1==&a[1];
&a[3]-&a[1]==2;
&a[]+&a[2]==xxx;//不能相加兩個位址，編譯失敗
```

延伸上方觀念
```c
int a[10];
int *b=a;
b+1==*a[1];//位址
*(b+1)==a[1];//值
```

接著得出結論

如果要存取某位址的後面第n個位置的數值，2種寫法皆可：
* *ptr + n)
* ptr[n]

## 函式對於陣列指標的處理
我在剛學C語言時一直有個疑問，為什麼函式庫中，只要關於陣列，輸入的一定會寫成指標型態，但在了解上述的幾項特性後，就會豁然開朗了，因為

**當你對函式輸入非指標「陣列」，C會一律自動轉化成指標處理，而一般陣列和指標陣列在運算過程中完全沒有區別。**


### 字元陣列(字串)指標
談到字元陣列，其實有兩種型態
```c
char a[]="hello";//字元陣列
char *b="hello";//字元指標

a[0]='a';//可直接改值
b[0]='b';//不會編譯錯誤，但會出問題

a="cookie";//編譯錯誤
b="cookie";//可直接改值
```

最特別的指標字串，有兩個特性
１. 因為宣告時沒有給數格空間儲存，因此整個字串任一字元皆不可改(編譯器不會報錯，但實際上有問題)，即只能讀，不能改
２. 可以一次更換整個字串內容

如果不小心改到指標字串的值，編譯器不會報錯，但實際上已經錯了，因此通常會加上const修飾詞避免不小心改到卻沒發現。
有一個重要觀念，是我以前弄不懂得，來釐清一下

::: tip
非指標字串陣列也可隱性轉型成指標字串，但即使它的型態變成了指標字串，它的整個字串任一字元皆「可」改，因為它原本的儲存空間都還在
:::


### 函式對於字串指標的處理
```c
#include<stdio.h>
#include<string.h>
int main(){
    char a[10]="cookie";
    char b[10];
    strcpy(b,a);
    printf("%s",b);//cookie
}
```

這段程式碼看似簡單，但事實上編譯器偷偷幫你做了很多事，學了上面的內容來分析看看吧

`char *strcpy(char *dest, const char *src)`
這是strcpy輸入，注意看可以發現我的a.b輸入根本不符合，卻能正常運行，那是因為C語言偷偷幫我們轉換好了。

１．字元陣列(char a)隱性轉性成字元指標(char *a)
２．字元陣列(char b)隱性轉性成字元指標(char *b)，再轉成const字元指標(const char b)