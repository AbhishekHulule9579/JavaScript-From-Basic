
console.log("************ String declaration ****************")
console.log( "********* by single and double inverted commas" )

let s1='abc';
console.log(s1)
let s2="abc"
console.log(s2)
console.log();

console.log("*********declaration by using constructor *************")
let s3=new String('abcd')
console.log(s3)
console.log();
console.log("*************** Template literals ****************")
let s4="abhi";
let s5=`Hi my name is ${s4}`;
console.log(s5);
console.log();

console.log("*************** Multi line String *******************")
let s6=`        Hi How are you ?
        I am fine , How about you 
        I am fine too`;
console.log(s6);
console.log();
console.log("************* String Operation **************")
console.log();
console.log("************* length ************")
let s7="Abhishek";
console.log("length of s7 is "+s7.length);

console.log();

console.log("********** String concatentation **************")
let s8="Abhishek";
let s9="Hulule";
console.log("Concatentation will be "+s8+s9)

console.log();

console.log("****** find sub string ********")
let t1="Javascript tutorials";
let res=t1.substring(0,4)
console.log(res);

console.log();

console.log("********* to upper case ***********")
let t2="javaScript";
console.log("uppercase--> "+t2.toUpperCase() +" , to lower case--> "+t2.toLowerCase());

console.log();

console.log("********** String search ************");
let t3="abhishekhulule";
console.log(t3.indexOf('hu'));

console.log();

console.log("************** Replace String ***********");
let t4="hi my name is Abhishek";
console.log(t4.replace(/Abhishek/g,'Rushikesh'));

console.log();

console.log("******** Trimming white space *********");
let t5='          Hi I am from Associative               ';
console.log(t5.trim());

console.log();
